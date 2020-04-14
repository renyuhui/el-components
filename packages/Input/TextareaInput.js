import TextareaInput from './src/TextareaInput';

/* istanbul ignore next */
TextareaInput.install = function(Vue) {
  Vue.component(TextareaInput.name, TextareaInput);
};

export default TextareaInput;