var myApp = angular.module('myApp', [
    'ngRoute',
    'MyControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/search.html',
        controller: 'SearchController'
    })
    .when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    });
}]);