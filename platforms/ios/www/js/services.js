angular.module('starter.services', [])
.factory('Pokete', function() {

  var poketes = {};

  return {
    all: function() {
      return poketes;
    },
    get: function(id) {
      return poketes.filter(function(pokete) { return pokete.id + '' === id; })[0];
    }
  };
})
.factory('CommonFunc', function($state){
  return {
    /*
    navigate
    ページ遷移
    $state.goをラップした関数。state名を指定してページ遷移する。
    AngularUI routerのAPI Doc参照
    http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state
    */
    navigate : function(to,params,options){
      $state.go(to,params,options);
    }
  };
})
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  };
}])

.factory('SendAjax', function($http){
  return {
    sendphoto : function(pic){
      var postData = {
        img: pic
      };
      var headers = {
        "X-Kii-AppID": "5cfaa2f2",
        "X-Kii-AppKey": "525fdcffaa9a943034e694e82fd697bd",
        "Authorization": "Bearer 3FFWJ-8lsSzEHdsHx-DD8zQvjMZTtuOkyXmF70kGGlY",
        "Content-Type": "application/json"
      }

      var http = $http({
      	method : 'PUT',
      	url : 'https://api-jp.kii.com/api/apps/5cfaa2f2/buckets/selfpic/objects/picture',
        headers: headers,
      	data: postData
      })

      //POST送信
      return http;
    }
  }
})



/*
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
*/
;
