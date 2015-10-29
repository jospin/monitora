var Mon = function() {
    var monitora = {
        init: function() {
            var url = 'http://labs.mt4.com.br/~ljospin/back-monitora/modulos/mon/iso/list.php';
            $('.content').load('view/monitora.htm > *', function(status) {
                $.ajax({
                    url: url,
                    dataType: 'json',
                    accept: 'application/json',
                    method: 'POST',
                    crossDomain: true,
                    complete: function(data, status) {
                        var cssClass = 'panel-success';
                        var htmlString = '';
                        jQuery.each(data.responseJSON, function(index, item) {
                            htmlString += '<div class="panel ';
                            if (item['alert'] == 'R') {
                                cssClass = 'panel-danger';
                            }
                            if (item['alert'] == 'Y') {
                                cssClass = 'panel-warning';
                            }
                            htmlString += cssClass + '">' + "\r\n";
                            htmlString += '<div class="panel-heading">Sistema: '  + item['sistem'] +'</div>' + "\r\n";
                            htmlString += '<div class="panel-body">' + "\r\n";
                            htmlString += item['menssage'];
                            htmlString += '</div>'+ "\r\n";
                            htmlString += '</div>' + "\r\n";
                        });
                        $('.content-panel').replaceWith(htmlString)
                    },
                    error: function(erro, status, errorThrow) {
                        alert('Erro na requisição de listagem');
                    }

                });

            });
        }
    }
    monitora.init();
    return monitora;
}