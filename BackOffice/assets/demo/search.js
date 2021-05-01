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
    var img = document.getElementById("img").checked;
    var m3d = document.getElementById("m3d").checked;
    var relevo_geral = document.getElementById("relevo_geral").value;
    var un_relevo = document.getElementById("un_relevo").value;
    var local_implantacao = document.getElementById("local_implantacao").value;
    var substrato_geol = document.getElementById("substrato_geol").value;
    var material = document.getElementById("material").value;
    
    var arrinit = [nome, freguesia, img, m3d, relevo_geral, un_relevo, local_implantacao, substrato_geol, material];
    
    var arrfinal = arrinit.filter(i => i != false && i != "0"); 
    var data = {};
    
    for (let i of arrfinal) {
        
    }
    
    console.log(arrfinal)
}

function verMapa(id_sitio) {
    window.localStorage.setItem('sitio',id_sitio)
    window.location.replace("./sitioIndividual.html");
}