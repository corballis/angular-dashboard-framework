'use strict';

angular.module('adf').service('ModalProxy', function ($uibModal) {
  return {
     open: function(config) {
       return $uibModal.open(config);
     }
  };
});