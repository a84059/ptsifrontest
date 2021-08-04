


window.onload = () => {
    // References to HTML objects   
    const novidadeshtml = document.getElementById("novidades")

    const rendernovidades = async() => {
        let strHtml = ``
        const response = await fetch("https://ptsibackend.herokuapp.com/novidades/all")
        const novidades = await response.json()
        for (const novidade of novidades) {
            strHtml += `
            <p style="color: #293241">${novidade.texto}</p>
            <img src="../assets/ficheiros/imagens/thumb/${novidade.imagem}.jpg" style="width:90% !important; height:100%; display: block; margin-left: auto;margin-right: auto;" class="d-block w-100" alt="...">
                
            `
        }
        novidadeshtml.innerHTML = strHtml
    }
rendernovidades()
}

