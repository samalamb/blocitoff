(function() {
    function CompletedCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        $scope.tasks = $firebaseArray(ref);
        
        $scope.showTasks = function(task){
            if(task.completed){
                return true;
            }  
            else {
                return false;
            }
        };
    }

    angular
        .module('blocitoff')
        .controller('CompletedCtrl', ['$scope', '$firebaseArray', CompletedCtrl]);
})();