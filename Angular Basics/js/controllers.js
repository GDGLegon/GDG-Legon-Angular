angular.module('GDGLegon')
  .controller('AppController', function($scope, AppService) {
    $scope.pageData = {
      titleFromController: 'Title from Controller',
      titleFromService: ''
    };

    $scope.showData = function(){
      $scope.pageData.titleFromService = AppService.moreData();
    }
  });
