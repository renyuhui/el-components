import ComplexTable from './src/ComplexTable';

/* istanbul ignore next */
ComplexTable.install = function(Vue) {
  Vue.component(ComplexTable.name, ComplexTable);
};

export default ComplexTable;