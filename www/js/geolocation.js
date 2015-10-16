var Geo = function() {
    var geo = {
        init: function() {
            navigator.geolocation.getCurrentPosition(
                function(position){ // success
                    var html = '<h1>Localização original</h1>';
                        html += '<p><strong>Latitude: </strong> ' + position.coords.latitude + ' </p>';
                        html += '<p><strong>Longitude: </strong> ' + position.coords.longitude + ' </p>';
                    $('.ui-content div').append(html);
                },
                function(error){ //error
                    console.error('Erro de geolocalização' + error.message);
                },
                {enableHighAccurancy:true}
            );
        },
    }
    geo.init();
    return geo;    
}