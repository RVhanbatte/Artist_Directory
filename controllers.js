var myControllers = angular.module('MyControllers', []);

myControllers.controller('SearchController',
    function MyController($scope, $http){
        $http.get('js/data.json').then(function(res){
            $scope.artists = res.data;
            $scope.artistOrder = 'name';
        });
});

myControllers.controller('DetailsController',
    function MyController($scope, $http, $routeParams){
        $http.get('js/data.json').then(function(res){
            $scope.artists = res.data;
            $scope.whichItem = $routeParams.itemId;

            if($routeParams.itemId > 0){
                $scope.previousItem = Number($routeParams.itemId) - 1;
            } else{
                $scope.previousItem = $scope.artists.length - 1;
            }

            if($routeParams.itemId >= $scope.artists.length-1){
                $scope.nextItem = 0;
            } else{
                $scope.nextItem = Number($routeParams.itemId) + 1;
            }
        });
});
