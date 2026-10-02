type ContentVariant = { id: string; title: string; description: string; html: string };

const copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat sem ac elit rutrum rhoncus. Donec a lacinia metus. Morbi volutpat interdum sem, vitae aliquam odio tempor blandit.';
const images = [
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1488998527040-85054a85150e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80',
];

const image = (src: string, className = 'mx-auto w-full') => `<img src="${src}" class="${className}" alt="" width="900" height="600" loading="lazy"/>`;
const button = (label = 'Read More', extra = '') => `<a href="#" class="bg-blue-600 hover:bg-blue-700 inline-block px-5 py-2 rounded-xs text-white ${extra}">${label}</a>`;
const heading = (kicker = 'About Us', title = 'We work together to play, have fun, design and create') => `<h2 class="font-medium mb-1 text-blue-600">${kicker}</h2><h3 class="font-bold mb-2 text-4xl text-gray-800">${title}</h3>`;

function split(className: string, mediaFirst: boolean, title: string, src: string) {
  const media = `<div class="p-4 w-full lg:w-6/12 ${mediaFirst ? 'lg:order-1' : 'lg:order-2'}">${image(src, 'mx-auto w-full')}</div>`;
  const text = `<div class="p-4 w-full lg:w-6/12 ${mediaFirst ? 'lg:order-2' : 'lg:order-1'}">${heading('About Us', title)}<p class="mb-6">${copy}</p>${button('Read More')}</div>`;
  return `<section class="${className}"><div class="container mx-auto px-4 relative"><div class="flex flex-wrap -mx-4 items-center">${media}${text}</div></div></section>`;
}

function story(className: string, centered = false, title = 'We work together to play, have fun, design and create') {
  return `<section class="${className}"><div class="container mx-auto px-4 relative"><div class="flex flex-wrap -mx-4 items-center"><div class="mx-auto p-4 text-${centered ? 'center' : 'left'} w-full lg:w-7/12">${heading('Our Story', title)}<p class="mb-6">${copy}</p>${button('Read More')} <a href="#" class="border border-blue-600 hover:bg-blue-600 hover:text-white inline-block ml-2 px-5 py-2 rounded-xs text-blue-600">Get It Now</a></div></div></div></section>`;
}

function alternating(className: string, narrow = false) {
  const width = narrow ? 'lg:w-4/12' : 'lg:w-6/12';
  return `<section class="${className}"><div class="container mx-auto px-4 relative lg:text-left text-center"><div class="flex flex-wrap -mx-4 items-center">${images.map((src, index) => `<div class="flex w-full items-center ${index % 2 ? 'lg:flex-row-reverse' : ''}"><div class="p-4 w-full ${width}">${image(src)}</div><div class="p-4 w-full ${narrow ? 'lg:w-8/12' : 'lg:w-6/12'}"><div class="py-4"><h3 class="font-bold mb-1 text-gray-800 text-xl">We work together</h3><p>${copy}</p></div></div></div>`).join('')}</div></div></section>`;
}

const process = `<section class="bg-gray-50 py-20 text-gray-500"><div class="container mx-auto px-4"><h2 class="font-medium mb-1 text-center text-red-600 text-xl">Our Process</h2><h3 class="font-medium mb-6 text-4xl text-center text-gray-800">Our experience-driven solid process</h3><div class="grid gap-6 md:grid-cols-3"><div class="bg-white p-8 shadow-sm"><span class="text-4xl font-bold text-blue-600">01</span><h4 class="mt-6 text-xl font-bold text-gray-900">Discuss requirements</h4><p class="mt-3">Understand the challenge, audience and desired outcome.</p></div><div class="bg-white p-8 shadow-sm"><span class="text-4xl font-bold text-blue-600">02</span><h4 class="mt-6 text-xl font-bold text-gray-900">Define the direction</h4><p class="mt-3">Shape the content, structure and decisions that move the work forward.</p></div><div class="bg-white p-8 shadow-sm"><span class="text-4xl font-bold text-blue-600">03</span><h4 class="mt-6 text-xl font-bold text-gray-900">Build and improve</h4><p class="mt-3">Turn the agreed direction into a useful, reviewable result.</p></div></div></div></section>`;

export const contentVariants: ContentVariant[] = [
  { id: 'content-split-art-01', title: 'Split illustration and copy', description: 'Large illustration-led introduction with copy and CTA beside it.', html: split('bg-gray-50 py-20 text-gray-500', false, 'We work together to play, have fun, design and create', images[0]) },
  { id: 'content-split-art-02', title: 'Reversed split introduction', description: 'The same split relationship with the visual leading on the left.', html: split('bg-gray-50 py-20 text-gray-500', true, 'We work together to play, have fun, design and create', images[1]) },
  { id: 'content-story-01', title: 'Story with two actions', description: 'Two-column story block with primary and secondary actions.', html: story('bg-gray-50 py-20 text-gray-500') },
  { id: 'content-story-centred-01', title: 'Centred story statement', description: 'Focused single-column story treatment with centred copy.', html: story('bg-gray-50 py-20 text-gray-500', true) },
  { id: 'content-story-media-01', title: 'Story with supporting media', description: 'Centred story introduction paired with a visual anchor.', html: split('bg-gray-50 py-20 text-gray-500', true, 'Our story is built through useful work', images[2]) },
  { id: 'content-story-dark-01', title: 'Dark story block', description: 'Inverted story treatment for a strong section transition.', html: story('bg-gray-900 py-20 text-gray-300', false, 'A useful story deserves room to breathe') },
  { id: 'content-alternating-01', title: 'Alternating image rows', description: 'Three editorial rows that alternate image and copy alignment.', html: alternating('bg-gray-50 py-20 text-gray-500') },
  { id: 'content-alternating-02', title: 'Reversed alternating rows', description: 'Alternating content rows with the opening image on the opposite side.', html: alternating('bg-gray-50 py-20 text-gray-500', true) },
  { id: 'content-alternating-03', title: 'Inset alternating rows', description: 'More compact image and copy rows for a denser narrative page.', html: alternating('bg-gray-50 py-20 text-gray-500', true) },
  { id: 'content-process-01', title: 'Process overview', description: 'Three-step process section that turns a service story into a sequence.', html: process },
  { id: 'content-process-dark-01', title: 'Dark process overview', description: 'Dark process treatment for a more dramatic editorial break.', html: process.replaceAll('bg-gray-50 text-gray-500', 'bg-gray-800 text-gray-300').replaceAll('bg-white', 'bg-gray-900').replaceAll('text-gray-900', 'text-white') },
  { id: 'content-wide-media-01', title: 'Wide media and detail', description: 'Large visual beside a stacked set of supporting details.', html: split('bg-black/90 py-20 text-center text-gray-500 lg:text-left', false, 'Work that brings people and ideas together', images[0]) },
  { id: 'content-wide-copy-01', title: 'Wide copy beside media', description: 'A broad content column paired with a smaller visual panel.', html: split('py-20 text-gray-500', true, 'Define the work before you build it', images[1]) },
  { id: 'content-dark-split-01', title: 'Dark split feature', description: 'Dark two-column content treatment with high-contrast action.', html: split('bg-gray-800 py-20 text-gray-300', false, 'Make the important idea easy to understand', images[2]) },
  { id: 'content-centred-media-01', title: 'Centred media story', description: 'Centred narrative with an illustration or image placed between title and copy.', html: split('bg-gray-50 py-20 text-center text-gray-500', true, 'A clearer way to tell the story', images[0]) },
  { id: 'content-compact-split-01', title: 'Compact split detail', description: 'Compact two-column content block for supporting sections.', html: split('bg-gray-50 py-20 text-gray-500', false, 'The details make the difference', images[1]) },
  { id: 'content-dark-centred-01', title: 'Dark centred statement', description: 'Centred text and action on a dark background for emphasis.', html: story('bg-gray-800 py-20 text-center text-gray-300', true, 'Good work starts with a useful conversation') },
  { id: 'content-light-centred-01', title: 'Light centred statement', description: 'Quiet centred content treatment with a simple action pair.', html: story('bg-gray-50 py-20 text-center text-gray-500', true, 'Start with the part that matters most') },
  { id: 'content-image-led-01', title: 'Image-led narrative', description: 'A media-forward content block with supporting editorial copy.', html: split('bg-gray-50 py-20 text-gray-500', true, 'Show the work, then explain the thinking', images[2]) },
  { id: 'content-final-summary-01', title: 'Final summary block', description: 'Closing content pattern for summarising a story and inviting the next step.', html: story('bg-gray-50 font-light py-20 text-gray-500', false, 'Bring the story together and make the next step clear') },
];
