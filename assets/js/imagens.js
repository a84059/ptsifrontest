const urlBase = "https://ptsibackend.herokuapp.com/imagens"

window.onload = () => {
    // References to HTML objects   
    const tblimagens = document.getElementById("tblimagens")

    const renderimagens = async() => {
        let strHtml = `
          <thead>
           <tr>
           <td>Imagem</td>
           <td>Descrição</td>
           <td>Inventário</td>
           <td>Autor</td>
           <td>Data</td>
           <td>Objeto</td>
           </tr>
          </thead>
        `
        const response = await fetch(`${urlBase}`)
        const imagens = await response.json()
        for (const imagem of imagens) {
            strHtml += `
                <tr>
                    <td><a href="#" class="pop"><img src="assets/ficheiros/imagens/thumb/${imagem.ficheiro}" width="300" height="200"></a></td>
                     <td>${imagem.descricao}</td>
                     <td>${imagem.n_inventario}</td>
                     <td>${imagem.autor}</td>
                     <td>${imagem.data}</td>
                     <td>${imagem.objecto}</td>
                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml
    }

    renderimagens()
    

}
