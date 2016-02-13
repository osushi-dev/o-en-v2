angular.module('starter.controllers', [])

.controller('PoketesCtrl', function($scope, poketes) {
  $scope.poketes = poketes;
  console.log("poketes", poketes);
})
.controller('AddPoketeCtrl', function($scope, $filter, $ionicPopup, $state) {
  $scope.date = $filter("date")(Date.now(), 'yyyy/MM/dd');
  dt = $scope.date;
  $scope.delidate = $filter("date")(dt, 'yyyy/MM/dd');

  $scope.datepickerObject = {
    titleLabel: 'Title',  //Optional
    todayLabel: 'Today',  //Optional
    closeLabel: 'Close',  //Optional
    setLabel: 'Set',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    inputDate: new Date(),  //Optional
    mondayFirst: true,  //Optional
    disabledDates: [], //Optional
    weekDaysList: ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"], //Optional
    monthList: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'true', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    from: new Date(2012, 8, 2), //Optional
    to: new Date(2018, 8, 25),  //Optional
    callback: datePickerCallback = function (val) {
      if (typeof(val) === 'undefined') {
        console.log('No date selected');
      } else {
        console.log('Selected date is : ', val);
        $scope.datepickerObject.inputDate = val;
      }
    },
//    dateFormat: 'dd-MM-yyyy', //Optional
    dateFormat: 'yyyy/MM/dd', //Optional
    closeOnSelect: false, //Optional
  };
  $scope.show = false;
  $scope.onTap = function() {
    $scope.show = true;
    var confirmPopup = $ionicPopup.confirm({
      title: '手形の作成が完了しました',
      template: 'あなたの口座から' + $scope.$$childTail.price + '円が引き落とされました。<br><br>発行した手形のQRコードとパスワードをお取引先にご連絡ください。',
      okText: '確認',
      cancelText: 'キャンセル'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $state.go('tab.poketes');
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  }
})
/*
.controller('StockDetailCtrl', function($scope, trend) {
  $scope.trend = trend;
  console.log("trends", trend);

})
*/
/*
.controller('NewsCtrl', function($scope) {

})
*/
.controller('AccountCtrl', function($scope) {

})
.controller('QrreadCtrl', function($scope) {

})
.controller('QrreadSampleCtrl', function($scope, poketes, $ionicPopup, $state) {
  $scope.poketes = poketes;
  $scope.show = false;
  $scope.onTap = function() {
        $scope.show = true;
        var confirmPopup = $ionicPopup.confirm({
          title: '手形の受取が完了しました',
          template: 'あなたの口座に' + $scope.poketes[2].price + "円が振り込まれました。",
          okText: '確認',
          cancelText: 'キャンセル'
        });

        confirmPopup.then(function(res) {
          if(res) {
            $state.go('tab.poketes');
            console.log('You are sure');
          } else {
            console.log('You are not sure');
          }
        });
  };

})
.controller('ManageAccountCtrl', function($scope) {

})
.controller('ManagePasswordCtrl', function($scope) {

})
.controller('ManageSignCtrl', function($scope) {

})
.controller('UketesCtrl', function($scope) {

})

/*
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
*/
;
