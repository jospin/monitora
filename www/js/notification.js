var Not = function() {
    var notifica = {
        init: function() {
            setTimeout(
                notifica.monitora(),
                2000
            );
        },
        monitora: function() {
            var url = 'http://labs.mt4.com.br/~ljospin/back-monitora/modulos/mon/iso/notific.php';
            $.ajax({
                url: url,
                dataType: 'json',
                accept: 'application/json',
                method: 'POST',
                crossDomain: true,
                success: function(data) {
                    console.log(data);
                },
                error: function(erro, status, errorThrow) {
                    alert('Erro na requisição de notificação');
                }

            });
        }
    }
    notifica.init();
    return notifica;
}