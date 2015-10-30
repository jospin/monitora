var Not = function() {
    var notifica = {
        init: function() {
            notifica.monitora(),
        },
        monitora: function() {
            var url = 'http://labs.mt4.com.br/~ljospin/back-monitora/modulos/mon/iso/notific.php';
            //setTimeout(
                $.ajax({
                    url: url,
                    dataType: 'json',
                    accept: 'application/json',
                    method: 'POST',
                    crossDomain: true,
                    success: function(data) {
                        var i = 0;
                        $.each(data, function(key, value){
                            if(value.notific == true && i == 0) {
                                i++;
                                notifica.vibration();
                                navigator.notification.beep(2);
                            }
                            if (value.message) {
                                navigator.notification.alert(
                                    "Notificação de monitoramento",
                                    function(){},
                                    value.message,
                                    "Ok"
                                );
                            }                        
                        });
                        
                    },
                    error: function(erro, status, errorThrow) {
                        alert('Erro na requisição de notificação');
                    }

                }),
            //3000);
        },
        vibration: function() {
            navigator.vibrate(
                [350,400,350,400]
            );
        }
    }
    notifica.init();
    return notifica;
}