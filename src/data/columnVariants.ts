type ColumnVariant = { id: string; title: string; description: string; html: string };
const copy = 'This flexible column creates room for useful content, supporting detail and clear hierarchy.';
const col = (label: string, extra = '') => `<div class="${extra} p-6"><div class="mb-3 text-2xl font-bold text-blue-600">${label}</div><p class="leading-7 text-gray-600">${copy}</p></div>`;
const layout = (classes: string, count: number, section = 'bg-gray-50 py-20 text-gray-500') => `<section class="${section}"><div class="container mx-auto px-4"><div class="flex flex-wrap -mx-4">${Array.from({ length: count }, (_, i) => col(String(i + 1).padStart(2, '0'), `w-full ${classes}`)).join('')}</div></div></section>`;
const items = [
  ['columns-two-equal-01', 'Two equal columns', 'A balanced two-column split for a simple content relationship.', 'md:w-6/12', 2],
  ['columns-two-wide-01', 'Two wide and narrow columns', 'A dominant content column supported by a smaller secondary column.', 'md:w-8/12', 1],
  ['columns-two-narrow-01', 'Two narrow and wide columns', 'A supporting column leading into a broad reading area.', 'md:w-4/12', 1],
  ['columns-three-equal-01', 'Three equal columns', 'A classic three-column arrangement for services or summaries.', 'md:w-4/12', 3],
  ['columns-four-equal-01', 'Four equal columns', 'A compact four-column row for short items and quick scanning.', 'sm:w-6/12 lg:w-3/12', 4],
  ['columns-six-equal-01', 'Six compact columns', 'A dense six-column structure for small links, labels or statistics.', 'sm:w-6/12 md:w-4/12 lg:w-2/12', 6],
  ['columns-five-equal-01', 'Five equal columns', 'A flexible five-item row for logos, links or short feature points.', 'sm:w-6/12 md:w-4/12 lg:w-1/5', 5],
  ['columns-asymmetric-01', 'Asymmetric editorial split', 'A wide reading column paired with two stacked supporting items.', 'md:w-8/12', 1],
  ['columns-sidebar-01', 'Main content and sidebar', 'A familiar article and sidebar relationship for information pages.', 'md:w-8/12', 1],
  ['columns-sidebar-reverse-01', 'Reversed sidebar layout', 'A sidebar-leading arrangement that changes the reading entry point.', 'md:w-4/12', 1],
  ['columns-featured-01', 'Featured column and three items', 'One dominant item alongside three smaller supporting columns.', 'md:w-6/12', 1],
  ['columns-featured-02', 'Three items and featured column', 'Three supporting items leading into a final dominant column.', 'md:w-4/12', 3],
  ['columns-centred-01', 'Centred narrow column', 'A narrow reading measure for statements, introductions or forms.', 'mx-auto md:w-8/12', 1],
  ['columns-offset-01', 'Offset column pair', 'A deliberately offset pair for a more editorial composition.', 'md:ml-1/12 md:w-5/12', 2],
  ['columns-stacked-01', 'Stacked responsive columns', 'Columns that naturally collapse into a clear single-column sequence.', 'md:w-4/12', 3],
  ['columns-border-01', 'Divided columns', 'Equal columns separated by borders to clarify relationships.', 'border-b border-gray-200 md:border-b-0 md:border-r md:w-4/12', 3],
  ['columns-dark-01', 'Dark column row', 'An inverted column treatment for a strong contrast section.', 'md:w-4/12', 3],
  ['columns-card-01', 'Card columns', 'Independent card surfaces within a flexible column row.', 'sm:w-6/12 lg:w-3/12', 4],
  ['columns-icon-01', 'Icon-led columns', 'Short icon-led columns for features, benefits or process steps.', 'md:w-4/12', 3],
  ['columns-final-01', 'Closing column group', 'A broad final column structure for summarising a page or offer.', 'md:w-3/12', 4],
];
export const columnVariants: ColumnVariant[] = items.map(([id, title, description, classes, count], index) => ({ id: String(id), title: String(title), description: String(description), html: layout(String(classes), Number(count), index === 16 ? 'bg-gray-900 py-20 text-gray-300' : index === 17 ? 'bg-white py-20 text-gray-500' : 'bg-gray-50 py-20 text-gray-500') }));
