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
                templateUrl: '/templates/home.html'
            });
    }
    
    angular
        .module('blocitoff', ['firebase', 'ui.router'])
        .config(config);
})();


//TODO
//    
//{
//    name: nameOfTask,
////    priority: integer,
////    completed: false
//}