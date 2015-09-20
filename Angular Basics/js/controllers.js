angular.module('GDGLegon')
  .controller('AppController', function($scope, AppService) {

    //Initialise Application State
    $scope.colourGenerated = false;
    $scope.different = true;

    //Submit function
    $scope.submit = function(handle, colour) {
      //Hand off validation to AppService
      if (AppService.isValid(handle, colour)) {//If user entered a handle and colour, we're good to continue.
        //Get Random Colour from AppService
        $scope.generatedColor = AppService.getRandomColor();

        //Check if random colour is the same as user colour
        if ($scope.generatedColor.name === colour.toLowerCase()) {
          //if same
          $scope.different = false;
        } else {
          //if different
          $scope.different = true;
        }
        //colour genration is done
        $scope.colourGenerated = true;
      }
    }
  });
