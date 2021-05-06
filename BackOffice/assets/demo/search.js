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

function fetchSitioPorId(id) {
    var data = {}
    return fetch('https://ptsibackend.herokuapp.com/sitio/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        data = response
        return data;
    }).catch((error) => { return data })
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
    var nome = document.getElementById("nome1").value;
    var freguesia = document.getElementById("freguesia1").value;

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
        let data = [];
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

async function advSearch() {
    var nome = document.getElementById("nome2").value;
    var freguesia = document.getElementById("freguesia2").value;
    var relevo_geral = document.getElementById("relevo_geral").value;
    var un_relevo = document.getElementById("un_relevo").value;
    var local_implantacao = document.getElementById("local_implantacao").value;
    var substrato_geol = document.getElementById("substrato_geol").value;
    var material = document.getElementById("material").value;
    var ids = [];
    if (nome != 0) {
        var nome_val = await fetchDataPorNome(nome)
        if (isIterable(nome_val)) {
            for (let i of nome_val) {
                ids.push(i.id_sitio)
            }
        }
    }
    if (freguesia != 0) {
        var freguesia_val = await fetchDataPorFreguesia(freguesia)
        for (let i of freguesia_val) {
            ids.push(i.id_sitio)
        }
    }
    if (relevo_geral != 0 && relevo_geral != undefined) {
        ids.push(parseInt(relevo_geral))
    }
    if (un_relevo != 0 && un_relevo != undefined) {
        ids.push(parseInt(un_relevo))
    }
    if (local_implantacao != 0 && local_implantacao != undefined) {
        ids.push(parseInt(local_implantacao))
    }
    if (substrato_geol != 0 && substrato_geol != undefined) {
        ids.push(parseInt(substrato_geol))
    }
    if (material != 0 && material != undefined) {
        ids.push(parseInt(material))
    }

    var unq_ids = [...new Set(ids)]

    var arr_sitios = []
    for (var id of unq_ids) {
        var sitio = await fetchSitioPorId(id)
        arr_sitios.push(sitio)
    }

    var data = [];
    for (var s of arr_sitios) {
        data.push(s[0])
    }
    renderTable(data)
}

function verMapa(id_sitio) {
    window.localStorage.setItem('sitio', id_sitio)
    window.location.replace("./sitioIndividual.html");
}
