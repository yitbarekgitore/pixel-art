import $ from 'jquery';

const printToDom = (divId, toPrint) => {
  /* # Tells us this is css */
  $(`#${divId}`).html(toPrint);
};
export default { printToDom };
