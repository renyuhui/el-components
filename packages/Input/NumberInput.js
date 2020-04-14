import NumberInput from './src/NumberInput';

/* istanbul ignore next */
NumberInput.install = function(Vue) {
  Vue.component(NumberInput.name, NumberInput);
};

export default NumberInput;