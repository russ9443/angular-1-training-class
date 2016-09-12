angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'Heroes';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
    {
      id: 1,
      name: 'Darth Vader',
      imageUrl: 'images/vader.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: false
    },
    {
      id: 2,
      name: 'R2D2',
      imageUrl: 'images/R2D2.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    }
  ]
}