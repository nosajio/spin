(function() {
  'use strict';

  const el = document.querySelectorAll.bind(document);

  const start = el('.start-color')[0];
  const endOne = el('.end-color-one')[0];
  const endTwo = el('.end-color-two')[0];

  const input = el('.start-color__input')[0];
  input.addEventListener('change', handleInputChange);
  handleInputChange();

  function handleInputChange() {
    const color = input.value;
    start.style.backgroundColor = color;
    if (spin) {
      const compColor = spin.splitComplement(color);
      console.log(compColor);
      endOne.style.backgroundColor = `rgb(${compColor.colors[0].join(', ')})`;
      endTwo.style.backgroundColor = `rgb(${compColor.colors[1].join(', ')})`;
    }
  }
}());
