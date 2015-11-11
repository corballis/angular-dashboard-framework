'use strict';

angular.module('adf.modal', ['mgcrea.ngStrap']).service('ModalProxy', function ($modal) {
  return {
     open: function(config) {
       config.template = config.templateUrl;
       delete config.templateUrl;
       var modal = $modal(config);
       return {
         close: function() {
           modal.hide();
         }
       };
     }
  };
});