import ComplexForm from './src/ComplexForm';

/* istanbul ignore next */
ComplexForm.install = function(Vue) {
  Vue.component(ComplexForm.name, ComplexForm);
};

export default ComplexForm;