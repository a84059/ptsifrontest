window.onload = () => {

    const addOptions = async() => {
        let responseGeog = await fetch('https://ptsibackend.herokuapp.com/sitioContexto');
        let responseGeol = await fetch('https://ptsibackend.herokuapp.com/sitiocontextogeol')
        let resultsGeol = await responseGeol.json();
        let resultsGeog = await responseGeog.json();

        var geog_txtRelGeral = `<`
        var geog_txtUnRelevo = `<`
        var geog_txtLocImpl = `<`
        
        var geol_substrato = `<`
        var geol_material = `<`

        for (let i of resultsGeog) {
            geog_txtRelGeral += `option>${i.relevo_geral}</option>`
            geog_txtUnRelevo += `option>${i.unidade_relevo}</option>`
            geog_txtLocImpl += `option>${i.local_implantacao}</option>`
            
        }
        
        for (let j of resultsGeol) {
            geol_substrato += `option>${j.substrato_geol}</option>`
            geol_material += `option>${j.material}</option>`
        }
        
        var relevo_geral = document.getElementById("relevo_geral").innerHTML = geog_txtRelGeral;
        var un_relevo = document.getElementById("un_relevo").innerHTML = geog_txtUnRelevo;
        var local_implantacao = document.getElementById("local_implantacao").innerHTML = geog_txtLocImpl;
        
        var material = document.getElementById("material").innerHTML = geol_material;
        var substrato_geol = document.getElementById("substrato_geol").innerHTML = geol_substrato;
    }

    addOptions();
}
