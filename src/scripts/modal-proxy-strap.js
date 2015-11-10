'use strict';

angular.module('adf').service('ModalProxy', function ($modal) {
  return {
     open: function(config) {
       var modal = $modal(config);
       return {
         close: function() {
           modal.hide();
         }
       };
     }
  };
});