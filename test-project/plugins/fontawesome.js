import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faChevronLeft, faEnvelope, faUser, faKey, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faGoogle, faApple, faFacebook, faArrowLeft, faChevronLeft, faEnvelope, faUser, faKey,faSearch);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});