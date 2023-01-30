// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const destinyTitle = document.getElementById('destiny-title');

const DESTINY_ITEMS = {
  names: ['Elisa', 'Alejandro', 'Daniel'],
  numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  things: ['besos', 'capones', 'abrazos']
};

let itemname = '';
let itemnumber = '';
let itemthing = '';

const printData = (array, item) => {
  console.log(item);
  item = array[Math.floor(Math.random() * array.length)];
  destinyTitle.textContent = `${itemname} ${itemnumber} ${itemthing}`;
};

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', ev => {
    const array = ev.target.dataset.item + 's';
    const item = 'item' + ev.target.dataset.item;
    printData(DESTINY_ITEMS[array], item);
  });
});
