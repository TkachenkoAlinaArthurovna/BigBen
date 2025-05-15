const windowPath = window.location.origin + window.location.pathname;

const isDev = window.location.href.match('localhost');

const prepareBaseFolder = isDev
  ? './assets/images/markers/'
  : '/wp-content/themes/3d/assets/images/map/';

// Set the base folder dynamically
const baseFolder = prepareBaseFolder;

export const markersAdresses = {
  main: `${baseFolder}main.svg`,
  school: `${baseFolder}school.svg`,
  mall: `${baseFolder}mall.svg`,
  park: `${baseFolder}park.svg`,
  pharmacy: `${baseFolder}pharmacy.svg`,
  restaurant: `${baseFolder}restaurant.svg`,
  sport: `${baseFolder}sport.svg`,
  gas: `${baseFolder}gas.svg`,
  bank: `${baseFolder}bank.svg`,
};
export function createMarkersData(google) {
  // Sizes will be defined here using the google object
  const defaultMarkerSize = new google.maps.Size(37.4, 65);
  const buildLogoSize = new google.maps.Size(82, 82);
  return [
    {
      type: 'main',
      icon: { url: markersAdresses.main, scaledSize: buildLogoSize },
      position: { lat: 49.805353021486276, lng: 24.001803115986977 },
      text: 'Big Ben',
    },

    // {
    //   type: 'school',
    //   icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
    //   position: { lat: 49.805353021486276, lng: 24.00171728530533 },
    //   text: 'World School Lviv',
    // },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.79726482898194, lng: 24.01991338981518 },
      text: 'Середня загальноосвітня школа №32',
    },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.807180987373485, lng: 24.01442022618956 },
      text: 'Загальноосвітня школа №48',
    },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.796952799179515, lng: 24.026302799999996 },
      text: 'Середня загальноосвітня школа №86',
    },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.80756746046547, lng: 24.001353415342102 },
      text: 'Середня загальноосвітня школа №36',
    },
    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.80756380838673, lng: 24.00249194232895 },
      text: 'Ліцей №2',
    },
  ];
}
