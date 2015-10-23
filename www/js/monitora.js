var Mon = function() {
    var monitora = {
        init: function() {
            url = 'http://monitora.local/modulos/mon/iso/list.php',
            $('.content').load('view/monitora.htm');
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
                        htmlString += cssClass + '>';
                        htmlString += '<div class="panel-body">';
                        htmlString += '<p>Sistema: ' + item['sistem'] + '</p>';
                        htmlString += '<small>' + item['menssage'] + '</small>';
                        htmlString += '</div>';
                        htmlString += '</div>' + "\n";
                    });

                    $('.content-panel').html(htmlString);
                },
                error: function(erro, status, errorThrow) {
                    alert('Erro na requisição');
                }

            });
        },
    }
    monitora.init();
    return monitora;
}