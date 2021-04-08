function fetchSitio(id_sitio) {
    fetch('https://ptsibackend.herokuapp.com/sitio/id_sitio', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        console.log(result)
        if (result.status == 200) {
            //já temos o sítio, agora vamos buscar os sitio_contexto
        }
        else {
            console.log("Erro!")
        }
    })
}
