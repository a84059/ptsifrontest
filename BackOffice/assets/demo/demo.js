demo = {
  initPickColor: function () {
    $('.pick-class-label').click(function () {
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

  initDocChart: function () {
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

  initChartsPages: function () {
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

  initMap: function () {
    let map;
    var markers = [];
    var sondagens_associadas;
    var ues_associadas;
    var infoWindow;

    const rendermarkers = async () => {
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
          marker.addListener('click', function () {

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
              '<a href=#escondido id="a_vermais"> <input type="button" class="btn_vermais" onclick="demo.verMais(' + sitio.id_sitio + ')"  value="Ver mais"></input> </a>' + '</div>'
          });

          console.log(sitio.coord_Y);
          //console.log(markers.length);


        }
      } else {
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
        lat: 41.55032,
        lng: -8.420054
      },
      zoom: 8,
      gestureHandling: 'greedy'

    });


    //Loop through markers

    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
      console.log(markers.length);
    }







  },



  verMais: function (id_sitio) {
    fetchSondagens(id_sitio).then(result => {
      if (result.status != 404) {
        sondagens_associadas = result;
      } else {
        sondagens_associadas = "";
      }
    });
    fetchUEs(id_sitio).then(result => {
      if (result.status != 404) {
        ues_associadas = result;
      } else {
        ues_associadas = "";
      }
    });
    fetchContextoGeog(id_sitio).then(result => {
      var geog = "";
      if (result.status != 404) {
        geog = result[0];
      } else {
        geog = "";
      }
    });
    fetchContextoGeol(id_sitio).then(result => {
      if (result.status != 404) {
        geol = result[0];
      } else {
        geol = "";
      }
    });

    console.log('Fetch das sondagens ainda não funciona, é necessário fazer push para o heroku')

    var x = document.getElementById("escondido");
    var txt = "<p>";
    if (geog == null || geog == "") {
      txt += "Contexto geográfico: --- </p>";
    } else {
      txt += " Contexto geográfico </p>";
      txt += "</br>"
      txt += "Relevo Geral: " + geog.relevo_geral;
      txt += "</br>"
      txt += "Unidade de Relevo: " + geog.unidade_relevo;
      txt += "</br>"
      txt += "Local de Implantação: " + geog.local_implantacao;
      txt += "</br>"
    }
    if (geol == null || geol == "") {
      txt += "<p>Contexto geológico: ---<br /></p>";
    } else {
      txt += "</br>";
      txt += "<p> Contexto geológico </p>";
      txt += "</br>"
      txt += "Substrato Geológico: " + geol.substrato_geol;
    }
    txt += '<div class="inner">'
    txt += '<br />'
    txt += '<p>Sondagens associadas: ' + sondagens_associadas + '</p>'
    txt += '<div class="dropdown">'
    if (ues_associadas == null || ues_associadas == "") {
      txt += '<button class="dropbtn"> Nenhuma UE</button>'
    } else {
      txt += '<button class="dropbtn"> Selecione uma UE...</button>'
      txt += '<div class="dropdown-content">'
      for (let i in ues_associadas) {

        txt += '<a style="cursor:pointer" onclick="verMais2(' + ues_associadas[i].id_ue + ')">' + ues_associadas[i].identificacao + '</a>'

        txt += '<a onclick="verMais2(' + ues_associadas[i].id_ue + ')">' + ues_associadas[i].identificacao + '</a>'

      }
    }

    txt += '</div>'
    txt += '</div>'
    txt += '<br />'
    txt += '<br />'
    txt += '<br />'

    x.innerHTML = txt;


    if (x.style.display == 'none' || x.style.display == '') {

      if (x.style.display === "none") {

        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    }
  }, 



  showNotification: function (from, align) {
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
  }

};