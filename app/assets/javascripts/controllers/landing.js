class LandingCtrl {
  constructor($rootScope, $scope, $timeout) {

    $scope.displayData = {};

    $scope.demoUrl = window._staging_app_server + "/?server=https://stagingapi.standardnotes.org&email=general@standardnotes.org&pw=password";

    document.onkeydown = function(e) {
      $timeout(function(){
        if (e.keyCode == '37') {
          $scope.previousScreenshot();
        } else if(e.keyCode == '39') {
          $scope.nextScreenshot();
        } else if(e.keyCode == '27') {
          $scope.displayData.screenshot = null;
        }
      })
    }

    $scope.downloads = [
      {
        name: "Web",
        icon: "ico-chrome.png",
        link: "https://app.standardnotes.org",
        screenshots: [
          "https://s3.amazonaws.com/standard-notes/screenshots/web/jpg/1.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/web/jpg/2.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/web/jpg/3.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/web/jpg/4.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/web/jpg/5.jpg"
        ]
      },
      {
        name: "iOS",
        icon: "ico-apple.png",
        link: "https://itunes.apple.com/us/app/id1191215138?mt=8",
        screenshots: [
          "https://s3.amazonaws.com/standard-notes/screenshots/ios/1.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/ios/2.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/ios/3.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/ios/4.jpg",
        ]
      },
      {
        name: "Mac",
        icon: "ico-apple.png",
        link: "https://github.com/standardnotes/desktop/releases/download/v0.3.3/standard-notes-0.3.3-mac.zip",
        screenshots: [
          "https://s3.amazonaws.com/standard-notes/screenshots/mac/jpg/1.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/mac/jpg/2.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/mac/jpg/3.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/mac/jpg/4.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/mac/jpg/5.jpg"
        ]
      },
      {
        name: "Windows",
        icon: "ico-windows.png",
        link: "https://github.com/standardnotes/desktop/releases/download/v0.3.3/standard-notes-Setup-0.3.3.exe",
        screenshots: [
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/1.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/2.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/3.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/4.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/5.jpg"
        ]
      },
      {
        name: "Linux",
        icon: "ico-linux.png",
        link: "https://github.com/standardnotes/desktop/releases/download/v0.3.3/standard-notes-0.3.3-x86_64.AppImage",
        screenshots: [
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/1.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/2.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/3.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/4.jpg",
          "https://s3.amazonaws.com/standard-notes/screenshots/desktop/jpg/5.jpg"
        ]
      },
      {
        name: "Android",
        icon: "ico-android.png",
        link: "https://play.google.com/store/apps/details?id=org.standardnotes.notes"
      },
    ];

    $scope.clickedScreenshots = function(item) {
      $scope.screenshots = item.screenshots;
      $scope.screenshotIndex = 0;
      $scope.updateScreenshot();

      // preload images
      var index = 0;
      function loadNext() {
        if(index >= $scope.screenshots.length) {
          return;
        }

        var preloaded = new Image();
        preloaded.src = $scope.screenshots[index];
        index++;

        preloaded.onload = function() {
          loadNext();
        };
      }
      loadNext();
    }

    $scope.updateScreenshot = function() {
      $scope.displayData.screenshot = $scope.screenshots[$scope.screenshotIndex];
    }

    $scope.hasNextScreenshot = function() {
      return $scope.screenshotIndex < $scope.screenshots.length - 1;
    }

    $scope.hasPreviousScreenshot = function() {
      return $scope.screenshotIndex > 0;
    }

    $scope.nextScreenshot = function($event) {
      if(!$scope.hasNextScreenshot()) {
        return;
      }

      if($event) {
        $event.stopPropagation();
      }
      $scope.screenshotIndex++;
      $scope.updateScreenshot();
    }

    $scope.previousScreenshot = function($event) {
      if(!$scope.hasPreviousScreenshot()) {
        return;
      }

      if($event) {
        $event.stopPropagation();
      }
      $scope.screenshotIndex--;
      $scope.updateScreenshot();
    }

  }
}

angular.module('app.main').controller('LandingCtrl', LandingCtrl);
