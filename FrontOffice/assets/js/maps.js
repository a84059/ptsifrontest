let map;
var markers = [];


function initMap() {
    const rendermarkers = async() => {
        const response = await fetch('https://ptsibackend.herokuapp.com/sitio');
        const sitios = await response.json();

        function addMarker(props) {
            marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                // url: props.web,
                id: props.id
            });

            //Check for content

            if (props.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });

                marker.addListener('mouseover', function() {
                    infoWindow.open(map, marker);
                });
                /* marker.addListener("mouseout", function() {
infoWindow.close();
}); */
            }

            google.maps.event.addListener(marker, 'click', function() {
                //window.location.href = this.url;
                sessionStorage.setItem('id_sitio', this.id);
                console.log(this.id);
            });
        }
        for (const sitio of sitios) {

            addMarker({ coords: { lat: sitio.coord_X, lng: sitio.coord_Y }, id: sitio.id_sitio })

            //console.log(sitio.coord_X);
            //console.log(markers.length);
        }
    }
    rendermarkers();
    //New map

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.55032, lng: -8.420054 },
        zoom: 8,

    });
    //rendermarkers();
    //console.log(markers);

    //markers.push({coords:{lat:41.530918, lng:-8.780565}, id: 8});

    //Array of markers



    /* var markers = [
  {
      coords:{lat: 41.54107341860731, lng: -8.446089910450437},
 web: 'https://www.cm-braga.pt/pt'
  },
  {coords:{lat: 41.530918, lng: -8.780565},
content:'<img src = "images/banner.jpg"> </img>' , web: 'https://www.municipio.esposende.pt'

}]; */

    //Loop through markers

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
        console.log(markers.length);
    }




    //Add Marker function 


}
