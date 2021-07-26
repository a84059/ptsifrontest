demo = {

  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    ctx = document.getElementById('chartHours').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
          },
          {
            borderColor: "#f17e5d",
            backgroundColor: "#f17e5d",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
          },
          {
            borderColor: "#fcc468",
            backgroundColor: "#fcc468",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });

  },


  initChartsPages: function() {
    chartColor = "#FFFFFF";

    ctx = document.getElementById('chartHours').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
            borderColor: "#6bd098",
            backgroundColor: "#6bd098",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
          },
          {
            borderColor: "#f17e5d",
            backgroundColor: "#f17e5d",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
          },
          {
            borderColor: "#fcc468",
            backgroundColor: "#fcc468",
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              fontColor: "#9f9f9f",
              beginAtZero: false,
              maxTicksLimit: 5,
              //padding: 20
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "#ccc",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent",
              display: false,
            },
            ticks: {
              padding: 20,
              fontColor: "#9f9f9f"
            }
          }]
        },
      }
    });


    ctx = document.getElementById('chartEmail').getContext("2d");

    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [1, 2, 3],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            '#e3e3e3',
            '#4acccd',
            '#fcc468',
            '#ef8157'
          ],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: false
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });

    var speedCanvas = document.getElementById("speedChart");

    var dataFirst = {
      data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
      fill: false,
      borderColor: '#fbc658',
      backgroundColor: 'transparent',
      pointBorderColor: '#fbc658',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var dataSecond = {
      data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    };

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  },

  initMap: function() {
    let map;
    var markers = [];
    var sondagens_associadas;
    var ues_associadas;
    var infoWindow;

    const rendermarkers = async() => {
      const response = await fetch('https://ptsibackend.herokuapp.com/sitio');
      const sitios = await response.json();
      infoWindow = new google.maps.InfoWindow();

      function addMarker(props) {
        var marker = new google.maps.Marker({
          position: props.coords,
          map: map,
          //icon:props.iconImage
        });
        var isMouseOver = false;


        // Check for customicon
        if (props.iconImage) {
          // Set icon image
          marker.setIcon(props.iconImage);
        }


        // Check content

        if (props.content) {
          marker.addListener('click', function() {
            isMouseOver = false;
            console.log(isMouseOver);
            infoWindow.setContent(props.content);
            infoWindow.open(map, marker);

          });
        }

        marker.addListener('mouseover', function() {
          isMouseOver = true;
          console.log(isMouseOver);
          infoWindow.setContent(props.hover);
          infoWindow.open(map, this);
        });
        marker.addListener('mouseout', function() {
          if (isMouseOver) {
            infoWindow.close();
          }
        });
      }


      for (const sitio of sitios) {
        var imagens = await fetch(`https://ptsibackend.herokuapp.com/imagens/sitio/${sitio.id_sitio}`)
        var imgjson = await imagens.json()
        var imagem = imgjson[0].ficheiro;

        addMarker({
          coords: {
            lat: sitio.coord_X,
            lng: sitio.coord_Y
          },
          id: sitio.id_sitio,
          content: '<div id="iw-container">' +
            "<div style='text-align:center; overflow-x: hidden;'>" +
            "<img src='../../FrontOffice/assets/ficheiros/imagens/thumb/" + imagem + "'>" +
            "</div>" +
            "<br/><div style='text-align:center'>" +
            "<b><h5>" + sitio.nome + "</h5></b><br/></div>" +
            '<div class="btn-group" style="text-align:center"><input type="button" class="btn_vermais2" onclick="demo.downloadPDF(' + sitio.id_sitio + ')" value="Ficha de sítio"></input>' +
            '<a href=#escondido id="a_vermais">' +
            '<input type="button" class="btn_vermais" onclick="demo.verMais(' + sitio.id_sitio + ')" value="Ver mais"></input> ' +
            '</a>' +
            '</div></div>',
          hover: '<h5 style="text-align: center">' + sitio.nome + '</h5>'


        });
      }
    }
    rendermarkers();
    //New map

    map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 41.002531,
        lng: -7.046509 
      },
      zoom: 10,
      gestureHandling: 'greedy'

    });


    //Loop through markers

    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
      console.log(markers.length);
    }
  },

  initMap2: function(id_sitio) {
    let map;
    var markers = [];
    var sondagens_associadas;
    var ues_associadas;
    var infoWindow;

    const rendermarkers = async() => {
      const response = await fetch('https://ptsibackend.herokuapp.com/sitio/' + id_sitio);
      const sitios = await response.json();
      infoWindow = new google.maps.InfoWindow();

      function addMarker(props) {
        var marker = new google.maps.Marker({
          position: props.coords,
          map: map,
          //icon:props.iconImage
        });


        // Check for customicon
        if (props.iconImage) {
          // Set icon image
          marker.setIcon(props.iconImage);
        }


        // Check content

        if (props.content) {

          marker.addListener('click', function() {

            infoWindow.setContent(props.content);
            infoWindow.open(map, marker);
          });

        }
      }

      var email = sessionStorage.getItem('email');


      if (email != "") {
        for (const sitio of sitios) {
          addMarker({
            coords: {
              lat: sitio.coord_X,
              lng: sitio.coord_Y
            },
            id: sitio.id_sitio,
            content: '<h5 style="text-align: center">' + sitio.nome + '</h5>'

          });
        }
      }
      else {
        for (const sitio of sitios) {

          addMarker({
            coords: {
              lat: sitio.coord_X,
              lng: sitio.coord_Y
            },
            id: sitio.id_sitio,
            content: '<h5 style="text-align: center">' + sitio.nome + '</h5>'
          });
        }
      }
    }
    rendermarkers();
    //New map

    map = new google.maps.Map(document.getElementById("map2"), {
      center: {
        lat: 41.079879,
        lng: -7.115524
      },
      zoom: 9,
      gestureHandling: 'greedy'
    });


    //Loop through markers

    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
      console.log(markers.length);
    }
  },

  /*---------------------------------------------------------------------------------------*/

  fetchSondagens: function(id_sitio) {
    var sondagens = {}
    return fetch('https://ptsibackend.herokuapp.com/sitiosondagens/' + id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      sondagens = response;
      return sondagens;
    }).catch((error) => { return error })
  },

  fetchUEs: function(id_sitio) {
    var ues = {};
    return fetch('https://ptsibackend.herokuapp.com/sitioUEIDsitio/' + id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      ues = response;
      return ues;
    }).catch((error) => { return error })
  },

  fetchContextoGeog: function(id_sitio) {
    var geog = {};
    return fetch('https://ptsibackend.herokuapp.com/sitioContextoIDsitio/' + id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      geog = response;
      return geog;

    }).catch((error) => { return geog })
  },

  fetchContextoGeol: function(id_sitio) {
    var geol = {};
    return fetch('https://ptsibackend.herokuapp.com/sitiocontextogeolIDsitio/' + id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      geol = response;
      return geol;
    }).catch((error) => { return geol })
  },

  fetches: async function(id_sitio, nome) {
    var nome = nome;
    var geog = await (demo.fetchContextoGeog(id_sitio));
    var geol = await (demo.fetchContextoGeol(id_sitio));
    var sondagens_associadas = await (demo.fetchSondagens(id_sitio));
    var ues_associadas = await (demo.fetchUEs(id_sitio));
    demo.verMais(geog, geol, sondagens_associadas, ues_associadas, nome);
  },

  /*---------------------------------------------------------------------------------------*/

  verMais: function(id_sitio) {
    window.localStorage.setItem('sitio', id_sitio)
    window.location.replace("./sitioIndividual.html");
  },

  showNotification: function(from, align) {
    color = 'primary';

    $.notify({
      icon: "nc-icon nc-bell-55",
      message: "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer."

    }, {
      type: color,
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  },

  fetchMateriais: function(id_sitio) {
    var url = 'https://ptsibackend.herokuapp.com/materiais/sitio/'
    var materiais = {}
    return fetch(url + id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      materiais = response;
      return materiais
    }).catch((error) => { return materiais })
  },

  fetchMaterial: function(id_material) {
    var url = 'https://ptsibackend.herokuapp.com/materiais/'
    var material = {}
    return fetch(url + id_material, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      material = response;
      return material
    }).catch((error) => { return material })
  },

  fetchSondagem: function(id_sondagem) {
    var url = 'https://ptsibackend.herokuapp.com/sondagem/'
    var sondagem = {}
    return fetch(url + id_sondagem, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      sondagem = response;
      return sondagem
    }).catch((error) => { return sondagem })
  },

  fetchRocha: function(id_material) {
    var url = 'https://ptsibackend.herokuapp.com/materiais/rocha/'
    var rocha = {}
    return fetch(url + id_material, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = result.json();
      rocha = response;
      return rocha
    }).catch((error) => { return rocha })
  },

  fetchImagens: function(id_material) {
    var url = 'https://ptsibackend.herokuapp.com/imagens/material/'
    var imagens = {}
    return fetch(url + id_material, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = imagens.json();
      imagens = response;
      return imagens
    }).catch((error) => { return imagens })
  },

  fetchMotivos: function(id_material) {
    var url = `https://ptsibackend.herokuapp.com/materiais/rocha_motivo/material/${id_material}`
    var motivos = {}
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      var response = motivos.json();
      motivos = response;
      return motivos
    }).catch((error) => { return motivos })
  },

  initInfos: async function(id_sitio) {
    var materiais = await demo.fetchMateriais(id_sitio);

    var txt = ``;

    for (var i in materiais) {
      var sondagem = await demo.fetchSondagem(materiais[i].id_sondagem)
      var materialEspecifico;
      if (materiais[i].tipo == "Pedra") {
        materialEspecifico = await demo.fetchRocha(materiais[i].id_material);
      }
      txt += `
      <tr>
        <td style="text-align:center">${materiais[i].n_inventario}</td>
        <td style="text-align:center">${sondagem[0].designacao}</td>
        <td style="text-align:center">X: ${materiais[i].coordenada_x}, Y: ${materiais[i].coordenada_y}, Cota: ${materiais[i].coordenada_z}</td>
        <td style="text-align:center">${materialEspecifico[0].conservacao}</td>
        <td style="text-align:center">${materialEspecifico[0].comprimento}</td>
        <td style="text-align:center">${materialEspecifico[0].largura}</td>
        <td style="text-align:center">${materialEspecifico[0].espessura}</td>
        <td style="text-align:center">
          <button class='btn btn-primary btn-round' onclick="demo.verMaisInfos(
          '${materiais[i].id_material}',
          '${materialEspecifico[0].morfologia_sup}',
          '${materialEspecifico[0].asp_sup}',
          '${materialEspecifico[0].termo}',
          '${materialEspecifico[0].tipologia}',
          '${materialEspecifico[0].litologia}',
          '${materialEspecifico[0].forma}',
          '${materialEspecifico[0].fissuras}',
          '${materialEspecifico[0].n_faces}',
          '${materialEspecifico[0].remontagem}'
          )">Ver</button>
        </td>
      </tr>
      `
    }
    document.getElementById('infoBody').innerHTML = txt;
  },

  fetchDataPorFreguesia: function(freguesia) {
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

  fetchDataPorConcelho: function(concelho1) {
    var data = {}
    concelho = sessionStorage.getItem("concelhozona")
    return fetch('https://ptsibackend.herokuapp.com/sitio/concelho', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        concelho: concelho,
      })
    }).then(result => {
      var response = result.json();
      data = response;
      return data;
    }).catch((error) => { return data })
  },

  fetchDataPorDistrito: function(distrito1) {
    var data = {}
    distrito = sessionStorage.getItem("distritozona")
    return fetch('https://ptsibackend.herokuapp.com/sitio/distrito', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        distrito: distrito,
      })
    }).then(result => {
      var response = result.json();
      data = response;
      return data;
    }).catch((error) => { return data })
  },


  fetchDataPorDistrito2: function(distrito) {
    var data = {}
    return fetch('https://ptsibackend.herokuapp.com/sitio/distrito', {
       method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        distrito: distrito,
      })
    }).then(result => {
      var response = result.json();
      data = response;
      return data;
    }).catch((error) => { return data })
  },
  
  
  searchByDistrito: async function(distrito) {
    if (distrito == "0") {
      const response = await fetch('https://ptsibackend.herokuapp.com/sitio')
      const sitio = await response.json();
      var txt = ``;
      let ok = 1;
      for (var i in sitio) {
        txt += `
        <tr>
        <th style="text-align:center" scope="row">${ok}</th>
          <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
          <td style="text-align:center">${sitio[i].freguesia1}</td>
          <td><button  style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
        </tr>
        `
        ok++
      }
      document.getElementById('pesquisaSitio').innerHTML = txt;
      return;
    }
    const response = await demo.fetchDataPorDistrito2(distrito);
    var txt = ``;
    let ok = 1;
    console.log(response)
    for (var i in response) {
      txt += `
      <tr>
      <th style="text-align:center" scope="row">${ok}</th>
        <td style="text-align:center">${response[i].nome}</td>
          <td style="text-align:center">${response[i].distrito}</td>
          <td style="text-align:center">${response[i].concelho}</td>
        <td style="text-align:center">${response[i].freguesia1}</td>
        <td><button  style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
      </tr>
      `
      ok++;
    }
    document.getElementById('pesquisaSitio').innerHTML = txt;

  },

  searchByConcelho: async function(concelho) {
    if (concelho == "0") {
      const response = await demo.fetchDataPorDistrito(distrito);
      const sitio = await response.json();
      var txt = ``;
      let ok = 1;      
      for (var i in sitio) {
        txt += `
        <tr>
        <th style="text-align:center" scope="row">${ok}</th>
          <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
          <td style="text-align:center">${sitio[i].freguesia1}</td>
          <td><button  style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
        </tr>
        `
        ok++;
      }
      document.getElementById('pesquisaSitio').innerHTML = txt;
      return;
    }
    const response = await demo.fetchDataPorConcelho(concelho);
    var txt = ``;
    let ok = 1;
    console.log(response)
    for (var i in response) {
      txt += `
      <tr>
      <th style="text-align:center" scope="row">${ok}</th>
        <td style="text-align:center">${response[i].nome}</td>
          <td style="text-align:center">${response[i].distrito}</td>
          <td style="text-align:center">${response[i].concelho}</td>
        <td style="text-align:center">${response[i].freguesia1}</td>
        <td><button  style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
      </tr>
      `
      ok++;
    }
    document.getElementById('pesquisaSitio').innerHTML = txt;

  },

  searchByFreguesia: async function(freguesia) {
    if (freguesia == "1") {
      const sitio = await demo.fetchDataPorConcelho(concelho);
      var txt = ``;
      let ok = 1;
      for (var i in sitio) {
        txt += `
        <tr>
        <th style="text-align:center" scope="row">${ok}</th>
          <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
          <td style="text-align:center">${sitio[i].freguesia1}</td>
          <td><button  style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
        </tr>
        `
      }
      document.getElementById('pesquisaSitio').innerHTML = txt;
      return;
    }
    const response = await demo.fetchDataPorFreguesia(freguesia);
    var txt = ``;
    let ok = 1;
    for (var i in response) {
      txt += `
      <tr>
      <th style="text-align:center" scope="row">${ok}</th>
        <td style="text-align:center">${response[i].nome}</td>
          <td style="text-align:center">${response[i].distrito}</td>
          <td style="text-align:center">${response[i].concelho}</td>
        <td style="text-align:center">${response[i].freguesia1}</td>
        <td><button style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
      </tr>
      `
      ok++;
    }
    document.getElementById('pesquisaSitio').innerHTML = txt;

  },


  initInfoSitio: async function() {
    const response = await fetch('https://ptsibackend.herokuapp.com/sitio')
    const sitio = await response.json();
    var txt = ``;
    let ok = 1;
    for (var i in sitio) {
      txt += `
      <tr>
      <th style="text-align:center" scope="row">${ok}</th>
        <td style="text-align:center">${sitio[i].nome}</td>
          <td style="text-align:center">${sitio[i].distrito}</td>
          <td style="text-align:center">${sitio[i].concelho}</td>
        <td style="text-align:center">${sitio[i].freguesia1}</td>
        <td><button style="margin: auto; display: block;" class='btn btn-primary btn-round')>Ficha Sítio</td>
      </tr>
      `
      ok++
    }
    document.getElementById('pesquisaSitio').innerHTML = txt;
  },

  isIterable: function(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  },

  verMaisInfos: async function(id_material, morf_sup, asp_sup, termo, tipo, lito, forma, fissuras, faces, remont) {
    const responseImg = await fetch(`https://ptsibackend.herokuapp.com/imagens/material/${id_material}`)
    const imagens = await responseImg.json()

    const responseMotivos = await fetch(`https://ptsibackend.herokuapp.com/materiais/rocha_motivo/material/${id_material}`)
    const motivos = await responseMotivos.json();

    var txtDesc = ``;
    var txtMotivos1 = ``;
    var txtMotivos2 = ``;

    txtDesc = `
    <div class='row'>
      <div class='col-md-6'>
        <p class='card-text'><b>Morfologia da superfície: </b>${morf_sup}</p>
        <p class='card-text'><b>Aspeto da superfície: </b>${asp_sup}</p>
        <p class='card-text'><b>Termo de alteração: </b>${termo}</p>
        <br>
        <p class='card-text'><b>Topologia: </b>${tipo}</p>
        <p class='card-text'><b>Litologia: </b>${lito}</p>
        <br>
        <p class='card-text'><b>Forma: </b>${forma}</p>
        <p class='card-text'><b>Integridade da peça: </b>${fissuras}</p>
        <p class='card-text'><b>PLACAS - nº de faces: </b>${faces}</p>
        <p class='card-text'><b>Remontagem: </b>${remont}</p>
      </div>
      <div class='col-md-6'>`
    for (var i of imagens) {
      txtDesc += `<img src="../../FrontOffice/assets/ficheiros/imagens/thumb/${i.ficheiro}" width="300" height="200" alt="Card image cap">`
    }
    txtDesc += `
    </div>
    </div>`
    if (demo.isIterable(motivos)) {
      for (var k of motivos) {
        txtMotivos1 += `
      <tr>
        <td style="text-align:center">${k.n_inventario_mot}</td>
        <td style="text-align:center">${k.conservacao}</td>
        <td style="text-align:center">${k.fase}</td>
        <td style="text-align:center">${k.patine}</td>
        <td style="text-align:center">${k.tecnica}</td>
        <td style="text-align:center">${k.tecnica_variante}</td>
        <td style="text-align:center">${k.observacoes}</td>
        <td style="text-align:center">${k.motivo_figura}</td>
      </tr>
    `
        txtMotivos2 += `
      <tr>
        <td style="text-align:center">${k.unidade_figurativa}</td>
        <td style="text-align:center">${k.local_painel}</td>
        <td style="text-align:center">${k.grupo}</td>
        <td style="text-align:center">${k.tipo}</td>
        <td style="text-align:center">${k.sub_tipo}</td>
        <td style="text-align:center">${k.largura}</td>
        <td style="text-align:center">${k.altura}</td>
        <td style="text-align:center">${k.profundidade}</td>
      </tr>
    `
      }
    }
    else {
      txtMotivos1 += `Não existem motivos associados a este material`
      txtMotivos2 += `Não existem motivos associados a este material`
    }

    document.getElementById('descricao').innerHTML = txtDesc;
    document.getElementById('motivoBody1').innerHTML = txtMotivos1;
    document.getElementById('motivoBody2').innerHTML = txtMotivos2;
    document.getElementById('cardInfos').style.display = "block";
  },

  downloadPDF: async function(id_sitio) {
    window.localStorage.setItem('sitio', id_sitio)
    window.open(`./sitioPDF.html`)
  }
};
