(function() {
  'use strict';

  // -----------------------------
  // Джерело: UAkino.best
  // -----------------------------
  Lampa.Source.add({
    title: 'UAkino.best',

    // Пошук фільмів
    search: function(query, onFind, onError) {
      fetch('https://uakino.best/index.php?do=search&subaction=search&story=' + encodeURIComponent(query))
        .then(r => r.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const items = doc.querySelectorAll('.shortstory');
          const results = Array.from(items).map(el => {
            const link = el.querySelector('a');
            const img = el.querySelector('img');
            return {
              title: link ? link.textContent.trim() : 'Без назви',
              url: link ? link.href : '',
              poster: img ? img.src : '',
              quality: 'HD'
            };
          });
          onFind(results);
        })
        .catch(err => onError(err));
    },

    // Каталог фільмів
    catalog: function(params, onFind, onError) {
      fetch('https://uakino.best/filmy/')
        .then(r => r.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const items = doc.querySelectorAll('.shortstory');
          const results = Array.from(items).map(el => {
            const link = el.querySelector('a');
            const img = el.querySelector('img');
            return {
              title: link ? link.textContent.trim() : 'Без назви',
              url: link ? link.href : '',
              poster: img ? img.src : '',
              quality: 'HD'
            };
          });
          onFind(results);
        })
        .catch(err => onError(err));
    },

    // Відтворення фільму
    play: function(item, onPlay, onError) {
      fetch(item.url)
        .then(r => r.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const iframe = doc.querySelector('iframe');
          if (iframe && iframe.src) {
            onPlay([{ url: iframe.src, quality: 'HD' }]);
          } else {
            onError('Не вдалося знайти плеєр');
          }
        })
        .catch(err => onError(err));
    }
  });

})();
