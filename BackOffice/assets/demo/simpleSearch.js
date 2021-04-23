function fetchDataPorFreguesia(freguesia) {
    var data = {}
    return fetch('https://ptsibackend.herokuapp.com/sitioPorFreguesia/' + freguesia, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        data = response;
        return data;
    }).catch((error) => { return data })
}

function fetchDataPorNome(nome) {
    var data = {}
    return fetch('https://ptsibackend.herokuapp.com/sitioPoNome/' + nome, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        data = response;
        return data;
    }).catch((error) => { return data })
}

async function simpleSearch() {
    var nome = document.getElementById("nome").value;
    var freguesia = document.getElementById("freguesia").value;

    if (nome == "" && freguesia == "") {
        alert("Pelo menos um dos campos da pesquisa simples tem de estar preenchido.");
        return false;
    }
    else if (nome == "" && freguesia != "") {

        let dados = await fetchDataPorFreguesia(freguesia);

        var div = document.getElementById("escondidinho");

        var txt = "<div class='row'>";
        txt += "<div class='col-md-12'>";
        txt += "<div class='card'>";
        txt += "<div class='card-header'> <h4> Resultados";
        txt += "</h4> </div>";
        txt += '<div class="row">';
        txt += '<table>'
        txt += '<thead>'
        txt += '<tr>'
        txt += '<th> Nome </th>'
        txt += '<th> Ver </th>'
        txt += '<th> Ver no Mapa </th>'
        txt += '</tr>'
        txt += '</thead>'
        txt += '<tbody>'
        for (var j in dados) {
            txt += '<tr>'
            txt += '<td>' + dados[j].nome + '</td>'
            txt += '<td><button onclick=verMapa(' + dados[j].id_sitio + ')></td>'
            txt += '</tr>'
        }
        txt += '</tbody>'
        txt += '</table>'
        txt += '</div>';


        div.innerHTML = txt;
    }
    else if (nome != "" && freguesia == "") {

        let dados = await fetchDataPorNome(nome);

        var div = document.getElementById("escondidinho");

        var txt = "<div class='row'>";
        txt += "<div class='col-md-12'>";
        txt += "<div class='card'>";
        txt += "<div class='card-header'> <h4> Resultados";
        txt += "</h4> </div>";
        txt += '<div class="row">';
        txt += '<table>'
        txt += '<thead>'
        txt += '<tr>'
        txt += '<th> Nome </th>'
        txt += '<th> Ver </th>'
        txt += '<th> Ver no Mapa </th>'
        txt += '</tr>'
        txt += '</thead>'
        txt += '<tbody>'
        for (var j in dados) {
            txt += '<tr>'
            txt += '<td>' + dados[j].nome + '</td>'
            txt += '<td><button onclick=verMapa(' + dados[j].id_sitio + ')></td>'
            txt += '</tr>'
        }
        txt += '</tbody>'
        txt += '</table>'
        txt += '</div>';


        div.innerHTML = txt
    }
    else if (nome != "" && freguesia != "") {

        let data = [];
        let dadosNome = await fetchDataPorNome(nome);
        let dadosFreg = await fetchDataPorFreguesia(freguesia);

        for (var i in dadosNome) {
            for (var l in dadosFreg) {
                if (dadosNome[i] == dadosFreg[l]) {
                    data.push(dadosNome[i]);
                }
            }
        }

        var div = document.getElementById("escondidinho");

        var txt = "<div class='row'>";
        txt += "<div class='col-md-12'>";
        txt += "<div class='card'>";
        txt += "<div class='card-header'> <h4> Resultados";
        txt += "</h4> </div>";
        txt += '<div class="row">';
        txt += '<table>'
        txt += '<thead>'
        txt += '<tr>'
        txt += '<th> Nome </th>'
        txt += '<th> Ver </th>'
        txt += '<th> Ver no Mapa </th>'
        txt += '</tr>'
        txt += '</thead>'
        txt += '<tbody>'
        for (var j in data) {
            txt += '<tr>'
            txt += '<td>' + data[j].nome + '</td>'
            txt += '<td><button onclick=verMapa(' + data[j].id_sitio + ')></td>'
            txt += '</tr>'
        }
        txt += '</tbody>'
        txt += '</table>'
        txt += '</div>';


        div.innerHTML = txt
    }
}
