import StringInput from './src/StringInput';

/* istanbul ignore next */
StringInput.install = function(Vue) {
  Vue.component(StringInput.name, StringInput);
};

export default StringInput;