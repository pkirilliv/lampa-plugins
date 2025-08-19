(function() {
    'use strict';

    var Defined = {
        api: 'lampac',
        localhost: 'https://rc.bwa.to/',
        apn: 'https://apn.watch/'
    };

    var unic_id = Lampa.Storage.get('lampac_unic_id', '');
    if (!unic_id) {
        unic_id = Lampa.Utils.uid(8).toLowerCase();
        Lampa.Storage.set('lampac_unic_id', unic_id);
    }

    if (!window.rch) {
        Lampa.Utils.putScript(
            ["https://rc.bwa.to/invc-rch.js"], 
            function() {}, 
            false, 
            function() {
                if (!window.rch.startTypeInvoke)
                    window.rch.typeInvoke('https://rc.bwa.to', function() {});
            }, 
            true
        );
    }

    // -----------------------------
    // Додаємо джерело: UAkino.best через RC
    // -----------------------------
    Lampa.Source.add({
        title: 'UAkino.best',
        search: function(query, onFind, onError) {
            if (!window.rch) return onError('RC server не підключено');
            window.rch.typeInvoke('https://rc.bwa.to', function() {
                window.rch.invoke({site: 'uakino', action: 'search', query: query}, onFind, onError);
            });
        },
        catalog: function(params, onFind, onError) {
            if (!window.rch) return onError('RC server не підключено');
            window.rch.typeInvoke('https://rc.bwa.to', function() {
                window.rch.invoke({site: 'uakino', action: 'catalog', params: params}, onFind, onError);
            });
        },
        play: function(item, onPlay, onError) {
            if (!window.rch) return onError('RC server не підключено');
            window.rch.typeInvoke('https://rc.bwa.to', function() {
                window.rch.invoke({site: 'uakino', action: 'play', url: item.url}, onPlay, onError);
            });
        }
    });

})();
