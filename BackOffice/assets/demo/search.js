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
    return fetch('https://ptsibackend.herokuapp.com/sitioPorNome/' + nome, {
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

function verMapa(id_sitio) {
    console.log('verMapa')
}

function isIterable(obj) {
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

function renderTable(data) {
    var div = document.getElementById("escondidinho");
    var txt = `
        <div class='row'>
            <div class='col-md-12'>
                <div class='card'>
                    <div class='card-header'> 
                        <h4> Resultados </h4> 
                    </div>
                    <div class="row">
                        <div class="col-md-11 tab">
                            <table class="tab" style="margin-bottom: 10px">
                                <thead>
                                    <tr>
                                        <th> Nome </th>
                                        <th> Ver Mais </th>
                                    </tr>
                                </thead>
                                <tbody>`
    if (isIterable(data)) {
        for (let result of data) {
            txt +=
                `<tr>
                <td>${result.nome}</td>
                <td><button class='btn btn-primary btn-round' onclick=verMapa(${result.id_sitio})>Ver</td>
            </tr>`
        }
    }
    else {
        txt +=
            `<tr>
                <td>Não existem resultados para apresentar.</td>
            </tr>`
    }
    txt += `</tbody>
            </table>
            </div>
            </div>
            </div>
            </div>
            </div>`
    div.innerHTML = txt;
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
        renderTable(dados);
    }
    else if (nome != "" && freguesia == "") {
        let dados = await fetchDataPorNome(nome);
        renderTable(dados);
    }
    else if (nome != "" && freguesia != "") {
        let data = {};
        let dadosNome = await fetchDataPorNome(nome);
        let dadosFreg = await fetchDataPorFreguesia(freguesia);
        for (var i of dadosNome) {
            for (var l of dadosFreg) {
                if (i.id_sitio == l.id_sitio) {
                    data.push(i);
                }
            }
        }
        renderTable(data);
    }
}
