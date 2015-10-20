var Mon = function() {
    url = 'http://monitora.local/modulos/mon/iso/list.php',
    var monitora = {
        init: function() {
            $.ajax({
                url: url,
                dataType: 'json',
                accept: 'application/json',
                method: 'POST',
                crossDomain: true,
                complete: function(data, status) {
                    console.log(data);

                },
                error: function(erro, status, errorThrow) {

                }

            });

        },
    }
    monitora.init();
    return monitora;
}