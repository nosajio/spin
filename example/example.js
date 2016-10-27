(function() {
  'use strict';

  const el = document.querySelectorAll.bind(document);

  const start = el('.start-color')[0];
  const end = el('.end-color')[0];

  const input = el('.start-color__input')[0];
  input.addEventListener('change', handleInputChange);
  handleInputChange();

  function handleInputChange() {
    const color = input.value;
    start.style.backgroundColor = color;
    if (spin) {
      const compColor = spin.complement(color);
      end.style.backgroundColor = compColor;
    }
  }
}());
