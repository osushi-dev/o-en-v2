angular.module('starter.directives.comments', [])

.directive('commentList', function() {
  return {
    scope: {
      comments: "="
    },
    templateUrl: 'js/directives/comments/comments.html',
    link: function(scope, elem, attrs) {
    },
    controller: function() {
    }
  };
});
