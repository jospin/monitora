var Geo = function() {
    var geo = {
        init: function() {
            $('.content').load('view/geolocation.htm > *', function(status) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        geo.success(position);
                    },
                    function(error){
                        geo.erro(error);
                    },
                    {enableHighAccurancy:true}
                )
            });
        },

        success: function(position) {
            var latlng = {lat:position.coords.latitude, lng:position.coords.longitude};

            var mapOptions = {
                center: latlng,
                scrollWheel: false,
                zoomControl: true,
                scaleControl: true,
                zoom: 12
            };

            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

            var marker = new google.maps.Marker({
                position: latlng,
                title:"Solucionador 1!"
            });
            marker.setMap(map);
        },
        
        /**
        success: function(position) {                 
            var latlon = position.coords.latitude + "," + position.coords.longitude;
            var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=
    "+latlon+"&zoom=14&size=400x300&sensor=false";
        $("#map-canvas").innerHTML = "<img src='"+img_url+"'>";
        },*/

        erro: function (msg) {
            if (msg.code == 1) {
                alert('Sem permissão');
                //PERMISSION_DENIED
            } else if (msg.code == 2) {
                alert('Posição não identificada');
                //POSITION_UNAVAILABLE
            } else {
                alert('timeout');
                //TIMEOUT
            }
        }
    }
    geo.init();
    return geo;
}