/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menuToggle'),
  drawer: document.querySelector('#navMobile'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipLinkElem = document.querySelector('.skipLink');
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#mainContent').focus();
});
