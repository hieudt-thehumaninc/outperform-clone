import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.provide('fullpage', fullpage);
  }
});
