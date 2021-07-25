 /* fetchDataPorFreguesia: function(freguesia) {
    var data = {}
    return fetch('https://ptsibackend.herokuapp.com/sitioPorFreguesia/' + freguesia, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      data = response;
      return data;
    }).catch((error) => { return data })
  },

  searchByFreguesia: async function(freguesia) {
    if (freguesia == "1") {
      const response = await fetch('https://ptsibackend.herokuapp.com/sitio')
      const sitio = await response.json();
      var txt = ``;

      for (var i in sitio) {
        txt += `
        <tr>
          <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
          <td style="text-align:center">${sitio[i].freguesia1}</td>
          <td><button  style="text-align:right" class='btn btn-primary btn-round')>Ficha Sítio<td>
        </tr>
        `
      }
      document.getElementById('pesquisaSitio').innerHTML = txt;
      return;
    }
    const response = await demo.fetchDataPorFreguesia(freguesia);
    var txt = ``;

    for (var i in response) {
      txt += `
      <tr>
        <td style="text-align:center">${response[i].nome}</td>
          <td style="text-align:center">${response[i].distrito}</td>
          <td style="text-align:center">${response[i].concelho}</td>
        <td style="text-align:center">${response[i].freguesia1}</td>
        <td><button  style="text-align:right" class='btn btn-primary btn-round')>Ficha Sítio<td>
      </tr>
      `
    }
    document.getElementById('pesquisaSitio').innerHTML = txt;

  },
*/

