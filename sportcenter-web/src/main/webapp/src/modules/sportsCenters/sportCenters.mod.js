(function (ng) {
    // Definición del módulo
    var mod = ng.module("sportCenterModule", ['ui.router']);
    // Configuración de los estados del módulo
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            // En basePath se encuentran los templates y controladores de módulo
            var basePath = 'src/modules/sportsCenters/';
            // Mostrar la lista de libros será el estado por defecto del módulo
            $urlRouterProvider.otherwise("/sportCentersList");
            // Definición del estado 'booksList' donde se listan los libros
            $stateProvider.state('sportCentersList', {
                // Url que aparecerá en el browser
                url: '/sportCenters/list',
                 views: {
                    'mainView': {
                        templateUrl: basePath + 'sportCenters.list.html',
                        controller: 'sportCenterCtrl',
                        controllerAs: 'ctrl'
                    }
                }
            });
        }
    ]);
})(window.angular);
