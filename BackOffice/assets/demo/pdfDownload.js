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
window.onload = () => {
    const renderTable = async() => {
        var id_sitio = window.localStorage.getItem('sitio');
        var txt = ``;
        var txt2 = ``;
        var txt3 = ``;
        var txt4 = ``;
        var txt5 = ``;
        var txt6 = ``;
        var txt7 = ``;
        var txt8 = ``;
        var txt9 = ``;
        var txt10 = ``;
        var txt11 = ``;

        const resp = await fetchSitio(id_sitio);
        var sitio = resp[0];
        for (var key in sitio) { if (sitio[key] == "NULL") sitio[key] = '' }
        txt += `<tr><td><b>Nome</b></td><td>${sitio.nome}</td><tr>`
        if (sitio.conservacao) txt += `<tr><td><b>Nome</b></td><td>${sitio.nome}</td><tr>`
        if (sitio.toponimo) txt += `<tr><td><b>Toponimo</b></td><td>${sitio.toponimo}</td><tr>`
        if (sitio.descricao) txt += `<tr><td><b>Descricao</b></td><td>${sitio.descricao}</td><tr>`
        if (sitio.interpretacao) txt += `<tr><td><b>Interpretacao</b></td><td>${sitio.interpretacao}</td><tr>`
        if (sitio.classificacao) txt += `<tr><td><b>Classificação</b></td><td>${sitio.classificacao}</td><tr>`
        if (sitio.lugar) txt += `<tr><td><b>Concelho</b></td><td>${sitio.lugar}</td><tr>`
        if (sitio.freguesia1 && sitio.freguesia2) {
            txt += `<tr><td><b>Freguesia</b></td><td>${sitio.freguesia1}, ${sitio.freguesia2}</td><tr>`
        }
        else if (sitio.freguesia1 && !sitio.freguesia2) {
            txt += `<tr><td><b>Freguesia</b></td><td>${sitio.freguesia1}</td><tr>`
        }
        else if (!sitio.freguesia1 && sitio.freguesia2) {
            txt += `<tr><td><b>Freguesia</b></td><td>${sitio.freguesia2}</td><tr>`
        }
        if (sitio.coord_X && sitio.coord_Y && sitio.Cota) {
            txt += `<tr><td><b>Coordenadas</b></td><td>X: ${sitio.coord_X}, Y: ${sitio.coord_Y}, Cota: ${sitio.Cota}</td><tr>`
        }
        else if (sitio.coord_X && sitio.coord_Y && !sitio.Cota) {
            txt += `<tr><td><b>Coordenadas</b></td><td>X: ${sitio.coord_X}, Y: ${sitio.coord_Y}</td><tr>`
        }
        if (sitio.area) txt += `<tr><td><b>Área</b></td><td>${sitio.area}</td><tr>`
        if (sitio.acessos) txt += `<tr><td><b>Acessos</b></td><td>${sitio.acessos}</td><tr>`
        if (sitio.tipo_acesso) txt += `<tr><td><b>Tipo de acesso</b></td><td>${sitio.tipo_acesso}</td><tr>`

        const resp2 = await fetchRelaTipo(id_sitio);
        for (let i in resp2) {
            for(var key in i){if(i[key]=="NULL") i[key]=''}
            txt+=`<tr>`
            if (i.tipo) txt2+=`<td>${i.tipo}</td>`
            if (i.cronologia) txt2+=`<td>${i.cronologia}</td>`
            txt+=`</tr>`
        }
        
        document.getElementById('sitioTableBody1').innerHTML = txt;
        document.getElementById('sitioTableBody2').innerHTML = txt2;
        //document.getElementById('sitioTableBody3').innerHTML = txt3;
        //document.getElementById('sitioTableBody4').innerHTML = txt4;
        //document.getElementById('sitioTableBody5').innerHTML = txt5;
        //document.getElementById('sitioTableBody6').innerHTML = txt6;
        //document.getElementById('sitioTableBody7').innerHTML = txt7;
        //document.getElementById('sitioTableBody8').innerHTML = txt8;
        //document.getElementById('sitioTableBody9').innerHTML = txt9;
        //document.getElementById('sitioTableBody10').innerHTML = txt10;
        //document.getElementById('sitioTableBody11').innerHTML = txt11;
    }

    renderTable();
}

setTimeout(function() {
    //window.print();
}, 1500);
