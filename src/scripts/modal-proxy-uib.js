'use strict';

angular.module('adf.modal', ['ui.bootstrap']).service('ModalProxy', function ($uibModal) {
  return {
     open: function(config) {
       return $uibModal.open(config);
     }
  };
});