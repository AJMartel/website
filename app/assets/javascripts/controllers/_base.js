class BaseCtrl {
  constructor($rootScope) {

    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    $rootScope.baseUrl = function() {
      return location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    }

    $rootScope.getDropboxLink = function(redirect, type, state) {
      var clientId = "7wzjlm5ap227jw7";
      var host = $rootScope.baseUrl();
      var absoluteRedirect = host + "/" + redirect;
      var url = "https://www.dropbox.com/1/oauth2/authorize?client_id=" + clientId + "&response_type=" + type + "&redirect_uri=" + absoluteRedirect;
      if(state) {
        url += "&state=" + state;
      }
      return url;
    }

    $rootScope.producers = shuffle([
      {name: "Jeff Camealy", link: "https://recordsetter.com/world-record/consecutive-bounces-table-tennis-ball-alternating-between-base-inside-coffee-mug/50623"},
      {name: "Carl Fletcher", link: "http://www.carlfletcher.org/"},
      {name: "Jay Zisch", link: "https://github.com/jz709u"},
      {name: "Lev Lazinskiy", link: "https://levlaz.org"},
      {name: "Noel Bautista", link: "http://codingdoodles.com/"},
      {name: "Amit Shinde", link: "https://github.com/amtsh"},
      {name: "Sergio Pantoja", link: "https://github.com/sergiopantoja"},
      {name: "John Huang", link: "https://twitter.com/ymhuang0808"},
      {name: "Jamie Tanna", link: "https://twitter.com/jamietanna"},
      {name: "Phil Weber", link: "https://twitter.com/philweber"},
      {name: "Jorge Bay", link: "https://twitter.com/jorgebg"},
      {name: "Jason Kim", link: "https://twitter.com/jasoki"},
      {name: "Tom Goldsmith", link: "https://tgoldsmith.co.uk"},
      {name: "Patrick Cunningham", link: "https://twitter.com/ptrckcnnnghm"},
      {name: "Bart Joosten", link: "http://loenz.nl"},
      {name: "Micah Johnson", link: "#"},
      {name: "Mat Schulte", link: "https://twitter.com/text_is_life"},
      {name: "Noel Quiles", link: "https://noelquiles.com"},
      {name: "Frederick Doe", link: "#"},
      {name: "Donnie West", link: "https://donniewest.com"},
      {name: "Dan Janosik", link: "https://danjanosik.com"},
      {name: "Stefan Thon", link: "https://twitter.com/smuemd"},
      {name: "Andrew Romanov", link: "http://andrew-r.ru/"},
      {name: "Williams Melgar", link: "https://wmelgar.com"},
      {name: "Justin Shelton", link: "http://mightynorthmedia.com/"},
      {name: "Tim Deasy", link: "http://tdeasy.com/"},
      {name: "Justin Levens", link: "https://justinlevens.us"}
    ]);

    function shuffle(array) {
      var rand, index = -1,
        length = array.length,
        result = Array(length);
      while (++index < length) {
        rand = Math.floor(Math.random() * (index + 1));
        result[index] = result[rand];
        result[rand] = array[index];
      }
      return result;
    }
  }
}

angular.module('app.main').controller('BaseCtrl', BaseCtrl);
