import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../dist/components/index.html', import.meta.url), 'utf8');

// These are render-contract checks for the public showcase, not substitutes for browser QA.
test('showcase has no placeholder destinations or demo contact details', () => {
  assert.doesNotMatch(page, /href=["']#["']/);
  assert.doesNotMatch(page, /hello@example\.com/);
  assert.doesNotMatch(page, /© 2026 Studio\./);
});

test('every content image has meaningful alternative text', () => {
  const images = page.match(/<img\b[^>]*>/g) ?? [];
  assert.ok(images.length > 0);
  for (const image of images) assert.match(image, /\balt="[^"]+"/);
});

test('demonstration contact form cannot submit to a nonexistent endpoint', () => {
  const forms = page.match(/<form\b[^>]*>/g) ?? [];
  assert.equal(forms.length, 1);
  assert.doesNotMatch(forms[0], /\baction=/);
  assert.doesNotMatch(forms[0], /\bmethod=["']post["']/);
  assert.match(page, /data-form-mode="demo"/);
  assert.match(page, /<fieldset\b[^>]*disabled/);
  assert.match(page, /Form preview only/);
});

test('showcase preserves accessible field labels and real CTA destinations', () => {
  for (const label of ['Name', 'Email', 'Message']) assert.match(page, new RegExp(`<label[^>]*>${label}`));
  assert.match(page, /href="\/"[^>]*>Start building/);
});

test('content without destinations does not invent article or pricing actions', () => {
  assert.doesNotMatch(page, /Read article →/);
  assert.doesNotMatch(page, /Choose plan/);
  assert.match(page, /href="\/features\/"[^>]*>Explore patterns/);
});
