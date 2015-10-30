var app = {

    init: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.loadTitle();
        app.loadNotification();
        // app.monitora();
        // app.geolocation();
        // app.receiv'edEvent('deviceready');
    },

    monitora: function() {
        $.getScript( "js/monitora.js", function(data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var monitora = new Mon();
                return monitora;
            } else {
                throw new Error("geolocation.js não foi carregado");
            }
        });
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
        $('.container-fluid .header .title').append('Monitoramento');
    },

    loadNotification: function() {
        $.getScript( "js/notification.js", function(data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var notifica = new Not();
                return notifica;
            } else {
                console.error('Nao carregou notificação');
                throw new Error("notification.js não foi carregado");
            }
        });

    }
};

if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
    app.init();
} else {
    app.onDeviceReady();
}
