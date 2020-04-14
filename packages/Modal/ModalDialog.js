import ModalDialog from './src/ModalDialog';

/* istanbul ignore next */
ModalDialog.install = function(Vue) {
  Vue.component(ModalDialog.name, ModalDialog);
};

export default ModalDialog;