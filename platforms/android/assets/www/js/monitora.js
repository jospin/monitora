var Mon = function() {
    var monitora = {
        init: function() {
            url = 'http://monitora.local/modulos/mon/iso/list.php',
            $('.container-fluid .content').load('view/monitora.htm > *', function(){
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
                            htmlString += '<div class="panel-heading">Sistema: '  + item['menssage'] +'</div>' + "\r\n";
                            htmlString += '<div class="panel-body">' + "\r\n";
                            htmlString += item['menssage'];
                            htmlString += '</div>'+ "\r\n";
                            htmlString += '</div>' + "\r\n";
                        });
                        $('.content-panel').replaceWith(htmlString)
                    },
                    error: function(erro, status, errorThrow) {
                        alert('Erro na requisição');
                    }

                });

            });
        },
    }
    monitora.init();
    return monitora;
}