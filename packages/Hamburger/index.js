import Hamburger from './src/index';

/* istanbul ignore next */
Hamburger.install = function(Vue) {
  Vue.component(Hamburger.name, Hamburger);
};

export default Hamburger;