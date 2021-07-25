window.onload = () => {

    const addOptions = async() => {
        let responsedistrito = await fetch('https://ptsibackend.herokuapp.com/distrito');
        let resultsdistritos = await responsedistrito.json();


        var distrito = `<option value="0">Todas</option>`

        for (let k of resultsdistritos) {
            distrito += `<option value='${k.distrito}'>${k.distrito}</option>`
        }


        //add distrito
        document.getElementById("distrito").innerHTML = distrito;
    }

    document.getElementById("concelho").disabled = true;
    document.getElementById("freguesia").disabled = true;

    addOptions();

    const initInfoSitio = async() => {
        const response = await fetch('https://ptsibackend.herokuapp.com/sitio')
        const sitio = await response.json();
        var txt = ``;

        for (var i in sitio) {
            txt += `
      <tr>
        <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
        <td style="text-align:center">${sitio[i].freguesia1}</td>
        <td><button style="text-align:right" class='btn btn-primary btn-round')>Ficha Sítio<td>
      </tr>
      `
        }
        document.getElementById('pesquisaSitio').innerHTML = txt;
    }
    initInfoSitio()

}


const addOptionsConcelho = async(distrito) => {

    if (document.getElementById("distrito").value == 0) {
        document.getElementById("concelho").disabled = true;
        document.getElementById("freguesia").disabled = true;
        document.getElementById("0").style.visibility = "visible";
        document.getElementById("concelho").value = 0
        document.getElementById("freguesia").value = 0
    }

    else {

        document.getElementById("concelho").disabled = false;

        let responseconcelho = await await fetch('https://ptsibackend.herokuapp.com/concelho/distrito', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                distrito: distrito,
            })
        })

        let resultsconcelho = await responseconcelho.json();


        var concelho = `<option id="0" value="0">Selecione um Distrito.</option><option value="1">Todas</option>`

        for (let k of resultsconcelho) {
            concelho += `<option value='${k.concelho}'>${k.concelho}</option>`
        }


        //add concelho
        document.getElementById("concelho").innerHTML = concelho;
        document.getElementById("0").style.display = "none";
        document.getElementById("concelho").value = 1
    }
}






const addOptionsFreguesia = async(concelho) => {

    if (document.getElementById("distrito").value == 0) {
        document.getElementById("concelho").disabled = true;
        document.getElementById("freguesia").disabled = true;
        document.getElementById("1").style.visibility = "visible";
        document.getElementById("freguesia").value = 0
    }
    if (document.getElementById("concelho").value == 1) {
        document.getElementById("freguesia").disabled = true;
        document.getElementById("1").style.visibility = "visible";
        document.getElementById("freguesia").value = 0
    }
    else {
        document.getElementById("freguesia").disabled = false;

        let responsefreguesia = await fetch('https://ptsibackend.herokuapp.com/freguesia/concelho', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                concelho: concelho,
            })
        })

        let resultsfreguesia = await responsefreguesia.json();


        var freguesia = `<option id="1" value="0">Selecione um Concelho.</option><option value="1">Todas</option>`

        for (let k of resultsfreguesia) {
            freguesia += `<option value='${k.freguesia1}' onchange="concelhodrop()">${k.freguesia1}</option>`
        }


        //add concelho
        document.getElementById("freguesia").innerHTML = freguesia;
        document.getElementById("1").style.display = "none";
        document.getElementById("freguesia").value = 1

    }

}
