// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('CCSD_Board', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var scrollThis;

function trusteesPage() {
  console.log('start page');
  var targetedSection = sessionStorage.getItem('pageSection');

  if (targetedSection == 'upcoming') {
    scrollThis = document.getElementById('upcoming');
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'board-meetings') {
    scrollThis = document.getElementById('board-meetings') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'know') {
    scrollThis = document.getElementById('know') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'maps') {
    scrollThis = document.getElementById('maps') ;
    scrollThis.scrollIntoView();
  }else if (targetedSection == 'contact') {
    scrollThis = document.getElementById('contact') ;
    scrollThis.scrollIntoView();
  }

  console.log('end page');
}
