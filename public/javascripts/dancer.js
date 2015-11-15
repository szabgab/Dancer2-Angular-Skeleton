angular.module('DancerApp', []);
angular.module('DancerApp').controller('DancerController', function($scope, $http) {

    $scope.title = 'Hello Dancer!';

    $http.get('/api/0/info').then(
      function(response) {
          console.log(response);
          $scope.config = response.data.config;
          $scope.perl = response.data.perl;
          $scope.dancer = response.data.dancer;
          $scope.date   = response.data.date;
      }, function(response) {
          console.log('error');
      }
    );
});
