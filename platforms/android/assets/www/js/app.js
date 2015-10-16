var app = {
    
    init: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.loadTitle();
        app.geolocation();
        // app.receiv'edEvent('deviceready');
    },

    geolocation: function() {
        $.getScript( "js/geolocation.js", function( data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var geolocation = new Geo();
                return geolocation;
            } else {
                console.error('Nao carregou');
                throw new Error("geolocation.js não foi carregado");
            }
        });
    },

    loadTitle: function() {
        $('.app-header h1').append('Monitoramento');
    },
};

if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
    app.init();
} else {
    app.onDeviceReady();
}
