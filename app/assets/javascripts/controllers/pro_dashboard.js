class ProDashboardCtrl {
  constructor($rootScope, $scope, $timeout, Restangular, $stateParams, $state) {

    $scope.buildExtensions = function() {
      $scope.extensions = [
        {
          name: "Dropbox Sync Adapter",
          desc: "Sync your tags and notes to Dropbox for added redundancy.",
          url: $scope.user.extension_server_url + "/dropbox"
        },
        {
          name: "Google Drive Sync Adapter",
          desc: "Sync your tags and notes to Google Drive for added redundancy.",
          url: $scope.user.extension_server_url + "/gdrive"
        },
        {
          name: "Note History",
          desc: "Track changes to your notes and restore to previous versions.",
          url: $scope.user.extension_server_url + "/revisions"
        },
        {
          name: "Advanced Markdown Editor",
          desc: "An advanced Markdown editor with live preview, editor toolbar, and split pane support.",
          editor: true,
          url: $scope.user.extension_server_url + "/editors/advanced_markdown?name=Advanced Markdown"
        },
        {
          name: "Code Editor",
          desc: "A powerful code editor with support for over 120 programming languages.",
          editor: true,
          url: $scope.user.extension_server_url + "/editors/code?name=Code"
        },
        {
          name: "Minimal Markdown Editor",
          desc: "A minimal Markdown editor with inline style support.",
          editor: true,
          url: $scope.user.extension_server_url + "/editors/min_markdown?name=Minimal Markdown"
        },
        {
          name: "Midnight Theme",
          desc: "A night theme for Standard Notes Desktop and Web.",
          theme: true,
          url: $scope.user.extension_server_url + "/themes/midnight"
        }
      ]
    }

    if($stateParams.jwt) {
      Restangular.one("pro_users.json", $stateParams.id).get({jwt: $stateParams.jwt})
      .then(function(response){
        $scope.user = response.plain();
        $scope.user.jwt = $stateParams.jwt;
        $scope.buildExtensions();
      })
      .catch(function(errorResponse){
        console.log("Fetch user from JWT error:", errorResponse);
        alert("Your login session has expired.");
        $state.go("extended");
      })
    } else if($stateParams.user) {
      $scope.user = $stateParams.user;
      $scope.buildExtensions();
    }

    $scope.infoFormData = {};
    $scope.submitInfoForm = function() {
      $scope.infoFormData.success = false;
      $scope.infoFormData.error = false;

      var request = Restangular.one("pro_users", $scope.user.id);
      request.jwt = $scope.user.jwt;
      _.merge(request, $scope.user);
      request.patch().then(function(response){
        $scope.infoFormData.success = true;
      })
      .catch(function(errorResponse){
        console.log("Error updating info:", errorResponse);
        $scope.infoFormData.error = true;
      })
    }


  }
}

angular.module('app.main').controller('ProDashboardCtrl', ProDashboardCtrl);
