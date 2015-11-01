var app = {

    init: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.loadTitle();
        app.statusBar
        app.loadNotification();
        app.monitora();
        app.backButton();        
        $('#geolocation').click(function(){
            $('.nav-pills li').removeClass("active");
            $('#li-geolocation').addClass('active');
            app.geolocation();
        });
        $('#photo').click(function(){
            $('.nav-pills li').removeClass("active");
            $('#li-photo').addClass('active');
            app.photo();
        });
        $('#index').click(function(){
            $('.nav-pills li').removeClass("active");
            $('#li-index').addClass('active');
            app.monitora();
        })
        
        // app.receiv'edEvent('deviceready');
    },

    monitora: function() {
        $.getScript( "js/monitora.js", function(data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var monitora = new Mon();
                return monitora;
            } else {
                throw new Error("monitora.js não foi carregado");
            }
        });
    },

    statusBar: function() {    
        StatusBar.backgroundColorByHexString('#2B2C31');
        setTimeout(
            function(){StatusBar.hide();}
        ,10000);
    },

    geolocation: function() {
        $.getScript( "js/geolocation.js", function( data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var geo = new Geo();
                return geo;
            } else {
                console.error('Nao carregou');
                throw new Error("geolocation.js não foi carregado");
            }
        });
    },

    photo: function() {
        $.getScript( "js/photo.js", function( data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                var phot = new Photo();
                return phot;
            } else {
                console.error('Nao carregou');
                throw new Error("photo.js não foi carregado");
            }
        });        
    },
    
    backButton: function(){
        document.addEventListener('backbutton', function() {
            // var activePage = $.mobile.activePage.attr('id');
            // if (activePage !== 'page_inicial') {
            //     navigator.app.backHistory();
            // } else {
                navigator.notification.confirm(
                    "Realmente deseja sair?",
                    function(buttonIndex) {
                        if (buttonIndex === 1) {
                            navigator.app.exitApp();
                        }
                    },
                    "Sair",
                    ["Sim","Nao"]
                );              
            // }
        }, false);
    },

    loadTitle: function() {
        $('.container-fluid .header2 .title').append('Monitoramento');
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
