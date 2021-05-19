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
    const renderInfo = async() => {
        var id_sitio = window.localStorage.getItem('sitio');
        var txtNome = ``;
        var txtToponimo = ``;
        var txtDesc = ``;
        var txtInterpretacao = ``;
        var txtClassificacao = ``;
        var txtCodClassificacao = ``;
        var txtConcelho = ``;
        var txtFreguesia = ``;
        var txtCoordenadas = ``;
        var txtAcessos = ``;
        var txtTipoAcesso = ``;
        var txtTipologia = `<b>Tipologia: </b>`;
        var txtPerCultural = `<b>Período Cultural: </b>`;

        const resp = await fetchSitio(id_sitio);
        var sitio = resp[0];
        for (var key in sitio) { if (sitio[key] == "NULL" || sitio[key] == '' || sitio[key] == null) sitio[key] = 'Não foram encontrados valores' }
        txtNome += `<b>${sitio.nome}</b>`
        txtToponimo += `<h4><b>Topónimo: </b> ${sitio.toponimo}</h4>`
        txtDesc += `${sitio.descricao}`
        txtInterpretacao += `<b>Interpretacao: </b> ${sitio.interpretacao}`
        txtClassificacao += `<b>Classificação: </b>${sitio.classificacao}`
        txtCodClassificacao += `<b>CNS: </b>${sitio.cod_classificacao}`
        txtConcelho += `Concelho: ${sitio.lugar}`
        if (sitio.freguesia1 != "Não encontrado" && sitio.freguesia2 != "Não encontrado") {
            txtFreguesia += `Freguesia: ${sitio.freguesia1}, ${sitio.freguesia2}`
        }
        else if (sitio.freguesia1 != "Não encontrado" && sitio.freguesia2 == "Não encontrado") {
            txtFreguesia += `Freguesia: ${sitio.freguesia1}`
        }
        else if (sitio.freguesia1 == "Não encontrado" && sitio.freguesia2 != "Não encontrado") {
            txtFreguesia += `Freguesia: ${sitio.freguesia2}`
        }
        if (sitio.coord_X && sitio.coord_Y && sitio.Cota) {
            txtCoordenadas += `<b>Coordenadas: </b> <b>X: </b> ${sitio.coord_X}     <b>Y: </b>${sitio.coord_Y}     <b>Cota: </b> ${sitio.Cota}</td><tr>`
        }
        else if (sitio.coord_X && sitio.coord_Y && !sitio.Cota) {
            txtCoordenadas += `<tr><td><b>Coordenadas</b></td><td>X: ${sitio.coord_X}, Y: ${sitio.coord_Y}</td><tr>`
        }
        txtAcessos += `<b>Acessos: </b>${sitio.acessos}`
        txtTipoAcesso += `<b>Tipo de acesso: </b>${sitio.tipo_acesso}`
        var respRelaTipo = await fetchRelaTipo(id_sitio);
        var txtTipologiaFinal = ``;
        if (respRelaTipo.status != 404) {
            for (var linha of respRelaTipo) {
                txtTipologia += `${linha.tipo}; `
            }
            txtTipologiaFinal = txtTipologia.slice(0, -2)
        }
        else {
            txtTipologiaFinal = txtTipologia + `Não encontrado.`
        }


        var respPerCultural = await fetchRelaPerCultural(id_sitio);
        var txtPerCulturalFinal = ``;
        if (respPerCultural.status != 404) {
            for (var linha of respPerCultural) {
                txtPerCultural += `${linha.periodo}; `
            }
            txtPerCulturalFinal = txtPerCultural.slice(0, -2)
        }
        else {
            txtPerCulturalFinal = txtPerCultural + `Não encontrado.`
        }

        var respImagens = await fetchImagens(id_sitio);
        var txtImagens = ``;
        if (respImagens.status != 404) {
            for (var linha of respImagens) {
                if (linha.objecto == 'Sítio') {
                    txtImagens += `
                        <div class="img-with-text">
                            <img src="../../FrontOffice/assets/ficheiros/imagens/thumb/${linha.ficheiro}" width="300" height="200" alt="img">
                            <p>${linha.descricao}</p>
                        </div>
                    `;
                }
            }
        }
        else {
            txtImagens += `Não foram encontradas imagens.`
        }

        var txtBibliografia = ``;
        var respRelaBiblio = await fetchRelaBiblio(id_sitio);
        if (respRelaBiblio.status != 404) {
            for (var rela of respRelaBiblio) {
                var respBiblio = await fetchBibliografia(rela.id_bibliografia)
                var bibliografia = respBiblio[0]
                if (bibliografia != undefined) {
                    for (var key in bibliografia) { if (bibliografia[key] == "NULL" || bibliografia[key] == '' || bibliografia[key] == null) bibliografia[key] = 'Indefinido' }
                    txtBibliografia += `<p><b>${bibliografia.autor}</b> (${bibliografia.ano}): <i>${bibliografia.titulo}</i>, ${bibliografia.serieColecao}, ${bibliografia.editora}, p.${rela.paginas} </p>`
                }
                else {
                    txtBibliografia += `<p>p.${rela.paginas} </p>`
                }
            }
        }
        else {
            txtBibliografia += `<p>Não foi encontrada nenhuma referência</p>`
        }


        document.getElementById('nome').innerHTML = txtNome;
        document.getElementById('toponimo').innerHTML = txtToponimo;
        document.getElementById('descricao').innerHTML = txtDesc;
        document.getElementById('interpretacao').innerHTML = txtInterpretacao
        document.getElementById('classificacao').innerHTML = txtClassificacao;
        document.getElementById('cod_classificacao').innerHTML = txtCodClassificacao;
        document.getElementById('concelho').innerHTML = txtConcelho;
        document.getElementById('freguesia').innerHTML = txtFreguesia;
        document.getElementById('coordenadas').innerHTML = txtCoordenadas;
        document.getElementById('acessos').innerHTML = txtAcessos;
        document.getElementById('tipo_acesso').innerHTML = txtTipoAcesso;
        document.getElementById('tipologia').innerHTML = txtTipologiaFinal;
        document.getElementById('percultural').innerHTML = txtPerCulturalFinal;
        document.getElementById('imagens').innerHTML = txtImagens;
        document.getElementById('todo').innerHTML += txtBibliografia;
    }

    renderInfo();
}

setTimeout(function() {
    var opt = {
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf()
        .set(opt)
        .from(document.body)
        .save('Sítio.pdf');
}, 1500);

setTimeout(function() {
    window.close()
}, 2300);

