// default map layer
// 'map' refers to a <div> element with the ID map
let map = L.map('map', {
  center: [37.7749, -122.4194],
  layers: MQ.tileLayer('map'),
  zoom: 12
});