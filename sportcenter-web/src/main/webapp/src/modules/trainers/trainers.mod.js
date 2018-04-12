(function (ng) {
    
    var mod = ng.module("trainerModule", ['ui.router']);
    
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            
            var basePath = 'src/modules/trainers/';
            
            $urlRouterProvider.otherwise("/trainersList");
            
            $stateProvider.state('trainersList', {
                
                url: '/trainers/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'trainers.list.html',
                        controller: 'trainerCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);


