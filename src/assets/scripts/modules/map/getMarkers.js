const baseFolder = window.location.href.match(/localhost/)
  ? './assets/images/markers/'
  : '/wp-content/themes/3d/assets/images/map/';

const markersAdresses = {
  main: `${baseFolder}main.svg`,
  hospital: `${baseFolder}hospital.svg`,
  cafe: `${baseFolder}cafe.svg`,
  // shop: `${baseFolder}shop.svg`,
  // park: `${baseFolder}park.svg`,
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
background: #ffffff;
color:#000000;
font-weight: bold;
padding:5px 10px;
font-size: 16px;
line-height: 120%;"
`;

export async function fetchMarkersData(google) {
  const buildLogoSize =
    window.innerWidth > 768 ? new google.maps.Size(150, 70) : new google.maps.Size(120, 50);
  const buildLogoSizeMain =
    window.innerWidth > 768 ? new google.maps.Size(90, 90) : new google.maps.Size(60, 60);
  const fd = new FormData();
  fd.append('action', 'infrastructure');
  const markersData = [];
  let ajaxMarkersData = await fetch('/wp-admin/admin-ajax.php', { method: 'POST', body: fd });
  ajaxMarkersData = await ajaxMarkersData.json();
  if (!ajaxMarkersData) {
    console.warn('Wrong data recieved');
    return;
  }

  ajaxMarkersData.map_points.forEach(el => {
    markersData.push({
      type: el.category,
      icon: { url: el.img, scaledSize: el.category !== 'main' ? buildLogoSize : buildLogoSizeMain },
      position: { lat: el.coords.split(', ')[0], lng: el.coords.split(', ')[1] },
      text: el.name,
    });
  });

  return markersData;
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
