import markersFromPrevSite from './markersFromPrevSite';

const baseFolder = window.location.href.match(/localhost/)
  ? './assets/images/markers/'
  : '/wp-content/themes/3d/assets/images/markers/';

const markersAdresses = {
  main: `${baseFolder}main.svg`,
  school: `${baseFolder}school.svg`,
  university: `${baseFolder}school.svg`,
  hotel: `${baseFolder}hotel.svg`,
  shop: `${baseFolder}shop.svg`,
  park: `${baseFolder}park.svg`,
  school: `${baseFolder}school.svg`,
  education: `${baseFolder}education.svg`,
  medicine: `${baseFolder}medicine.svg`,
  market: `${baseFolder}market.svg`,
  transport: `${baseFolder}transport.svg`,
  ramsbeyondistanbul: `${baseFolder}ramsbeyondistanbul.svg`,
  ramscity: `${baseFolder}ramscity.svg`,
  quattro: `${baseFolder}quattro.svg`,
  bayramoglu: `${baseFolder}bayramoglu.svg`,
};

const markerPopupStyle = `
style="
margin-bottom: 16px;
text-align: center;
font-size: 16px;
font-weight: bold;
line-height: 100%;
color:#111112;
"
`;

const markerPopupStyleButton = `
style="
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-bottom: 10px;
padding: 10px 20px;
text-transform: uppercase;
font-size: 14px;
font-weight: bold;
line-height: 100%;
color:#f0f1f8;
background:#2d3cc9;
"
`;

export async function fetchMarkersData(google) {
  const buildLogoSize = new google.maps.Size(125, 55);
  const sendData = new FormData();
  sendData.append('action', 'infrastructure');
  const url = window.location.href.match(/localhost/)
    ? '/wp-admin/admin-ajax.php'
    : '/wp-admin/admin-ajax.php';
  // let markersData = window.location.href.match(/localhost|smarto/) ? Promise.resolve(mockData()) : await fetch(url, {
  //   method: 'POST',
  //   body: sendData,
  // });
  let markersData = Promise.resolve(mockData());
  // markersData = window.location.href.match(/localhost|smarto/) ? mockData() : await markersData.json();
  markersData = mockData();
  if (!markersData) {
    console.warn('Wrong data recieved');
    return;
  }

  let formatedMarkersDataForMap = markersData.reduce((acc, el) => {
    if (!el.list) return acc;
    el.list.forEach(marker => {
      acc.push({
        content: `<div ${markerPopupStyle}>${marker.name}</div>
        `,
        position: {
          lat: marker.coordinations.latitude,
          lng: marker.coordinations.elevation,
        },
        type: el.code,
        id: marker.id,
        zIndex: 2,
        icon: { url: markersAdresses[el.code], scaledSize: buildLogoSize },
      });
    });
    return acc;
  }, []);

  console.log(formatedMarkersDataForMap);

  markersFromPrevSite().forEach(marker => {
    formatedMarkersDataForMap.push({
      content: marker.description,
      position: {
        lat: marker.lat,
        lng: marker.lng,
      },
      type: marker.category,
      id: marker.id,
      zIndex: 1,
      icon: { url: markersAdresses[marker.category], scaledSize: buildLogoSize },
    });
  });

  return formatedMarkersDataForMap;
}

function mockData() {
  return [
    {
      name: 'Big Ben',
      code: 'main',
      list: [
        {
          name: 'Big Ben',
          id: '00',
          coordinations: {
            latitude: '49.805353021486276',
            elevation: '24.001803115986977',
          },
        },
      ],
    },
    {
      name: 'World School Lviv',
      code: 'school',
      list: [
        {
          name: 'World School Lviv',
          button: 'to plot a route',
          id: '01',
          coordinations: {
            latitude: '49.805353021486276',
            elevation: '24.00171728530533',
          },
        },
      ],
    },
    {
      name: 'Середня загальноосвітня школа №32',
      code: 'school',
      list: [
        {
          name: 'Середня загальноосвітня школа №32',
          id: '02',
          coordinations: {
            latitude: '49.79726482898194',
            elevation: '24.01991338981518',
          },
        },
      ],
    },
    {
      name: 'Загальноосвітня школа №48',
      code: 'school',
      list: [
        {
          name: 'Загальноосвітня школа №48',
          id: '03',
          coordinations: {
            latitude: '49.807180987373485',
            elevation: '24.01442022618956',
          },
        },
      ],
    },
    {
      name: 'Середня загальноосвітня школа №86',
      code: 'school',
      list: [
        {
          name: 'Середня загальноосвітня школа №86',
          id: '04',
          coordinations: {
            latitude: '49.796952799179515',
            elevation: '24.026302799999996',
          },
        },
      ],
    },
    {
      name: 'Середня загальноосвітня школа №36',
      code: 'school',
      list: [
        {
          name: 'Середня загальноосвітня школа №36',
          id: '05',
          coordinations: {
            latitude: '49.80756746046547',
            elevation: '24.001353415342102',
          },
        },
      ],
    },
    {
      name: 'Ліцей №2',
      code: 'school',
      list: [
        {
          name: 'Ліцей №2',
          id: '06',
          coordinations: {
            latitude: '49.80756380838673',
            elevation: '24.00249194232895',
          },
        },
      ],
    },
  ];
}
