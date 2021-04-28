window.onload = () => {

    const addOptions = async() => {
        let responseGeog = await fetch('https://ptsibackend.herokuapp.com/sitioContexto');
        let responseGeol = await fetch('https://ptsibackend.herokuapp.com/sitiocontextogeol')
        let responseFreguesia = await fetch('https://ptsibackend.herokuapp.com/sitio');
        let resultsFreguesia = await responseFreguesia.json();
        let resultsGeol = await responseGeol.json();
        let resultsGeog = await responseGeog.json();

        var geog_txtRelGeral = `<option value="0"> Selecionar... </option>`
        var geog_txtUnRelevo = `<option value="0"> Selecionar... </option>`
        var geog_txtLocImpl = `<option value="0"> Selecionar... </option>`
        
        var geol_substrato = `<option value="0"> Selecionar... </option>`
        var geol_material = `<option value="0"> Selecionar... </option>`

        var freguesia = `<option value="0"> Selecionar... </option>`
        
        for (let i of resultsGeog) {
            geog_txtRelGeral += `<option value='${i.relevo_geral}'>${i.relevo_geral}</option>`
            geog_txtUnRelevo += `<option value='${i.unidade_relevo}'>${i.unidade_relevo}</option>`
            geog_txtLocImpl += `<option value='${i.local_implantacao}'>${i.local_implantacao}</option>`
            
        }
        
        for (let j of resultsGeol) {
            geol_substrato += `<option value='${j.substrato_geol}'>${j.substrato_geol}</option>`
            geol_material += `<option value='${j.material}'>${j.material}</option>`
        }
        
        
        for (let k of resultsFreguesia) {
            freguesia += `<option value='${k.freguesia1}'>${k.freguesia1}</option>`
        }
        
        //add contexto geog
        var relevo_geral = document.getElementById("relevo_geral").innerHTML = geog_txtRelGeral;
        var un_relevo = document.getElementById("un_relevo").innerHTML = geog_txtUnRelevo;
        var local_implantacao = document.getElementById("local_implantacao").innerHTML = geog_txtLocImpl;
        
        
        //add contexto geol
        var material = document.getElementById("material").innerHTML = geol_material;
        var substrato_geol = document.getElementById("substrato_geol").innerHTML = geol_substrato;
        
        //add freguesias
        var freg = document.getElementById("freguesia1").innerHTML = freguesia;
        var freg = document.getElementById("freguesia2").innerHTML = freguesia;
    }

    addOptions();
}
