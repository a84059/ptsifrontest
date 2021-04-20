var id = sessionStorage.getItem('id_sitio');

const urlBase = "https://ptsibackend.herokuapp.com/modelos/sitio/" + id


window.onload = () => {
    // References to HTML objects   
    const tblimagens = document.getElementById("tblimagens")

    const rendermodelos3d = async() => {
        let strHtml = `
          <thead>
           <tr>
           <td>Ficheiro</td>
           <td>Descrição</td>
           <td>Inventário</td>
           <td>Autor</td>
           </tr>
          </thead>
        `
        const response = await fetch(`${urlBase}`)
        const modelos = await response.json()
        for (const modelo of modelos) {
            strHtml += `
                <tr>
                    <td><iframe title="Termas Bracara Fase IV" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="${modelo.ficheiro}"></iframe></td>
                     <td>${modelo.descricao}</td>
                     <td>${modelo.n_inventario}</td>
                     <td>${modelo.autor}</td>
                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml
    }

    rendermodelos3d()
}