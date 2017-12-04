'use strict';

angular.module('app.main', [
  'ui.router',
  'restangular',
  'angulartics',
  'angulartics.piwik'
])

.config(function (RestangularProvider) {
  RestangularProvider.setDefaultHeaders({"Content-Type": "application/json"});
  RestangularProvider.setBaseUrl("/api");
})
