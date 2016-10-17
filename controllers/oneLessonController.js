myApp.controller('oneLessonController', ['$scope', '$routeParams','lergoData',   function($scope, $routeParams, lergoData  ) {


    $scope.lessons = fac.lessons;
    $scope.goto = $routeParams.id;
    


}]);
