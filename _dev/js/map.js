function initMap() {
    const pinMap = { lat: 52.24970873284328, lng: 17.107451943043074 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: pinMap,
    });
    
    const contentString =
      '<div id="content" style="text-align: center;">' +
      'Katowicka 39,' + ' Dziećmierowo' + '<br>' + '62-035 Kórnik' +
      "</div>";
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300,
    });
  
    const icon = {
        path: "M89.529,0A25.558,25.558,0,0,0,64,25.529c0,18.834,23.554,41.219,24.557,42.164a1.42,1.42,0,0,0,1.945,0c1-.945,24.557-23.33,24.557-42.164A25.558,25.558,0,0,0,89.529,0Zm0,39.712a14.183,14.183,0,1,1,14.183-14.183A14.2,14.2,0,0,1,89.529,39.712Z",
        fillColor: '#0c61f6',
        strokeWeight: 0,
        fillOpacity: 1, 
        anchor: new google.maps.Point(90, 72),
    };
  
    const marker = new google.maps.Marker({
      position: pinMap,
      map,
      icon: icon,
      title: "Nail Beauty",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
  