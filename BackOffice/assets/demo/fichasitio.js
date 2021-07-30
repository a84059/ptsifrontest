function fetchSitio(id_sitio) {
    var url = `https://ptsibackend.herokuapp.com/sitio/${id_sitio}`
    var sitio = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        sitio = response;
        return sitio;
    }).catch((error) => { return sitio })
}

function fetchRelaTipo(id_sitio) {
    var url = `https://ptsibackend.herokuapp.com/sitiorelatipoIDsitio/${id_sitio}`
    var rela = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        rela = response;
        return rela;
    }).catch((error) => { return rela })
}

function fetchRelaPerCultural(id_sitio) {
    var url = `https://ptsibackend.herokuapp.com/sitiopercuturalIDsitio/${id_sitio}`
    var rela = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        rela = response;
        return rela;
    }).catch((error) => { return rela })
}


function fetchImagens(id_sitio) {
    var url = `https://ptsibackend.herokuapp.com/imagens/sitio/${id_sitio}`
    var img = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        img = response;
        return img;
    }).catch((error) => { return img })
}

function fetchRelaBiblio(id_sitio) {
    var url = `https://ptsibackend.herokuapp.com/bibliografiaIDSitio/${id_sitio}`
    var rela = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        rela = response;
        return rela;
    }).catch((error) => { return rela })
}

function fetchBibliografia(id_bibliografia) {
    var url = `https://ptsibackend.herokuapp.com/bibliografia/${id_bibliografia}`
    var bib = {}
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(result => {
        var response = result.json();
        bib = response;
        return bib;
    }).catch((error) => { return bib })
}


const fichasitio = async(id_sitio) => {

    document.getElementById("fichasitio").style.display = "inline";
    document.getElementById("generatePDF").style.display = "inline";

    var id_sitio = id_sitio;
    var txtNome = ``;
    var txtToponimo = ``;
    var txtDesc = ``;
    var txtInterpretacao = ``;
    var txtClassificacao = ``;
    var txtCodClassificacao = ``;
    var txtCNS = ``;
    var txtConcelho = ``;
    var txtFreguesia = ``;
    var txtCoordenadasX = ``;
    var txtCoordenadasY = ``;
    var txtCota = ``;
    var txtAcessos = ``;
    var txtTipoAcesso = ``;
    var txtTipologia = `<b>Tipologia: </b>`;
    var txtPerCultural = `<b>Período Cultural: </b>`;
    var txtImagem = ``;

    const response = await fetchSitio(id_sitio);
    const sitio = response[0];

    txtNome = sitio.nome;
    txtToponimo = " " + sitio.toponimo;
    txtDesc = sitio.descricao;
    txtCNS = sitio.cns;
    txtInterpretacao = sitio.interpretacao;
    txtClassificacao = sitio.Classificacao;
    txtCodClassificacao = sitio.cod_classificacao;
    txtConcelho = sitio.concelho;
    txtFreguesia = sitio.freguesia1;
    txtCoordenadasX = sitio.coord_X;
    txtCoordenadasY = sitio.coord_Y;
    txtCota = sitio.Conta;
    txtAcessos = sitio.acessos;
    txtTipoAcesso = sitio.tipo_acesso;
    txtPerCultural = sitio.periodo_cultural;

    document.getElementById('nome_sitio').innerHTML = txtNome;
    document.getElementById('interpretacao_sitio').innerHTML = txtInterpretacao;
    document.getElementById('classificacao_sitio').innerHTML = txtClassificacao;
    document.getElementById('cns_sitio').innerHTML = txtCNS;
    document.getElementById('concelho_sitio').innerHTML = txtConcelho;
    document.getElementById('freguesia_sitio').innerHTML = txtFreguesia;
    document.getElementById('coordenadaX_sitio').innerHTML = txtCoordenadasX;
    document.getElementById('coordenadaY_sitio').innerHTML = txtCoordenadasY;
    document.getElementById('cota_sitio').innerHTML = txtCota;
    document.getElementById('acessos_sitio').innerHTML = txtAcessos;
    document.getElementById('tipoacesso_sitio').innerHTML = txtTipoAcesso;
    document.getElementById('periodocultural_sitio').innerHTML = txtPerCultural;
    document.getElementById('bibliografia_sitio').innerHTML = txtCota;
    document.getElementById('toponimo_sitio').innerHTML = txtToponimo;
    document.getElementById('descricao_sitio').innerHTML = txtDesc;


    var respRelaTipo = await fetchRelaTipo(id_sitio);
    const rel = respRelaTipo
    var txtTipologiaFinal = ``;

    for (var key in rel) {

        if (key == rel.length - 1) {

            txtTipologiaFinal += rel[key].tipo;
        }

        else {

            txtTipologiaFinal += rel[key].tipo + " | "
        }
    }
    document.getElementById('tipologia_sitio').innerHTML = txtTipologiaFinal;


    var respoimagens = await fetchImagens(id_sitio);
    const relimagens = respoimagens
    console.log(relimagens)
    var txtImagens = ``;

    for (var imagem in relimagens) {

        txtImagens += `<div class="col-md-3 pr-1">
                  <div class="card" style="width:22rem !important;">
                    <img class="card-img-top" style="width:22rem !important; height:15em" src="../../FrontOffice/assets/ficheiros/imagens/thumb/${relimagens[imagem].ficheiro}" alt="Card image cap">
                  </div>
                </div> `


    }

    document.getElementById('tipologia_sitio').innerHTML = txtTipologiaFinal;

    document.getElementById('imagens_sitio').innerHTML = txtImagens;



    const responseMotivos = await fetch(`https://ptsibackend.herokuapp.com/materiais/rocha_motivo/sitio/${id_sitio}`)
    const motivos = await responseMotivos.json();

    var txtDesc = ``;
    var txtMotivos1 = ``;
    var txtMotivos2 = ``;
    

    for (var k of motivos) {
        txtMotivos1 += `
      <h6 style="display:inline-block; margin-top:40px">Motivo ${k.n_inventario_mot}</h6>
              <table class="table">
                <thead class=" text-primary">
                  <tr>
                    <th style="text-align:center"> Nº de inventário </th>
                    <th style="text-align:center"> Cronologia</th>
                    <th style="text-align:center"> Conservação </th>
                    <th style="text-align:center"> Patine </th>
                    <th style="text-align:center"> Técnica </th>
                    <th style="text-align:center"> Técnica Variante </th>
                    <th style="text-align:center"> Técnica (Observações) </th>
                    <th style="text-align:center"> Figura Completa </th>
                  </tr>
                </thead>
                <tbody id="txtMotivos1">
                  <tr>
                    <td style="text-align:center">${k.n_inventario_mot}</td>
                    <td style="text-align:center">${k.conservacao}</td>
                    <td style="text-align:center">${k.fase}</td>
                    <td style="text-align:center">${k.patine}</td>
                    <td style="text-align:center">${k.tecnica}</td>
                    <td style="text-align:center">${k.tecnica_variante}</td>
                    <td style="text-align:center">${k.observacoes}</td>
                    <td style="text-align:center">${k.motivo_figura}</td>
                  </tr>
                </tbody>
                <thead class="text-primary">
                  <tr>
                    <th style="text-align:center;padding-top: 40px;"> Unidade Figurativa </th>
                    <th style="text-align:center;padding-top: 40px;"> Localização do painel</th>
                    <th style="text-align:center;padding-top: 40px;"> Grupo </th>
                    <th style="text-align:center;padding-top: 40px;"> Tipo </th>
                    <th style="text-align:center;padding-top: 40px;"> Sub Tipo </th>
                    <th style="text-align:center;padding-top: 40px;"> Largura </th>
                    <th style="text-align:center;padding-top: 40px;"> Altura </th>
                    <th style="text-align:center;padding-top: 40px;"> Profundidade </th>
                  </tr>
                </thead>
                <tbody id="txtMotivos2">
                    <td style="text-align:center">${k.unidade_figurativa}</td>
                    <td style="text-align:center">${k.local_painel}</td>
                    <td style="text-align:center">${k.grupo}</td>
                    <td style="text-align:center">${k.tipo}</td>
                    <td style="text-align:center">${k.sub_tipo}</td>
                    <td style="text-align:center">${k.largura}</td>
                    <td style="text-align:center">${k.altura}</td>
                    <td style="text-align:center">${k.profundidade}</td>
                </tbody>
              </table>
    `
    
        const responseImagens = await fetch(`https://ptsibackend.herokuapp.com/imagens/material/${k.id_material}`)
        const motivosImagens = await responseImagens.json();

        for (var k of motivosImagens) {
            console.log(k)
           txtMotivos1 +=  `<div class="col-md-3 pr-1">
                  <div class="card" style="width:22rem !important;">
                    <img class="card-img-top" style="width:22rem !important; height:15em" src="../../FrontOffice/assets/ficheiros/imagens/thumb/${k.ficheiro}" alt="Card image cap">
                  </div>
              </div>`
        }
    
    }

    document.getElementById('txtmotivos').innerHTML = txtMotivos1;

}






const fichasitiomap = async(id_sitio) => {

    sessionStorage.setItem("sitio_id", id_sitio)
    window.open(`./sitioPDF.html`);

}

