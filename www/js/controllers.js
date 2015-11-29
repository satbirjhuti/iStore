angular.module('starter.controllers', [])

.controller('FeaturedCtrl', function($scope) {})

.controller('ChartsCtrl', function($scope, Charts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Charts.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ExploreCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('SearchCtrl', function($scope) {

})

.controller('UpdatesCtrl', function($scope) {

});
