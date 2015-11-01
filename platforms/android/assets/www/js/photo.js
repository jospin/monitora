var Photo = function() {
    var phot = {
        init: function() {
            $('.content').load('view/photo.htm > *', function(status) {
                phot.camera();
            });
        },
        camera: function(){
            $("#tirar_foto").click(function() {
                navigator.camera.getPicture(
                    function(imageData) {
                        var i = $('#print');
                        var html = '<img';
                        html += ' src="'
                        html += imageData
                        html +='" width="200"/>';

                        i.replaceWith(html);
                    },
                    function(message) {
                        console.log(message);
                    },
                    {
                        correctOrientation: true,
                        saveToPhotoAlbum: true
                    }
                );
            });
        }        
    }
    phot.init();
    return phot;
}