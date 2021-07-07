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
           </tr>
          </thead>
        `
        const response = await fetch(`${urlBase}`)
        const imagens = await response.json()
        for (const imagem of imagens) {
            strHtml += `
                <tr>
                    <td><img src="../assets/ficheiros/imagens/megathumb/${imagem.ficheiro}" width="300" height="200"></td>
                     <td>${imagem.descricao}</td>
                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml

        const lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        document.body.appendChild(lightbox)

        const images = document.querySelectorAll('img')
        images.forEach(image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild)
                }
                lightbox.appendChild(img)
            })
        })

        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return
            lightbox.classList.remove('active')
        })
    }

    renderimagens()


}
