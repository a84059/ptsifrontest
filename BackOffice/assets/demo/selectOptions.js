window.onload = () => {
    
    const addOptions = async() => {
        let responseGeog = await fetch('https://ptsibackend.herokuapp.com/sitioContexto');
        let responseGeol = await fetch('https://ptsibackend.herokuapp.com/sitiocontextogeol')
        let responseFreguesia = await fetch('https://ptsibackend.herokuapp.com/freguesia');
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
            geog_txtRelGeral += `<option value='${i.id_sitio}'>${i.relevo_geral}</option>`
            geog_txtUnRelevo += `<option value='${i.id_sitio}'>${i.unidade_relevo}</option>`
            geog_txtLocImpl += `<option value='${i.id_sitio}'>${i.local_implantacao}</option>`
        }
        
        for (let j of resultsGeol) {
            geol_substrato += `<option value='${j.id_sitio}'>${j.substrato_geol}</option>`
            geol_material += `<option value='${j.id_sitio}'>${j.material}</option>`
        }
        
        
        for (let k of resultsFreguesia) {
            freguesia += `<option value='${k.freguesia1}'>${k.freguesia1}</option>`
        }
        
        //add contexto geog
        document.getElementById("relevo_geral").innerHTML = geog_txtRelGeral;
        document.getElementById("un_relevo").innerHTML = geog_txtUnRelevo;
        document.getElementById("local_implantacao").innerHTML = geog_txtLocImpl;
        
        
        //add contexto geol
        document.getElementById("material").innerHTML = geol_material;
        document.getElementById("substrato_geol").innerHTML = geol_substrato;
        
        //add freguesias
        document.getElementById("freguesia1").innerHTML = freguesia;
        document.getElementById("freguesia2").innerHTML = freguesia;
    }

    addOptions();
}
