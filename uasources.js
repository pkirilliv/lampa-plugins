(function () {
    'use strict';

    var pluginName = 'UA Sources';

    Lampa.Plugin.create(pluginName, function (app) {
        console.log(pluginName + ' loaded!');

        // ===== UAkino =====
        Lampa.Source.add('UAkino', {
            title: '🎬 UAkino',
            icon: 'fa fa-film',
            search: function(q, cb){ cb([]); },
            catalog: function(t, q, cb){ cb([]); },
            play: function(i, cb){ cb(false); }
        });

        // ===== AnimeUA =====
        Lampa.Source.add('AnimeUA', {
            title: '🍙 AnimeUA',
            icon: 'fa fa-tv',
            search: function(q, cb){ cb([]); },
            catalog: function(t, q, cb){ cb([]); },
            play: function(i, cb){ cb(false); }
        });

        // ===== Anitube =====
        Lampa.Source.add('Anitube', {
            title: '🎌 Anitube',
            icon: 'fa fa-play-circle',
            search: function(q, cb){ cb([]); },
            catalog: function(t, q, cb){ cb([]); },
            play: function(i, cb){ cb(false); }
        });

        // ===== UAFix =====
        Lampa.Source.add('UAFix', {
            title: '📺 UAFix',
            icon: 'fa fa-video',
            search: function(q, cb){ cb([]); },
            catalog: function(t, q, cb){ cb([]); },
            play: function(i, cb){ cb(false); }
        });

        Lampa.Noty.show(pluginName + ' готовий!');
    });

})();
