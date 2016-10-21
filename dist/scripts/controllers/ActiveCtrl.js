(function() {
    function ActiveCtrl($scope, $firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        $scope.tasks = $firebaseArray(ref);
    }

    angular
        .module('blocitoff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', ActiveCtrl]);
})();