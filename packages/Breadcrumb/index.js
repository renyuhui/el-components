import Breadcrumb from './src/index';

/* istanbul ignore next */
Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;