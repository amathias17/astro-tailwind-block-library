import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../dist/starter/index.html', import.meta.url), 'utf8');

test('starter composes a complete site without catalogue navigation', () => {
  assert.equal((page.match(/<h1\b/g) ?? []).length, 1);
  for (const heading of ['What a good start looks like', 'The approach', 'Example testimonials', 'Contact preview']) {
    assert.ok(page.includes(heading), `Missing section: ${heading}`);
  }
  assert.ok(!page.includes('href="/headers/"'), 'Starter should use its own navigation');
  assert.ok(page.includes('data-starter-menu'), 'Starter should expose a mobile menu');
  assert.ok(page.includes('</main><footer'), 'Site footer should follow main content');
});

test('starter has real destinations, explicit sample content, and a safe form', () => {
  assert.ok(!page.includes('href="#"'));
  assert.ok(page.includes('Example site, not a live service'));
  assert.ok(page.includes('Example testimonials'));
  assert.ok(page.includes('data-form-mode="demo"'));
  assert.ok(page.includes('<fieldset disabled'));
  assert.ok(!page.includes('method="post"'));
});

test('starter images and links are self-contained and meaningful', () => {
  assert.ok(page.includes('src="/images/studio-workflow.svg"'));
  assert.ok(page.includes('alt="Abstract illustration of layout decisions on a design board"'));
  assert.ok(!page.includes('images.unsplash.com'));
});
