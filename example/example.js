(function() {
  'use strict';

  const el = document.querySelectorAll.bind(document);

  const start = el('.start-color')[0];
  const end = el('.end-color')[0];
  const endText = el('.end-color-text')[0];

  const input = el('.start-color__input')[0];
  input.addEventListener('change', handleInputChange);
  handleInputChange();

  function handleInputChange() {
    const color = input.value;
    start.style.borderColor = color;
    if (spin) {
      const compColor = spin.splitComplement(color);
      console.log(compColor);
      end.style.backgroundColor = `rgb(${compColor.colors[0].join(', ')})`;
      endText.style.color = `rgb(${compColor.colors[1].join(', ')})`;
    }
  }
}());
