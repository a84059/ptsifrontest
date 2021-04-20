const urlBase = "https://ptsibackend.herokuapp.com/sitio"

window.onload = () => {
    // References to HTML objects   
    const tblimagens = document.getElementById("tblimagens")

    const renderimagens = async() => {
        let strHtml = `
          <thead>
           <tr>
           <td>Nome</td>
           <td>Descrição</td>
           <td>Imagens</td>
           <td>Modelos 3D</td>
           </tr>
          </thead>
        `
        const response = await fetch(`${urlBase}`)
        const sitios = await response.json()
        for (const sitio of sitios) {
            strHtml += `
                <tr>
                    <td>${sitio.nome}</td>
                     <td>${sitio.descrição}</td>
                     <td><button id = ${sitio.id_sitio} name=btnimagens onclick="reply_click(this.id)">Ver Imagens</td>
                     <td><button id = ${sitio.id_sitio}>Ver Modelos</td>

                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml
    }

    renderimagens()
}


