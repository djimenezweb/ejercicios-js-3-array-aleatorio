import '../scss/styles.scss';

const destinyTitle = document.getElementById('destiny-title');
const buttons = document.getElementById('buttons');

const DESTINY_ITEMS = {
  names: ['Elisa', 'Alejandro', 'Daniel'],
  numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  things: ['dinosaurios', 'capones', 'abrazos']
};

let selectedName = '';
let selectedNumber = '';
let selectedThing = '';

const selectItem = array => {
  return array[Math.floor(Math.random() * array.length)];
};

buttons.addEventListener('click', ev => {
  if (ev.target.dataset.item === 'name') {
    selectedName = selectItem(DESTINY_ITEMS.names);
  } else if (ev.target.dataset.item === 'number') {
    selectedNumber = selectItem(DESTINY_ITEMS.numbers);
  } else if (ev.target.dataset.item === 'thing') {
    selectedThing = selectItem(DESTINY_ITEMS.things);
  }
  destinyTitle.textContent = `${selectedName} se merece ${selectedNumber} ${selectedThing}`;
});
