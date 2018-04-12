(function (ng) {
    var mod = ng.module("sportCenterModule");
    mod.constant("sportCenterContext", "api/sportcenters");
    mod.controller('sportCenterCtrl', ['$scope', '$http', 'sportCenterContext',
        function ($scope, $http, sportCenterContext) {
            $http.get('data/sportcenters.json').then(function (response) {
                $scope.sportCentersRecords = response.data;
            });
        }
    ]);
}
)(window.angular);


