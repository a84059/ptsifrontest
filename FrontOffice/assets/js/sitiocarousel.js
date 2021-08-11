var id = sessionStorage.getItem('id_sitio');

const urlBase1 = "https://ptsibackend.herokuapp.com/imagens/sitio/" + id;
const urlBase2 = "https://ptsibackend.herokuapp.com/sitio/" + id
//const urlBase2 = "https://ptsibackend.herokuapp.com/sitio/" + id


window.onload = () => {
    // References to HTML objects   
    const nome_sitio = document.getElementById("nome_sitio")

    // References to HTML objects   
    const tblimagens = document.getElementById("carousel")

    const renderimagens = async() => {

        var strHtm2 = ``;
        const response2 = await fetch(`${urlBase2}`)
        const imagens2 = await response2.json()

        nome = imagens2[0].nome
        
        console.log(nome)

        strHtm2 += `Imagens - ` + nome;

        nome_sitio.innerHTML = strHtm2
        //const response2 = await fetch(`${urlBase2}`)
        //const imagens2 = await response2.json()

        // = imagens2[0].nome
        var strHtml = `	<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators">`;

        const response = await fetch(`${urlBase1}`)
        const imagens = await response.json()
        let i = 0;
        let a = 0;
        let b = 1;
        for (const imagem of imagens) {
            if (i == 0) {
                strHtml += `
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                
            `;
                i++;
                b++;

            }
            else {

                strHtml += `
            
            		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${b}"></button>
            
                
            `;
                i++;
                b++;
            }
        }

        strHtml += `</div><div class="carousel-inner">`

        for (const imagem of imagens) {
            if (a == 0) {
                a++;
                strHtml += `
                <div class="carousel-item active">
					<img src="../assets/ficheiros/imagens/megathumb/${imagem.ficheiro}" style="width:100% !important; height:680px" class="d-block w-100" alt="...">
				</div>
                
            `;

            }
            else {

                strHtml += `
            
            	<div class="carousel-item">
					<img src="../assets/ficheiros/imagens/megathumb/${imagem.ficheiro}" style="width:100% !important; height:680px" class="d-block w-100" alt="...">
				</div>
            
                
            `;
                a++;
            }
        }
        strHtml += `		<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style="transform: translate(0, 340px);">
    				 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    				 <span class="visually-hidden">Previous</span>
  					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style="transform: translate(0, 340px);">
   					 <span class="carousel-control-next-icon" aria-hidden="true"></span>
   					 <span class="visually-hidden">Next</span>
  					</button>
				</div>`
        tblimagens.innerHTML = strHtml


    }

    renderimagens()

}