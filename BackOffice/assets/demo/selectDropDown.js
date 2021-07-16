window.onload = () => {
    
    const addOptions = async() => {
        let responseFreguesia = await fetch('https://ptsibackend.herokuapp.com/sitio');
        let resultsFreguesia = await responseFreguesia.json();


        var freguesia = `<option value="0"> Selecionar... </option>`
        
        for (let k of resultsFreguesia) {
            freguesia += `<option value='${k.freguesia1}'>${k.freguesia1}</option>`
        }

        
        //add freguesias
        document.getElementById("freguesia").innerHTML = freguesia;
    }

    addOptions();
}