// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const destinyTitle = document.getElementById('destiny-title');

const DESTINY_ITEMS = {
  names: ['Elisa', 'Alejandro', 'Daniel'],
  numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  things: ['besos', 'capones', 'abrazos']
};

// Math.floor(Math.random() * array.length)

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', ev => {
    const array = ev.target.dataset.item + 's';
    printData(DESTINY_ITEMS[array]);
  });
});
