function toggleDisplay(element) {
  console.log(element.id);
}
const optionHi = document.querySelectorAll('.menus');

optionHi.forEach((item) => item.addEventListener('click', () => {
  toggleDisplay(item);
}));