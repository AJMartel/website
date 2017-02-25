angular.module('app.main')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('base', {
        abstract: true,
      })

      .state('landing', {
        url: '/',
        parent: 'base',
        views: {
          'content@' : {
            templateUrl: 'templates/landing.html',
            controller: 'LandingCtrl'
          }
        }
      })

      .state('extensions', {
        url: '/extensions',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/extensions.html',
            controller: 'ExtensionsCtrl'
          }
        }
      })

      // DEPRACATED
      // .state('extensions.dropbox', {
      //   url: '/dropbox?secret_url',
      //   views: {
      //     'content@' : {
      //       templateUrl: 'templates/extensions/dropbox.html',
      //       controller: 'DropboxCtrl'
      //     }
      //   }
      // })

      .state('extensions.history', {
        url: '/revision-history',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/revisions.html',
            // controller: 'RevisionsExtCtrl'
          }
        }
      })

      .state('extensions.file_attacher', {
        url: '/file_attacher?secret_url&uuid',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/file_attacher.html',
            controller: 'FileAttacherCtrl'
          }
        }
      })

      .state('extensions.simple_markdown', {
        url: '/simple-markdown',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/simple_markdown.html',
            controller: function($scope){
              $scope.extServer = window._ext_server;
              $scope.iframeURL = window._ext_server + "/editors/simple_markdown_demo";
            }
          },
        }
      })

      .state('extensions.advanced_markdown', {
        url: '/advanced-markdown',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/advanced_markdown.html',
            controller: function($scope){
              $scope.iframeURL = window._ext_server + "/editors/advanced_markdown_demo";
            }
          }
        }
      })

      .state('extensions.code_editor', {
        url: '/code-editor',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/code_editor.html',
            controller: function($scope){
              $scope.iframeURL = window._ext_server + "/editors/code_demo";
            }
          }
        }
      })

      .state('extensions.collab', {
        url: '/collaborative-editor',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/collab_editor.html'
          }
        }
      })

      .state('tools', {
        url: '/tools',
        views: {
          'content@' : {
            templateUrl: 'templates/tools.html',
            controller: 'ToolsCtrl'
          }
        }
      })

      .state('developers', {
        url: '/developers',
        views: {
          'content@' : {
            templateUrl: 'templates/developers.html'
          }
        }
      })

      .state('producers', {
        url: '/producers',
        views: {
          'content@' : {
            templateUrl: 'templates/producers.html',
            // controller: 'ProCtrl'
          }
        }
      })

      .state('extended', {
        url: '/extended',
        views: {
          'content@' : {
            templateUrl: 'templates/extended.html',
            controller: 'ProCtrl'
          }
        }
      })

      .state('pro_dashboard', {
        url: '/subscriber-dashboard?jwt',
        params: {user: null},
        views: {
          'content@' : {
            templateUrl: 'templates/pro_dashboard.html',
            controller: 'ProDashboardCtrl'
          }
        }
      })

      // 404 Error
      .state('404', {
        parent: 'base',
        views: {
          'content@' : {
            templateUrl: 'errors/404.html'
          }
        }
      });

      // Default fall back route
      $urlRouterProvider.otherwise(function($injector, $location){
         var state = $injector.get('$state');
         state.go('404');
         return $location.path();
      });

      // enable HTML5 Mode for SEO
      $locationProvider.html5Mode(true);

  });
