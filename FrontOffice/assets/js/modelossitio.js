var id = sessionStorage.getItem('id_sitio');

const urlBase1 = "https://ptsibackend.herokuapp.com/modelos/sitio/" + id

const urlBase2 = "https://ptsibackend.herokuapp.com/sitio/" + id


window.onload = () => {
    // References to HTML objects   
    const tblimagens = document.getElementById("tblimagens")

    const rendermodelos3d = async() => {
        let strHtml = `
                 <thead>
                <tr>
                <td>Ficheiro</td>
                <td>Sítio</td>
                <td>Descrição</td>
                </tr>
                </thead>
                `
                
        const response2 = await fetch(`${urlBase2}`)
        const modelos2 = await response2.json()       
        
          nome = modelos2[0].nome
        
        
        const response = await fetch(`${urlBase1}`)
        const modelos = await response.json()
        
        
        for (const modelo of modelos) {
            strHtml += `
                <tr>
                    <td><iframe title="Termas Bracara Fase IV" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="${modelo.ficheiro}"></iframe></td>
                      <td>${nome}</td>
                     <td>${modelo.descricao}</td>
                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml
    }

    rendermodelos3d()
}
