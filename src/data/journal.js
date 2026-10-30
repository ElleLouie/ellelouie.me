// Entries for the food journal. Each one becomes a spread: the painting on the
// left page and the notes on the right.
//
// A meal:
// {
//   type: 'meal',
//   title: 'Name of the dish or place',
//   place: 'Restaurant · City',
//   date: 'Oct 12',
//   note: 'One line about the moment.',
//   stamp: 'would go back',
//   painting: paintingImg,   // import it from src/img/food-journal/
// }
//
// A recipe:
// {
//   type: 'recipe',
//   title: 'Name of the recipe',
//   meta: 'Serves 2 · 30 min',
//   ingredients: ['…', '…'],
//   steps: ['…', '…'],
//   stamp: 'make again',     // optional
//   painting: paintingImg,
// }
//
// Without a `painting`, a watercolor placeholder in `color` is shown instead.
// Everything below is sample content, to be replaced with real entries.

const entries = [
  {
    type: 'meal',
    title: 'A meal I loved',
    place: 'Restaurant · City',
    date: 'Month Day',
    note: 'A line about the moment: who I was with, and what made it good.',
    stamp: 'would go back',
    color: '#e8a598',
  },
  {
    type: 'recipe',
    title: 'Recipe name',
    meta: 'Serves 2 · 30 min',
    ingredients: ['First ingredient', 'Second ingredient', 'Something fresh', 'A pinch of salt'],
    steps: ['The first step.', 'What happens next.', 'How to finish and serve.'],
    stamp: 'make again',
    color: '#d9c27a',
  },
  {
    type: 'meal',
    title: 'A little bakery find',
    place: 'Bakery · City',
    date: 'Month Day',
    note: 'A note about why this one stuck with me.',
    stamp: 'worth the wait',
    color: '#c9a0a8',
  },
  {
    type: 'recipe',
    title: 'A cozy dinner',
    meta: 'Serves 4 · 1 hr',
    ingredients: ['Main ingredient', 'Something green', 'A good sauce', 'Bread for dipping'],
    steps: ['Prep everything first.', 'Cook low and slow.', 'Finish with something bright.'],
    color: '#9fb8a0',
  },
  {
    type: 'meal',
    title: 'Dessert worth remembering',
    place: 'Café · City',
    date: 'Month Day',
    note: 'One sentence is plenty.',
    stamp: 'order the dessert',
    color: '#b9a6d6',
  },
];

export default entries;
