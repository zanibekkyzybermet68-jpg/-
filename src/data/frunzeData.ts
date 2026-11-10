export interface MenuItem {
  id: string;
  name: string;
  category: 'Национальная кухня' | 'Стейки и гриль' | 'Супы и салаты' | 'Десерты' | 'Авторские коктейли';
  isPopular?: boolean;
  mustEatTag?: string;
  priceSom: number;
  weight: string;
  description: string;
  ingredients: string;
  pairingNote: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  badge: string;
  reviewCount: number;
  photoCount: number;
  timeAgo: string;
  rating: number;
  originalLang: 'en' | 'ru';
  text: string;
  translatedText?: string;
  mediaBadges?: string[];
  likes: number;
  diningMode: string;
  pricePerPerson?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Недавние' | 'Меню' | 'Еда и напитки' | 'Атмосфера' | 'Стейк' | 'От владельца';
  timeAgo: string;
  author: string;
  image: string;
  aspect: 'landscape' | 'standard';
}

export interface SimilarPlace {
  id: string;
  name: string;
  rating: string;
  reviewsCount: string;
  category: string;
  distance: string;
  avgCheck: string;
  highlight: string;
}

export const IMAGES = {
  heroInterior: '/src/assets/images/hero_frunze_interior_1794292010390.jpg',
  appleDessert: '/src/assets/images/dish_apple_dessert_1794292012247.jpg',
  ribeyeSteak: '/src/assets/images/dish_ribeye_steak_1794292013998.jpg',
  beshbarmakShorpo: '/src/assets/images/dish_beshbarmak_shorpo_1794292015073.jpg',
  terraceCocktails: '/src/assets/images/atmosphere_terrace_cocktails_1794292016864.jpg',
};

export const RESTAURANT_INFO = {
  name: 'Ресторан Фрунзе',
  rating: '4,6',
  totalReviews: '1 867',
  priceRange: '2 000–5 000 ⃀',
  pricePerPersonNote: '2 000–5 000 ⃀ за человека · Информация от 40 человек',
  category: 'Ресторан высокой кыргызской и европейской кухни',
  address: 'Американский Университет в Центральной Азии, 205 ул. Абдумомунова, Бишкек 720040',
  shortAddress: 'ул. Абдумомунова, 205, Бишкек',
  hoursStatus: 'Открыто · Закроется в 00:00',
  website: 'kaynar.kg',
  phone: '0551 664 466',
  plusCode: 'VJH4+HQ Бишкек',
  serviceModes: ['Еда в заведении', 'Еда навынос', 'Доставка'],
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'apple-dessert',
    name: 'Десерт Яблоко',
    category: 'Десерты',
    isPopular: true,
    mustEatTag: 'Популярно · must eat',
    priceSom: 690,
    weight: '190 г',
    description:
      'Знаковый авторский десерт ресторана «Фрунзе» в форме наливного иссык-кульского яблока в зеркальной глазури с муссом из белого шоколада и пряным яблочным конфи внутри.',
    ingredients: 'Иссык-кульское зеленое яблоко, ванильный мусс, корица, крамбл из фундука, сусальное золото',
    pairingNote: 'Рекомендуем с горным травяным чаем с чабрецом или эспрессо',
    image: IMAGES.appleDessert,
  },
  {
    id: 'ribeye-steak',
    name: 'Рибай Стейк',
    category: 'Стейки и гриль',
    isPopular: true,
    mustEatTag: 'Популярно · выбор гостей',
    priceSom: 2950,
    weight: '350 г',
    description:
      'Сочный стейк из мраморной говядины зернового откорма 28 дней сухого вызревания. Обжаривается на открытом огне в хоспере с веточкой розмарина и печеным чесноком.',
    ingredients: 'Мраморная говядина Prime, розовая гималайская соль, розмарин, печеный чеснок, перечный соус демиглас',
    pairingNote: 'Рекомендуемая прожарка Medium Rare · Подается на разогретом каменном плато',
    image: IMAGES.ribeyeSteak,
  },
  {
    id: 'beshbarmak',
    name: 'Бешбармак',
    category: 'Национальная кухня',
    isPopular: true,
    priceSom: 1480,
    weight: '420 г',
    description:
      'Традиционное главное блюдо кыргызского гостеприимства в высокой ресторанной подаче: тончайшее раскатанное вручную тесто, томленая баранина и говядина в пряном луковом бульоне чык.',
    ingredients: 'Томленая мякоть баранины, говядина, домашний камыр, репчатый лук, пиала наваристого бульона',
    pairingNote: 'Классическая рецептура с подачей бульона в керамической пиале',
    image: IMAGES.beshbarmakShorpo,
  },
  {
    id: 'shorpo-frunze',
    name: 'Фирменный Шорпо Фрунзе',
    category: 'Супы и салаты',
    isPopular: true,
    priceSom: 780,
    weight: '380 мл',
    description:
      'Прозрачный янтарный бульон из молодой горной баранины на косточке, томленый на медленном огне 6 часов с крупными соцветиями овощей и свежей кинзой.',
    ingredients: 'Корейка молодой баранины, горный картофель, морковь, болгарский перец, свежая зелень',
    pairingNote: 'Подается с горячими слоеными боорсоками и домашней сметаной',
    image: IMAGES.beshbarmakShorpo,
  },
  {
    id: 'tbone-steak',
    name: 'Стейк Т-bone',
    category: 'Стейки и гриль',
    isPopular: true,
    priceSom: 3200,
    weight: '420 г',
    description:
      'Премиальный стейк на Т-образной кости, объединяющий два вида мяса: нежнейшую вырезку филе-миньон и насыщенный стриплойн с карамельной корочкой.',
    ingredients: 'Выдержанная говядина на кости, сливочное масло с тимьяном, морская соль крупного помола',
    pairingNote: 'Идеален для ужина в Дипломатическом зале под выдержанное красное вино',
    image: IMAGES.ribeyeSteak,
  },
  {
    id: 'kuurdak-potato',
    name: 'Куурдак С Картошкой',
    category: 'Национальная кухня',
    isPopular: false,
    priceSom: 1390,
    weight: '380 г',
    description:
      'Румяное жаркое по кочевому рецепту: обжаренная до золотистой корочки мякоть молодого барашка с молодым картофелем, кольцами белого лука и горной зирой.',
    ingredients: 'Мякоть баранины, молодой картофель, белый лук, зира, кориандр, свежемолотый черный перец',
    pairingNote: 'Подается на горячей чугунной сковороде со свежим тонким лавашом',
    image: IMAGES.beshbarmakShorpo,
  },
  {
    id: 'bishparmak-royal',
    name: 'Бишпармак',
    category: 'Национальная кухня',
    isPopular: false,
    priceSom: 1650,
    weight: '450 г',
    description:
      'Праздничная ханская интерпретация бишпармака с деликатесной кониной, домашним чучуком (казы), тонко нарезанным тестом и ароматным бульоном с зеленью.',
    ingredients: 'Отварная конина, деликатесный чучук, тесто ручной раскатки, бульон чык, зеленый лук',
    pairingNote: 'Фирменный специалитет для торжественных приемов и зарубежных гостей',
    image: IMAGES.beshbarmakShorpo,
  },
  {
    id: 'lemon-sorbet',
    name: 'Сорбет Лимонный',
    category: 'Десерты',
    isPopular: false,
    priceSom: 420,
    weight: '150 г',
    description:
      'Освежающий ремесленный сорбет из сицилийских и ферганских лимонов с легкой горчинкой цедры и листочком горной мяты.',
    ingredients: 'Свежевыжатый сок лимона, цедра лайма, тростниковый сироп, свежая мята',
    pairingNote: 'Прекрасный дижестив после мясных блюд и стейков',
    image: IMAGES.appleDessert,
  },
  {
    id: 'borscht',
    name: 'Борщ',
    category: 'Супы и салаты',
    isPopular: false,
    priceSom: 680,
    weight: '380 мл',
    description:
      'Насыщенный рубиновый борщ на говяжьей грудинке с запеченной свеклой, подается с теплыми чесночными пампушками, фермерской сметаной и зеленым луком.',
    ingredients: 'Говяжья грудинка, запеченная свекла, капуста, томаты, пампушки с чесночным маслом, сметана',
    pairingNote: 'Домашняя классика в элегантном исполнении',
    image: IMAGES.beshbarmakShorpo,
  },
  {
    id: 'caesar-chicken',
    name: 'Салат Цезарь С Курицей',
    category: 'Супы и салаты',
    isPopular: false,
    priceSom: 840,
    weight: '260 г',
    description:
      'Хрустящие листья салата ромэн с обжаренным на гриле фермерским цыпленком, перепелиными яйцами, томатами черри, крутонами из бриоши и выдержанным пармезаном.',
    ingredients: 'Филе цыпленка гриль, салат ромэн, соус Цезарь с анчоусами, пармезан 24 мес., томаты черри',
    pairingNote: 'Соус готовится вручную каждое утро шеф-поваром холодного цеха',
    image: IMAGES.terraceCocktails,
  },
  {
    id: 'cutlets',
    name: 'Котлеты',
    category: 'Стейки и гриль',
    isPopular: false,
    priceSom: 920,
    weight: '290 г',
    description:
      'Сочные рубленые котлеты из телятины и индейки с воздушным картофельным пюре на взбитых сливках и соусом из белых лесных грибов.',
    ingredients: 'Фермерская телятина, филе индейки, картофельное пюре со сливками, соус из белых грибов',
    pairingNote: 'Мягкий сливочный вкус, любимое блюдо семейных обедов',
    image: IMAGES.ribeyeSteak,
  },
  {
    id: 'terrace-cocktail',
    name: 'Локальный коктейль «Тянь-Шань Ботаникал»',
    category: 'Авторские коктейли',
    isPopular: false,
    priceSom: 650,
    weight: '250 мл',
    description:
      'Авторский коктейль бар-менеджера «Фрунзе» на основе горного можжевельника, облепихи, иссык-кульского барбариса и дикого чабреца.',
    ingredients: 'Джин на горных травах, кордиал из облепихи и барбариса, сухой тоник, веточка розмарина',
    pairingNote: 'Идеален для вечернего отдыха на зеленой летней террасе без шума машин',
    image: IMAGES.terraceCocktails,
  },
];

export const POPULAR_TIMES_BY_DAY: Record<
  string,
  {
    label: string;
    currentStatus: string;
    peakNote: string;
    hours: { hour: number; label: string; value: number; note: string }[];
  }
> = {
  Вт: {
    label: 'по вторникам',
    currentStatus: 'Сейчас: Невысокая загруженность',
    peakNote: 'Обычно свободные столики без ожидания с 11:00 до 18:00',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 42, note: 'Деловые обеды · Умеренно' },
      { hour: 15, label: '15', value: 28, note: 'Невысокая загруженность' },
      { hour: 18, label: '18', value: 64, note: 'Вечерняя посадка · Живая музыка' },
      { hour: 21, label: '21', value: 35, note: 'Сейчас: Невысокая загруженность' },
    ],
  },
  Пн: {
    label: 'по понедельникам',
    currentStatus: 'Спокойная атмосфера в течение дня',
    peakNote: 'Комфортное время для деловых встреч в Дипломатическом зале',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 38, note: 'Деловые обеды' },
      { hour: 15, label: '15', value: 24, note: 'Много свободных мест' },
      { hour: 18, label: '18', value: 52, note: 'Умеренная посадка' },
      { hour: 21, label: '21', value: 30, note: 'Спокойный вечер' },
    ],
  },
  Ср: {
    label: 'по средам',
    currentStatus: 'Средняя загруженность вечером',
    peakNote: 'С 19:00 играет традиционная кыргызская инструментальная музыка',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 48, note: 'Обеденное время' },
      { hour: 15, label: '15', value: 32, note: 'Спокойные часы' },
      { hour: 18, label: '18', value: 72, note: 'Популярное время ужина' },
      { hour: 21, label: '21', value: 46, note: 'Комфортная посадка' },
    ],
  },
  Чт: {
    label: 'по четвергам',
    currentStatus: 'Повышенный спрос после 18:30',
    peakNote: 'Рекомендуем предварительное бронирование столиков на террасе',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 54, note: 'Деловые ланчи' },
      { hour: 15, label: '15', value: 36, note: 'Невысокая загруженность' },
      { hour: 18, label: '18', value: 80, note: 'Высокая загруженность' },
      { hour: 21, label: '21', value: 58, note: 'Вечерняя атмосфера' },
    ],
  },
  Пт: {
    label: 'по пятницам',
    currentStatus: 'Высокая загруженность вечером',
    peakNote: 'Пиковые часы с 18:30 до 22:00 · Обязательна бронь',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 62, note: 'Активные обеды' },
      { hour: 15, label: '15', value: 44, note: 'Дневная посадка' },
      { hour: 18, label: '18', value: 94, note: 'Аншлаг · Живая музыка' },
      { hour: 21, label: '21', value: 86, note: 'Полная посадка на террасе' },
    ],
  },
  Сб: {
    label: 'по субботам',
    currentStatus: 'Семейные обеды и торжественные ужины',
    peakNote: 'Высокая посещаемость с 14:00 до 22:30',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 58, note: 'Семейные бранчи' },
      { hour: 15, label: '15', value: 68, note: 'Популярное дневное время' },
      { hour: 18, label: '18', value: 96, note: 'Максимальная загруженность' },
      { hour: 21, label: '21', value: 82, note: 'Вечерняя программа' },
    ],
  },
  Вс: {
    label: 'по воскресеньям',
    currentStatus: 'Уютные семейные встречи',
    peakNote: 'Спокойный вечер после 20:00',
    hours: [
      { hour: 6, label: '6', value: 0, note: 'Закрыто' },
      { hour: 9, label: '9', value: 0, note: 'Подготовка зала' },
      { hour: 12, label: '12', value: 52, note: 'Воскресный обед' },
      { hour: 15, label: '15', value: 64, note: 'Семейная посадка' },
      { hour: 18, label: '18', value: 76, note: 'Вечерний ужин' },
      { hour: 21, label: '21', value: 40, note: 'Невысокая загруженность' },
    ],
  },
};

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-everest',
    author: 'Everest to Everywhere',
    badge: 'Местный эксперт · 21 отзыв · 179 фото',
    reviewCount: 21,
    photoCount: 179,
    timeAgo: '3 месяца назад',
    rating: 5,
    originalLang: 'en',
    text: 'One of the oldest restaurants in Bishkek — such a special night! My brother invited us for dinner, and we enjoyed beautiful traditional Kyrgyz music. The atmosphere was amazing, and we were even seated in the area where diplomats and heads of delegations dine. The Beshbarmak and Apple Dessert were unforgettable.',
    translatedText:
      'Один из старейших и самых статусных ресторанов Бишкека — какой особенный вечер! Мой брат пригласил нас на ужин, и мы наслаждались прекрасной традиционной кыргызской музыкой. Атмосфера была потрясающей, нас даже посадили в зале, где обычно ужинают дипломаты и главы делегаций. Бешбармак и Десерт Яблоко оказались незабываемыми.',
    mediaBadges: ['Видео 0:12', 'Видео 0:09', 'Видео 0:06', '+5 фото'],
    likes: 18,
    diningMode: 'Еда в заведении · Ужин',
    pricePerPerson: '3 500 ⃀',
  },
  {
    id: 'rev-axel',
    author: 'Axel Heinz',
    badge: 'Местный эксперт · 100 отзывов · 363 фото',
    reviewCount: 100,
    photoCount: 363,
    timeAgo: '2 месяца назад',
    rating: 5,
    originalLang: 'en',
    text: 'Really nice to sit outside on the lovely terrace, lush air, music, no cars. Food is quite good, a bit pricey, but the ambience is really pleasant. They serve local food with an international twist. I also enjoyed the local cocktails which are really surprising.',
    translatedText:
      'Очень приятно посидеть на открытом воздухе на прекрасной террасе: свежий воздух в зелени, музыка, никаких машин. Еда очень достойная, цены выше среднего, но атмосфера исключительно приятная. Здесь подают блюда национальной кухни в современной международной интерпретации. Мне также очень понравились местные авторские коктейли — они действительно удивляют.',
    mediaBadges: ['Видео 0:14', '+11 фото'],
    likes: 14,
    diningMode: 'Еда в заведении · Летняя терраса',
    pricePerPerson: '4 000 ⃀',
  },
  {
    id: 'rev-boreal',
    author: 'Boreal Mind',
    badge: 'Местный эксперт · 195 отзывов · 161 фото',
    reviewCount: 195,
    photoCount: 161,
    timeAgo: 'месяц назад',
    rating: 4,
    originalLang: 'ru',
    text: 'Очень красивый интерьер и обслуживание. Вижу много разных комментариев про еду, не могу сказать про всё меню, заказал только одно блюдо, НО — то что мне в чек включили 150 сом за две ложки уксуса, был в шоке конечно, учитывая что и без этого цены очень высокие. В остальном зал и подача на высоте.',
    likes: 9,
    diningMode: 'Еда в заведении · Обед',
    pricePerPerson: '2 500 ⃀',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Дипломатический зал и панорама вечернего Бишкека',
    subtitle: 'Высокие своды из ореха, национальный орнамент и живая музыка',
    category: 'Атмосфера',
    timeAgo: '28 дней назад',
    author: 'От владельца · Kaynar Group',
    image: IMAGES.heroInterior,
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Десерт Яблоко — must eat',
    subtitle: 'Мусс из белого шоколада, пряная начинка из иссык-кульских яблок и сусальное золото',
    category: 'Еда и напитки',
    timeAgo: '3 года назад · Выбор посетителей',
    author: 'Новые фото от посетителей',
    image: IMAGES.appleDessert,
    aspect: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Рибай Стейк и Стейк Т-bone на каменном плато',
    subtitle: 'Мраморная говядина сухого вызревания с печеным чесноком и розмарином',
    category: 'Стейк',
    timeAgo: '14 дней назад',
    author: 'Шеф-повар гриль-цеха',
    image: IMAGES.ribeyeSteak,
    aspect: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Бешбармак и Фирменный Шорпо Фрунзе',
    subtitle: 'Традиционная кыргызская классика в авторской керамике ручной работы',
    category: 'Меню',
    timeAgo: '28 дней назад',
    author: 'Everest to Everywhere',
    image: IMAGES.beshbarmakShorpo,
    aspect: 'standard',
  },
  {
    id: 'gal-5',
    title: 'Летняя терраса в зелени и авторские коктейли',
    subtitle: 'Тихий оазис в центре города без шума машин с ботаническими коктейлями',
    category: 'От владельца',
    timeAgo: '2 месяца назад',
    author: 'Axel Heinz',
    image: IMAGES.terraceCocktails,
    aspect: 'standard',
  },
];

export const SIMILAR_PLACES: SimilarPlace[] = [
  {
    id: 'sim-faiza',
    name: 'Фаиза',
    rating: '4,5',
    reviewsCount: '6 887',
    category: 'Ресторан национальной кухни',
    distance: '1,4 км от Фрунзе',
    avgCheck: '600–1 200 ⃀',
    highlight: 'Легендарное городское кафе с домашними мантами, лагманом и пельменями.',
  },
  {
    id: 'sim-zerno',
    name: 'ZERNO',
    rating: '4,3',
    reviewsCount: '397',
    category: 'Ресторан авторской кухни',
    distance: '950 м от Фрунзе',
    avgCheck: '1 800–3 500 ⃀',
    highlight: 'Современная гастрономия, ремесленный хлеб на закваске и винная карта.',
  },
  {
    id: 'sim-frunze-chinese',
    name: 'Фрунзе (Китайская кухня)',
    rating: '4,2',
    reviewsCount: '613',
    category: 'Китайская кухня',
    distance: '2,1 км',
    avgCheck: '1 200–2 500 ⃀',
    highlight: 'Традиционные блюда сычуаньской и пекинской кухни для больших компаний.',
  },
  {
    id: 'sim-lesnoy',
    name: 'Cafe-bar "Lesnoy"',
    rating: '4,8',
    reviewsCount: '502',
    category: 'Ресторан',
    distance: '1,8 км от Фрунзе',
    avgCheck: '1 500–3 000 ⃀',
    highlight: 'Уютная лесная атмосфера, блюда на мангале и согревающие напитки.',
  },
  {
    id: 'sim-nonstop',
    name: 'Non-Stop Cafe 老王飯店',
    rating: '5,0',
    reviewsCount: '1',
    category: 'Ресторан',
    distance: '1,6 км от Фрунзе',
    avgCheck: '1 000–2 200 ⃀',
    highlight: 'Круглосуточное заведение с аутентичной восточной лапшой и закусками.',
  },
];
