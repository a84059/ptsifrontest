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



window.onload = () => {

    fichasitioPDF(sessionStorage.getItem("sitio_id"))


}

const fichasitioPDF = async(id_sitio) => {


    var id_sitio = id_sitio
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

    const response = await fetchSitio(id_sitio);
    const sitio = response[0];

    console.log(sitio)

    txtNome = sitio.nome;
    txtToponimo = sitio.toponimo;
    txtDesc = ``;
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


    var respRelaTipo = await fetchRelaTipo(id_sitio);
    const rel = respRelaTipo
    console.log(rel)
    var txtTipologiaFinal = ``;

    for (var key in rel) {

        if (key == rel.length - 1) {

            txtTipologiaFinal += rel[key].tipo;
        }

        else {

            txtTipologiaFinal += rel[key].tipo + " | "
        }
    }

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
    `
        txtMotivos2 += `
      <tr>
        <td style="text-align:center">${k.unidade_figurativa}</td>
        <td style="text-align:center">${k.local_painel}</td>
        <td style="text-align:center">${k.grupo}</td>
        <td style="text-align:center">${k.tipo}</td>
        <td style="text-align:center">${k.sub_tipo}</td>
        <td style="text-align:center">${k.largura}</td>
        <td style="text-align:center">${k.altura}</td>
        <td style="text-align:center">${k.profundidade}</td>
      </tr>
    `
    }

    document.getElementById('txtMotivos1').innerHTML = txtMotivos1;
    document.getElementById('txtMotivos2').innerHTML = txtMotivos2;
}

setTimeout(function() {
    var opt = {
        margin: 1,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };
    html2pdf()
        .set(opt)
        .from(document.getElementById("fichasitio"))
        .save('Sítio.pdf');
}, 1500);

setTimeout(function() {
    window.close()
}, 5000);
