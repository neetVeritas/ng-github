(function() {

  angular.module('ng-github', [])
    .directive('gitUser', function($http) {
      return function(scope, element, attr) {
        $http.get('https://api.github.com/users/' + attr['ghUser'])
          .success(function(data) {
            scope.gUser = data;
          })
          .error(function(data, status) {
            console.error('Github User Request Error', status, data);
          })
      };
    })
    .directive('gitRepo', function($http) {
      return function(scope, element, attr) {
        $http.get('https://api.github.com/repos/' + attr['ghUser'] + '/' + attr['ghRepo'])
          .success(function(data) {
            scope.gRepo = data;
          })
          .error(function(data, status) {
            console.error('Github Repo Request Error', status, data);
          })
      };
    });

  angular.module('fooApp', ['ng-github'])
    .controller('mainCtrl', function($scope) {
      $scope.protractor = "Jelly";
    });

})();
