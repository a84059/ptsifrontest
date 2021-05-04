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

        marker.addListener('mouseover', function() {
          infoWindow.setContent(props.hover);
          infoWindow.open(map, this);
        });
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
            content: '<div id="iw-container">' + '<div class="iw-title">' + sitio.nome + '</div>' +
              '<p id="nome_info">' + '<span>Morada: </span>' + sitio.lugar +
              ',' + sitio.freguesia1 + ',' + sitio.freguesia2 + '</p>' +
              '<p id="nome_info">' + '<span>Descrição: </span>' + sitio
              .descricao + '</p>' +
              '<a href=#escondido id="a_vermais"> <input type="button" class="btn_vermais" onclick="demo.fetches(' + sitio.id_sitio + ',`' + sitio.nome + '`)" value="Ver mais"></input> </a>' + '</div>',
            hover: '<p>' + sitio.nome + '</p>'


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
            content: '<div id="iw-container">' + '<div class="iw-title">' + sitio.nome + '</div>' +
              '<p id="nome_info">' + '<span>Morada: </span>' + sitio.lugar +
              ',' + sitio.freguesia1 + ',' + sitio.freguesia2 + '</p>' +
              '<p id="nome_info">' + '<span>Descrição: </span>' + sitio
              .descricao + '</p>' + '</div>'
          });

          console.log(sitio.coord_Y);
          //console.log(markers.length);
        }
      }
    }
    rendermarkers();
    //New map

    map = new google.maps.Map(document.getElementById("map"), {
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
            content: '<div id="iw-container">' + '<div class="iw-title">' + sitio.nome + '</div>' +
              '<p id="nome_info">' + '<span>Morada: </span>' + sitio.lugar +
              ',' + sitio.freguesia1 + ',' + sitio.freguesia2 + '</p>' +
              '<p id="nome_info">' + '<span>Descrição: </span>' + sitio
              .descricao + '</p>' +
              '<a href=#escondido id="a_vermais"> <input type="button" class="btn_vermais" onclick="demo.fetches(' + sitio.id_sitio + ',`' + sitio.nome + '`)" value="Ver mais"></input> </a>' + '</div>'
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
            content: '<div id="iw-container">' + '<div class="iw-title">' + sitio.nome + '</div>' +
              '<p id="nome_info">' + '<span>Morada: </span>' + sitio.lugar +
              ',' + sitio.freguesia1 + ',' + sitio.freguesia2 + '</p>' +
              '<p id="nome_info">' + '<span>Descrição: </span>' + sitio
              .descricao + '</p>' + '</div>'
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

  verMais: function(geog, geol, sondagens_associadas, ues_associadas, nome) {
    var x = document.getElementById("escondido");
    //x.addEventListener("click", fetches);
    var txt = "<div class='row'>";
    txt += "<div class='col-md-12'>";
    txt += "<div class='card'>";
    txt += "<div class='card-header'> <h3> " + nome;
    txt += "</h3> </div>";
    txt += "<div class='card-body'>"
    if (geog.status == 404) {
      txt += "<p>Contexto geográfico: --- </p>";
    }
    else {
      txt += " Contexto geográfico: </p>";
      txt += "</br>"
      txt += "Relevo Geral: " + geog[0].relevo_geral;
      txt += "</br>"
      txt += "Unidade de Relevo: " + geog[0].unidade_relevo;
      txt += "</br>"
      txt += "Local de Implantação: " + geog[0].local_implantacao;
      txt += "</br>"
    }

    if (geol.status == 404) {
      txt += "<p>Contexto geológico: ---<br /></p>";
    }
    else {
      txt += "</br>";
      txt += "<p> Contexto geológico: </p>";
      txt += "</br>"
      txt += "Substrato Geológico: " + geol[0].substrato_geol;
    }
    txt += '<div class="inner">'
    txt += '<br />'
    if (sondagens_associadas.status == 404) {
      txt += '<p>Sondagens associadas: --- </p>'
    }
    else {
      var len = sondagens_associadas.length;
      txt += '<p>Sondagens associadas: ';
      for (let j = 0; j < len - 1; j++) {
        txt += sondagens_associadas[j].designacao + ', ';
      }

      txt += sondagens_associadas[len - 1].designacao;
      txt += '</p>';
    }
    txt += '<div class="dropdown">'
    if (ues_associadas.status == 404) {
      txt += '<button class="dropbtn"> Nenhuma UE</button>'
    }
    else {
      txt += '<button  class="dropbtn" onclick="showDropdown()"> Selecione uma UE...</button>'
      txt += '<div id="drop" class="dropdown-content">'
      for (let i in ues_associadas) {

        txt += '<a style="cursor:pointer" onclick="verMais2(' + ues_associadas[i].id_ue + ')">' + ues_associadas[i].identificacao + '</a>'

        txt += '<a onclick="verMais2(' + ues_associadas[i].id_ue + ')">' + ues_associadas[i].identificacao + '</a>'

      }
    }
    txt += '</div>'
    txt += '</div>'
    txt += "</div>";
    txt += "</div>";
    txt += "</div>";
    txt += "</div>";

    x.innerHTML = txt;

    x.style.display = 'block';
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
  
  initInfos: async function(id_sitio) {
    var materiais = await demo.fetchMateriais(id_sitio);
    
    var txt=``;

    for (var i in materiais) {
      var sondagem = await demo.fetchSondagem(materiais[i].id_sondagem)
      var materialEspecifico;
      if(materiais[i].tipo == "Pedra") {
        materialEspecifico = await demo.fetchRocha(materiais[i].id_material);
      }
      txt += `<div class='row'>
                <div class='col-md-12'>
                  <p class='p-material'><b>Nº de Inventário:</b> ${materiais[i].n_inventario}</p>
                  <div class='row'>
                    <div class='col-md-6'>
                      <p><b>Sondagem:</b> ${sondagem[0].designacao}</p>
                      <br>
                      <p><b>UE: </b></p>
                      <p>Coordenada X: ${materiais[i].coordenada_x}</p>
                      <p>Coordenada Y: ${materiais[i].coordenada_y}</p>
                      <p>Cota: ${materiais[i].coordenada_z}</p>
                      <br>
                      <p><b>Conservação:</b> ${materialEspecifico[0].conservacao}</p>
                      <br>
                      <p><b>Comprimento: </b>${materialEspecifico[0].comprimento}</p>
                      <p><b>Largura: </b>${materialEspecifico[0].largura}</p>
                      <p><b>Espessura: </b>${materialEspecifico[0].espessura}</p>
                      <br>
                    </div>
                    <div class='col-md-6'>
                    </div>
                  </div>
                </div>
              </div>`
    }
    document.getElementById('infoBody').innerHTML = txt;
  }

};
