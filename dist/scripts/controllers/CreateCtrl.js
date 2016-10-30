(function() {
    function CreateCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        $scope.tasks = $firebaseArray(ref);
        $scope.addTask = function() {
            $scope.tasks.$add({
                task: $scope.newTaskText,
                createdAt: Date.now(),
                completed: false
            });
        };
        $scope.completeTask = function(){
            
        };
    }

    angular
        .module('blocitoff')
        .controller('CreateCtrl', ['$scope', '$firebaseArray', CreateCtrl]);
})();