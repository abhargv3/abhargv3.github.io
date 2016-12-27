var app = angular.module('mySite',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/home",
		{
			templateUrl:"partials/home.html",
			controller:"homeCtrl"
		}
	     )
	.when("/projects",
		{
			templateUrl:"partials/projects.html",
			controller:"projectsCtrl"
		}
	     )
	.when("/about-me",
		{
			templateUrl:"partials/about.html",
			controller:"aboutCtrl"

		}
	     )
	.otherwise(
		{
			redirectTo:"/home"
		}
	);
});

app.controller('headerCtrl',function($scope,$location){
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
});

app.controller('homeCtrl',function($scope,$location){

});

app.controller('projectsCtrl',function($scope,$location){

});

app.controller('aboutCtrl',function($scope,$location){

});

