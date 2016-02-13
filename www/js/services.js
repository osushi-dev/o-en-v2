angular.module('starter.services', [])
.factory('Pokete', function() {

  var poketes = [{
    id: "0102345",
    price: "10,000",
    password: "pass",
    date: "2016/01/23",
    limit: "2016/03/31"
  }, {
    id: "0102449",
    price: "20,000",
    password: "pass",
    date: "2016/01/24",
    limit: "2016/02/14"
  }, {
    id: "0104410",
    price: "30,000",
    password: "pass",
    date: "2016/01/26",
    limit: "2016/05/01"
  }];

  return {
    all: function() {
      return poketes;
    },
    get: function(id) {
      return poketes.filter(function(pokete) { return pokete.id + '' === id; })[0];
    }
  };
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
