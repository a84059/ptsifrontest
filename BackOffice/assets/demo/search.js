function fetchDataPorFreguesia() {
    
}

function simpleSearch() {
    //Verificar se está pelo menos um preenchido
    var nome = document.getElementById("nome").value;
    var freguesia = document.getElementById("freguesia").value;

    if (nome == "" && freguesia == "") {
        alert("Pelo menos um dos campos da pesquisa simples tem de estar preenchido.");
        return false;
    } else if (nome == "" && freguesia != ""){
        
        let dados = fetchDataPorFreguesia();
        
        var div = document.getElementById("escondidinho");
        
        var txt = "<div class='row'>";
        txt += "<div class='col-md-12'>";
        txt += "<div class='card'>";
        txt += "<div class='card-header'> <h4> Resultados";
        txt += "</h4> </div>";
        
        
        
        div.innerHTML = txt;
    } else {
        
    }
}
