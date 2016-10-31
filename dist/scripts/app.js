(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                 enabled: true,
                 requireBase: false
            });
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('active', {
                url: '/active',
                controller: 'ActiveCtrl as active',
                templateUrl: 'templates/active.html'
            })
            .state('create', {
                url: '/create',
                controller: 'CreateCtrl as create',
                templateUrl: 'templates/create.html'
            })
            .state('completed',{
                url: '/completed',
                controller: 'CompletedCtrl as completed',
                templateUrl: 'templates/completed.html'
            });
    }
    
    angular
        .module('blocitoff', ['firebase','ui.router'])
        .config(config);
})();

//TODO
//    
//{
//    name: nameOfTask,
////    priority: integer,
////    completed: false
//}