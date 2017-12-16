/**
 * Created by NEVHAV on 11/11/17.
 */
angular.module('JPweb-fe', [
    'oc.lazyLoad',
    'ui.router',
    'templates'
])
    .constant('API_URL_VOCALB', 'http://localhost:3000/JPweb-be/')
    .constant('API_URL_GRAMMAR', 'http://localhost:3000/JPweb-be/')
    .constant('API_URL', '')

    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'main.html',
                controller: 'mainController',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                files: ['/assets/mainController.js']
                            }
                        )
                    }
                }
            })
    }]);