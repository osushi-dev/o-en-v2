angular.module('starter.directives.pokete-image-add', [])

.directive('poketeImageAdd', function() {
  return {
    scope: {
      pokete: "="
    },
    templateUrl: 'js/directives/pokete-image-add/pokete-image-add.html',
    link: function(scope, elem, attrs) {
    },
    controller: function() {
    }
  };
});
