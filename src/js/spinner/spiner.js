import {Spinner} from 'spin.js';
import './spinner.scss';
// import 'spin.js/spin.css';

const opts = {
  lines: 14, // The number of lines to draw
  length: 25, // The length of each line
  width: 14, // The line thickness
  radius: 33, // The radius of the inner circle
  scale: 1.1, // Scales overall size of the spinner
  corners: 0.6, // Corner roundness (0..1)
  speed: 0.8, // Rounds per second
  rotate: 43, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#FF6B08', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '48%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const target = document.getElementById('spinner');
const spinner = new Spinner(opts);
const startSpinner = () => spinner.spin(target);
const stopSpinner = () => spinner.stop();

   

export { startSpinner, stopSpinner };