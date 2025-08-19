(function() {
  'use strict';

  const SERVER_URL = 'http://localhost:3000';

  Lampa.Source.add({
    title: 'UAkino.best Puppeteer',

    search: function(query, onFind, onError) {
      fetch(`${SERVER_URL}/anime?q=${encodeURIComponent(query)}`)
        .then(r => r.json())
        .then(onFind)
        .catch(onError);
    },

    catalog: function(params, onFind, onError) {
      fetch(`${SERVER_URL}/anime`)
        .then(r => r.json())
        .then(onFind)
        .catch(onError);
    },

    play: function(item, onPlay, onError) {
      fetch(`${SERVER_URL}/play?url=${encodeURIComponent(item.url)}`)
        .then(r => r.json())
        .then(onPlay)
        .catch(onError);
    }
  });

})();
