(function () {
    'use strict';

    var pluginName = 'UA Sources';

    Lampa.Plugin.create(pluginName, function (app) {
        console.log(pluginName + ' loaded!');

        // ====== UAkino ======
        Lampa.Source.add('UAkino', {
            title: '🎬 UAkino',
            icon: 'fa fa-film',

            search: function (query, callback) {
                callback([]);
            },

            catalog: function (type, query, callback) {
                callback([]);
            },

            play: function (item, callback) {
                callback(false);
            }
        });

        // ====== AnimeUA ======
        Lampa.Source.add('AnimeUA', {
            title: '🍙 AnimeUA',
            icon: 'fa fa-tv',

            search: function (query, callback) {
                callback([]);
            },

            catalog: function (type, query, callback) {
                callback([]);
            },

            play: function (item, callback) {
                callback(false);
            }
        });

        Lampa.Noty.show(pluginName + ' готовий!');
    });
})();
