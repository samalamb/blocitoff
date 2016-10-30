(function() {
    function ActiveCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        $scope.tasks = $firebaseArray(ref); 
        $scope.hideTask = function(task) {
            var now = Date.now();
            var createdAt = task.createdAt;
            
            if ((now - createdAt) >= 604800000) {
                return true;
            } else {
                return false;
            }
        };
    }

    angular
        .module('blocitoff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl]);
})();