/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGhpbGF0cGxheSIsImEiOiJjazRpa2Vmc2QwMHhnM2txOGxmaXZvb2hiIn0.Plte9b_iwk9DpJkdsw8D-Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/philatplay/ck4il3jb07h3v1cpul5ay8egb',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 8,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
