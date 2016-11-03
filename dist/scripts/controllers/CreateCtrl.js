(function() {
    function CreateCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        $scope.tasks = $firebaseArray(ref);
        $scope.addTask = function() {
            $scope.tasks.$add({
                task: $scope.newTaskText,
                createdAt: Date.now(),
                priority: $scope.newTaskPriority,
                completed: false
            });
        };
    }

    angular
        .module('blocitoff')
        .controller('CreateCtrl', ['$scope', '$firebaseArray', CreateCtrl]);
})();