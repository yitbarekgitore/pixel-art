import $ from 'jquery';
import utils from '../../helpers/utilities';

const colors = ['green', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

const printColorPicker = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
    <div class="form-check form-check-inline">
      <input name="color" class="form-check-input color-choice" type="radio" id="${color}inlineCheckbox1" value="${color}">
      <label class="form-check-label" for="${color}inlineCheckbox1">${color}</label>
    </div>
    `;

    utils.printToDom('color-picker', domString);
  }
};

const paintPixel = (event) => {
  const pixel = $(event.target);
  const colorChoice = $('.color-choice:checked').val();
  pixel.css('backgroundColor', colorChoice);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { printColorPicker, attachEvents };
