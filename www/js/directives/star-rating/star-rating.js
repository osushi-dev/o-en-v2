angular.module('starter.directives.star-rating', [])

.directive('starRating', function() {
  return {
    scope: {
      rating: "="
    },
    templateUrl: 'js/directives/star-rating/star-rating.html',
    link: function(scope, elem, attrs) {
    },
    controller: function() {
    }
  };
});

