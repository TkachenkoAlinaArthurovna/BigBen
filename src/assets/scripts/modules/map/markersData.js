const windowPath = window.location.origin + window.location.pathname;

const isDev = window.location.href.match('localhost');

// const prepareBaseFolder = isDev
//   ? './assets/images/markers/'
//   : '/wp-content/themes/3d/assets/images/map/';

const prepareBaseFolder = '/wp-content/themes/3d/assets/images/markers/';

// Set the base folder dynamically
const baseFolder = prepareBaseFolder;

export const markersAdresses = {
  main: `${baseFolder}main.svg`,
  school: `${baseFolder}university.svg`,
  university: `${baseFolder}university.svg`,
  kinderPlace: `${baseFolder}university.svg`,
  fun: `${baseFolder}university.svg`,
  restaurant: `${baseFolder}university.svg`,
  food: `${baseFolder}university.svg`,
  sport: `${baseFolder}university.svg`,
  hospital: `${baseFolder}university.svg`,
  nature: `${baseFolder}university.svg`,
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
      position: { lat: 49.80980317048622, lng: 24.019887101848713 },
      text: 'Big Ben',
    },

    {
      type: 'school',
      icon: { url: markersAdresses.school, scaledSize: defaultMarkerSize },
      position: { lat: 49.805353021486276, lng: 24.00171728530533 },
      text: 'World School Lviv',
    },
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
    {
      type: 'university',
      icon: { url: markersAdresses.university, scaledSize: defaultMarkerSize },
      position: { lat: 49.82424205420603, lng: 24.036929838008305 },
      text: 'Український католицький університет',
    },
    {
      type: 'university',
      icon: { url: markersAdresses.university, scaledSize: defaultMarkerSize },
      position: { lat: 49.82295253298409, lng: 24.02466041704919 },
      text: 'Технологічний коледж Національного університету "Львівська Політехніка"',
    },
    {
      type: 'kinderPlace',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80840879227075, lng: 24.013296140097147 },
      text: 'Кіндервіль дитячий центр розвитку і приватний садок',
    },
    {
      type: 'kinderPlace',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.807598436404945, lng: 24.01322741349342 },
      text: 'Дошкільний навчальний заклад №33',
    },
    {
      type: 'kinderPlace',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.82039663613052, lng: 24.006331380730256 },
      text: 'Творча студія розвитку " Розумник"',
    },
    {
      type: 'kinderPlace',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.809255912059, lng: 24.002925922736793 },
      text: 'Дитячий садок №134"',
    },
    {
      type: 'fun',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.807280747685745, lng: 24.018851983627844 },
      text: 'Країна Мрій Львів - Дитячий Розважальний Центр',
    },
    {
      type: 'fun',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80755800840956, lng: 23.97797432698685 },
      text: 'Вікторія Ґарденс',
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80949335344067, lng: 24.014965198151327 },
      text: 'Гуцульська гражда',
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.808820360810465, lng: 24.0178233693158 },
      text: 'De Luxe',
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80224602336298, lng: 24.01534886213048 },
      text: 'La Luce',
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.79975703855274, lng: 24.01574415951972 },
      text: 'Реберня на Стрийській',
    },
    {
      type: 'restaurant',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.79986628834607, lng: 24.01563551349343 },
      text: "П'яна Вишня",
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.810513279131584, lng: 24.01776437116447 },
      text: 'OKwine',
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80853933154622, lng: 24.018108843681436 },
      text: 'Близенько',
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.81158480699572, lng: 24.018709658470815 },
      text: 'Рукавичка',
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.79601006322462, lng: 24.021003241470567 },
      text: 'MIX маркет',
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.80461857394351, lng: 24.011458221154008 },
      text: 'АТБ-Маркет',
    },
    {
      type: 'food',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.8063321856515, lng: 24.019011321363372 },
      text: 'Сільпо',
    },
    {
      type: 'sport',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.8001369036204, lng: 24.034363077681935 },
      text: 'Бадмінтонні корти "Команчеро"',
    },
    {
      type: 'sport',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.81378343779163, lng: 24.01059655582237 },
      text: 'Стадіон Динамо',
    },
    {
      type: 'sport',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.79950003168633, lng: 24.02544123773553 },
      text: 'Фітнес клуб NRG FIT',
    },
    {
      type: 'hospital',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.810552079006705, lng: 24.011252842328947 },
      text: 'BabyOK сучасна педіатрія',
    },
    {
      type: 'hospital',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.8085653356328, lng: 24.016400259023538 },
      text: 'Аналізи Ескулаб (медична лабораторія)',
    },
    {
      type: 'hospital',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.81046840141895, lng: 24.037726159785606 },
      text: 'Аптека Пульс',
    },
    {
      type: 'hospital',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.816951181017664, lng: 24.021329855822376 },
      text: 'Bogomolets Clinic Lviv',
    },
    {
      type: 'nature',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.81002130992405, lng: 24.014352199999994 },
      text: 'Озеро "Цегольня"',
    },
    {
      type: 'nature',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.82316379497707, lng: 24.025002457671047 },
      text: 'Стрийський парк',
    },
    {
      type: 'nature',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.82015884808485, lng: 24.037471044177625 },
      text: 'парк "Залізна вода"',
    },
    {
      type: 'nature',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.81300021747385, lng: 24.004264955822375 },
      text: 'парк "Горіховий гай"',
    },
    {
      type: 'nature',
      icon: { url: markersAdresses.kinderPlace, scaledSize: defaultMarkerSize },
      position: { lat: 49.804130435547144, lng: 24.016226851838205 },
      text: 'парк "Богданівка"',
    },
  ];
}
