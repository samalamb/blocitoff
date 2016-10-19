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
            });
        console.log("working?")
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