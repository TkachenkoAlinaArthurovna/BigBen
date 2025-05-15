export default function mapStyle() {
  return [
    { elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f5f5' }] },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#bdbdbd' }],
    },
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
    { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
    { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#757575' }],
    },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#dadada' }] },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#616161' }],
    },
    { featureType: 'road.local', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
    { featureType: 'transit.line', elementType: 'geometry', stylers: [{ color: '#e5e5e5' }] },
    { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#eeeeee' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#c9c9c9' }] },
    { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#9e9e9e' }] },
  ];
}
//   return [
//     {
//       featureType: 'all',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative',
//       elementType: 'geometry',
//       stylers: [
//         {
//           weight: '0.5',
//         },
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative',
//       elementType: 'labels',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative',
//       elementType: 'labels.text',
//       stylers: [
//         {
//           lightness: '-50',
//         },
//         {
//           saturation: '-50',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.neighborhood',
//       elementType: 'labels.text',
//       stylers: [
//         {
//           hue: '#009aff',
//         },
//         {
//           saturation: '25',
//         },
//         {
//           lightness: '0',
//         },
//         {
//           visibility: 'simplified',
//         },
//         {
//           gamma: '1',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'geometry',
//       stylers: [
//         {
//           saturation: '0',
//         },
//         {
//           lightness: '100',
//         },
//         {
//           gamma: '2.31',
//         },
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'labels',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//         {
//           lightness: '20',
//         },
//         {
//           gamma: '1',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'labels.text.fill',
//       stylers: [
//         {
//           saturation: '-100',
//         },
//         {
//           lightness: '-100',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'labels.text.stroke',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape.man_made',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'poi',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'geometry',
//       stylers: [
//         {
//           lightness: '0',
//         },
//         {
//           saturation: '45',
//         },
//         {
//           gamma: '4.24',
//         },
//         {
//           visibility: 'simplified',
//         },
//         {
//           hue: '#00ff90',
//         },
//       ],
//     },
//     {
//       featureType: 'poi.park',
//       elementType: 'labels',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'geometry',
//       stylers: [
//         {
//           saturation: '-100',
//         },
//         {
//           color: '#f5f5f5',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'labels.text',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//         {
//           color: '#666666',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'labels.icon',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road.arterial',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'transit',
//       elementType: 'labels.icon',
//       stylers: [
//         {
//           saturation: '-25',
//         },
//       ],
//     },
//     {
//       featureType: 'transit.line',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'transit.station.airport',
//       elementType: 'labels.icon',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           lightness: '50',
//         },
//         {
//           gamma: '.75',
//         },
//         {
//           saturation: '100',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'labels.icon',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//   ];
// }
