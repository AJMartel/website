angular.module('app.main')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('base', {
        abstract: true,
        views: {
          header: {
            templateUrl: 'templates/shared/header.html',
          }
        }
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

      .state('help', {
        url: '/help',
        parent: 'base',
        views: {
          'content@' : {
            templateUrl: 'templates/help.html',
            // controller: 'HelpCtrl'
          }
        }
      })

      .state('extensions', {
        url: '/extensions',
        parent: 'base',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/extensions.html',
            controller: 'ExtensionsCtrl'
          }
        }
      })

      .state('extensions.themes', {
        url: '/themes',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/themes.html',
          }
        }
      })

      .state('extensions.history', {
        url: '/revision-history',
        views: {
          'content@' : {
            templateUrl: 'templates/extensions/revisions.html',
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
              // $scope.iframeURL = window._ext_server + "/editors/advanced_markdown_demo";
              $scope.iframeURL = window._staging_app_server + "/?server=https://stagingapi.standardnotes.org&email=md@standardnotes.org&pw=password";
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
              $scope.iframeURL = window._staging_app_server + "/?server=https://stagingapi.standardnotes.org&email=code@standardnotes.org&pw=password";
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
        parent: 'base',
        url: '/tools',
        views: {
          'content@' : {
            templateUrl: 'templates/tools.html',
            controller: 'ToolsCtrl'
          }
        }
      })

      .state('developers', {
        parent: 'base',
        url: '/developers',
        views: {
          'content@' : {
            templateUrl: 'templates/developers.html'
          }
        }
      })

      .state('extended', {
        parent: 'base',
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
      .state('slack', {
        parent: 'base',
        url: '/slack',
        views: {
          'content@' : {
            controller: function($scope){
              window.location.href = window._slack_url;
            }
          }
        }
      })

      // 404 Error
      .state('404', {
        parent: 'base',
        views: {
          'content@' : {
            templateUrl: 'templates/landing.html',
            controller: 'LandingCtrl'
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
