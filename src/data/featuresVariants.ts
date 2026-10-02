type FeatureVariantConfig = {
  id: string;
  title: string;
  description: string;
  section: string;
  cards: string;
  card: string;
  icon: string;
  iconWrap?: string;
  layout?: string;
  cardExtra?: string;
};

const icons = [
  '<path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z"/>',
  '<path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 1.414-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z"/>',
  '<path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z"/>',
  '<path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z"/>',
];

const names = ['Development', 'Product Design', 'UI/UX Research', 'Digital Marketing'];
const copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor.';

function cards(cardClass: string, iconClass: string, linkClass: string, iconWrap = '') {
  return names.map((name, index) => `<div class="${cardClass}">${iconWrap}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="${iconClass}" fill="currentColor">${icons[index]}</svg>${iconWrap ? '</span>' : ''}<h4 class="font-bold mb-2 text-gray-900 text-xl">${name}</h4><p class="mb-4">${copy}</p><a href="#" class="${linkClass}">Learn More</a></div>`).join('');
}

function render(config: FeatureVariantConfig) {
  const body = `<div class="container mx-auto px-4 relative"><div class="flex flex-wrap -mx-4 items-center mb-4"><div class="px-4 w-full lg:w-7/12"><h2 class="font-medium mb-1 text-blue-600">Services</h2><h3 class="font-bold leading-tight mb-1 text-3xl text-gray-900">We can do useful things for our clients</h3><p class="mb-4">${copy}</p></div><div class="px-4 w-full lg:text-right lg:w-5/12"><a href="#" class="bg-blue-600 hover:bg-blue-700 inline-block px-5 py-2 rounded-xs text-white">Read More</a></div></div><div class="${config.cards}">${cards(config.card, config.icon, 'hover:text-blue-800 hover:underline text-blue-600', config.iconWrap)}</div></div>`;
  return `<section class="${config.section}">${body}</section>`;
}

const configs: FeatureVariantConfig[] = [
  { id: 'features-soft-01', title: 'Soft four-card grid', description: 'Light card grid with generous spacing and a subtle stagger between services.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-100 px-6 py-16 rounded-lg shadow-lg', icon: 'h-10 inline-block mb-4 text-gray-900 w-10' },
  { id: 'features-dark-01', title: 'Dark four-card grid', description: 'Inverted card treatment for a darker, higher-contrast services section.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-600 px-6 py-16 rounded-lg shadow-lg text-white', icon: 'h-10 inline-block mb-4 w-10 text-white' },
  { id: 'features-bordered-01', title: 'Bordered four-card grid', description: 'A restrained bordered version that keeps the hierarchy open and lightweight.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 border border-blue-600 px-6 py-16 rounded-lg text-blue-600', icon: 'h-10 inline-block mb-4 w-10 text-blue-600' },
  { id: 'features-bare-01', title: 'Bare four-card grid', description: 'Unboxed service list with more emphasis on icon, title and link.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 py-4', icon: 'h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-centred-01', title: 'Centred service grid', description: 'Centred heading and cards for a compact, symmetrical services introduction.', section: 'bg-gray-50 py-20 text-center text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 py-4', icon: 'h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-circle-01', title: 'Circular icon grid', description: 'Feature cards with large circular icon holders for a friendlier visual rhythm.', section: 'bg-gray-50 py-20 text-center text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 py-4', icon: 'h-12 w-12', iconWrap: '<span class="bg-white border-4 border-blue-600 inline-block mb-4 p-12 rounded-full text-blue-600">' },
  { id: 'features-split-01', title: 'Split introduction and grid', description: 'Copy and CTA on the left with a compact two-by-two service grid on the right.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 sm:w-6/12 lg:w-6/12 py-4', icon: 'h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-staggered-01', title: 'Staggered card grid', description: 'Offset cards create a more editorial rhythm while keeping the four-item structure.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-100 px-6 py-16 rounded-lg shadow-lg', icon: 'h-10 inline-block mb-4 text-gray-900 w-10', cardExtra: 'staggered' },
  { id: 'features-blue-01', title: 'Blue hover cards', description: 'Interactive cards that invert to blue on hover and make each service feel actionable.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg', icon: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10' },
  { id: 'features-gray-hover-01', title: 'Gray hover cards', description: 'Neutral service cards with a darker hover state for a quieter interaction cue.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-100 block group hover:bg-gray-700 hover:text-white px-6 py-16 rounded-lg shadow-lg', icon: 'group-hover:text-white h-10 inline-block mb-4 text-gray-700 w-10' },
  { id: 'features-dark-hover-01', title: 'Dark hover cards', description: 'Dark card family with a strong hover transition for a more product-like treatment.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-600 block group hover:bg-gray-700 hover:text-white px-6 py-16 rounded-lg shadow-lg text-white', icon: 'group-hover:text-white h-10 inline-block mb-4 w-10' },
  { id: 'features-blue-border-01', title: 'Blue outline cards', description: 'Outlined interactive cards that use colour rather than shadow to define the grid.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 block border border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg text-blue-600', icon: 'h-10 inline-block mb-4 w-10' },
  { id: 'features-image-01', title: 'Image-backed service cards', description: 'Feature cards that place an atmospheric image behind the icon and service label.', section: 'bg-gray-50 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-blue-600 block group hover:bg-white hover:text-gray-800 px-10 py-16 relative text-white', icon: 'group-hover:text-blue-600 h-12 inline-block mb-4 w-12' },
  { id: 'features-tall-01', title: 'Tall three-column services', description: 'Three wide panels with equal height and a large vertical presence.', section: 'bg-gray-50 px-4 text-gray-500', cards: 'flex flex-wrap -mx-4 text-center', card: 'w-full md:w-4/12 bg-gray-100 block group h-full hover:bg-blue-600 hover:text-white px-10 py-16 relative xl:py-40', icon: 'group-hover:text-white h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-tall-motion-01', title: 'Tall transition cards', description: 'Tall three-column layout with a slower hover transition for a more expressive interaction.', section: 'bg-gray-50 px-4 text-gray-500', cards: 'flex flex-wrap -mx-4 text-center', card: 'w-full md:w-4/12 bg-gray-100 block duration-500 group h-full hover:bg-blue-600 hover:text-white px-10 py-16 relative xl:py-40', icon: 'group-hover:text-white h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-tall-fast-01', title: 'Tall quick-action cards', description: 'Tall three-column layout with a faster transition for immediate service discovery.', section: 'bg-gray-50 px-4 text-gray-500', cards: 'flex flex-wrap -mx-4 text-center', card: 'w-full md:w-4/12 bg-gray-100 block duration-150 group h-full hover:bg-blue-600 hover:text-white px-10 py-16 relative xl:py-40', icon: 'group-hover:text-white h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-dark-tall-01', title: 'Dark tall service cards', description: 'A darker three-column panel system for bold service positioning.', section: 'bg-gray-50 px-4 text-gray-500', cards: 'flex flex-wrap -mx-4 text-center', card: 'w-full md:w-4/12 bg-gray-600 block group h-full hover:bg-gray-800 hover:text-white px-10 py-16 relative xl:py-40 text-white', icon: 'group-hover:text-white h-12 inline-block mb-4 w-12' },
  { id: 'features-split-02', title: 'Copy beside four services', description: 'A wider split layout with the explanatory copy isolated from a two-by-two service grid.', section: 'bg-gray-50 px-4 py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 md:w-6/12 lg:w-6/12 py-4', icon: 'h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-wide-01', title: 'Wide three-service strip', description: 'Large left-hand introduction paired with three equal service columns.', section: 'bg-gray-50 px-4 text-gray-500', cards: 'flex flex-wrap -mx-4 text-center', card: 'w-full md:w-4/12 bg-gray-100 block group h-full hover:bg-blue-600 hover:text-white px-10 py-16 relative xl:py-40', icon: 'group-hover:text-white h-12 inline-block mb-4 text-blue-600 w-12' },
  { id: 'features-compact-01', title: 'Compact service cards', description: 'A denser card treatment suited to pages where features support a larger story.', section: 'py-20 text-gray-500', cards: 'flex flex-wrap -mx-4', card: 'w-full p-4 xl:w-3/12 sm:w-6/12 bg-gray-100 block group hover:bg-blue-600 hover:text-white px-6 py-16 rounded-lg shadow-lg', icon: 'group-hover:text-white h-10 inline-block mb-4 text-blue-600 w-10' },
];

export const featureVariants = configs.map((config) => ({ ...config, html: render(config) }));
