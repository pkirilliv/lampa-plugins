(function () {
    'use strict';

    var pluginName = 'UA Sources';

    Lampa.Plugin.create(pluginName, function (app) {
        console.log(pluginName + ' loaded!');

        /**
         * ====== UAkino ======
         */
        Lampa.Source.add('UAkino', {
            title: '🎬 UAkino',
            icon: 'fa fa-film',

            search: function (query, callback) {
                fetch('https://uakino.best/index.php?do=search&subaction=search&story=' + encodeURIComponent(query))
                    .then(r => r.text())
                    .then(html => callback(parseUAkino(html)))
                    .catch(() => callback([]));
            },

            catalog: function (type, query, callback) {
                fetch('https://uakino.best/')
                    .then(r => r.text())
                    .then(html => callback(parseUAkino(html)))
                    .catch(() => callback([]));
            },

            play: function (item, callback) {
                fetch(item.url)
                    .then(r => r.text())
                    .then(html => {
                        let iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"/);
                        if (iframeMatch) {
                            callback({ file: iframeMatch[1], quality: 'HD', subtitles: [] });
                        } else callback(false);
                    })
                    .catch(() => callback(false));
            }
        });

        function parseUAkino(html) {
            let results = [];
            let regex = /<div class="shortpost">[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*alt="([^"]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                results.push({
                    title: match[3],
                    original_title: match[3],
                    poster: match[2],
                    url: match[1]
                });
            }
            return results;
        }

        /**
         * ====== AnimeUA ======
         */
        Lampa.Source.add('AnimeUA', {
            title: '🍙 AnimeUA',
            icon: 'fa fa-tv',

            search: function (query, callback) {
                fetch('https://animeua.club/index.php?do=search&subaction=search&story=' + encodeURIComponent(query))
                    .then(r => r.text())
                    .then(html => callback(parseAnimeUA(html)))
                    .catch(() => callback([]));
            },

            catalog: function (type, query, callback) {
                fetch('https://animeua.club/')
                    .then(r => r.text())
                    .then(html => callback(parseAnimeUA(html)))
                    .catch(() => callback([]));
            },

            play: function (item, callback) {
                fetch(item.url)
                    .then(r => r.text())
                    .then(html => {
                        let iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"/);
                        if (iframeMatch) {
                            callback({ file: iframeMatch[1], quality: 'HD', subtitles: [] });
                        } else callback(false);
                    })
                    .catch(() => callback(false));
            }
        });

        function parseAnimeUA(html) {
            let results = [];
            let regex = /<div class="poster">[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*alt="([^"]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                results.push({
                    title: match[3],
                    original_title: match[3],
                    poster: match[2],
                    url: match[1]
                });
            }
            return results;
        }

        /**
         * ====== Anitube ======
         */
        Lampa.Source.add('Anitube', {
            title: '🎌 Anitube',
            icon: 'fa fa-play-circle',

            search: function (query, callback) {
                fetch('https://anitube.in.ua/index.php?do=search&subaction=search&story=' + encodeURIComponent(query))
                    .then(r => r.text())
                    .then(html => callback(parseAnitube(html)))
                    .catch(() => callback([]));
            },

            catalog: function (type, query, callback) {
                fetch('https://anitube.in.ua/')
                    .then(r => r.text())
                    .then(html => callback(parseAnitube(html)))
                    .catch(() => callback([]));
            },

            play: function (item, callback) {
                fetch(item.url)
                    .then(r => r.text())
                    .then(html => {
                        let iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"/);
                        if (iframeMatch) {
                            callback({ file: iframeMatch[1], quality: 'HD', subtitles: [] });
                        } else callback(false);
                    })
                    .catch(() => callback(false));
            }
        });

        function parseAnitube(html) {
            let results = [];
            let regex = /<div class="th-item">[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)" alt="([^"]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                results.push({
                    title: match[3],
                    original_title: match[3],
                    poster: match[2],
                    url: match[1]
                });
            }
            return results;
        }

        /**
         * ====== UAFix ======
         */
        Lampa.Source.add('UAFix', {
            title: '📺 UAFix',
            icon: 'fa fa-video',

            search: function (query, callback) {
                fetch('https://uafix.net/index.php?do=search&subaction=search&story=' + encodeURIComponent(query))
                    .then(r => r.text())
                    .then(html => callback(parseUAFix(html)))
                    .catch(() => callback([]));
            },

            catalog: function (type, query, callback) {
                fetch('https://uafix.net/')
                    .then(r => r.text())
                    .then(html => callback(parseUAFix(html)))
                    .catch(() => callback([]));
            },

            play: function (item, callback) {
                fetch(item.url)
                    .then(r => r.text())
                    .then(html => {
                        let iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"/);
                        if (iframeMatch) {
                            callback({ file: iframeMatch[1], quality: 'HD', subtitles: [] });
                        } else callback(false);
                    })
                    .catch(() => callback(false));
            }
        });

        function parseUAFix(html) {
            let results = [];
            let regex = /<div class="shortstory">[\s\S]*?<a href="([^"]+)"[^>]*>[\s\S]*?<img src="([^"]+)" alt="([^"]+)"/g;
            let match;
            while ((match = regex.exec(html)) !== null) {
                results.push({
                    title: match[3],
                    original_title: match[3],
                    poster: match[2],
                    url: match[1]
                });
            }
            return results;
        }

        Lampa.Noty.show(pluginName + ' готовий!');
    });

})();
