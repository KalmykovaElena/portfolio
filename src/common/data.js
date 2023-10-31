import vf from "../assets/images/vf.png";
import vf2 from "../assets/images/vf-2.png";
import vf3 from "../assets/images/vf-3.png";
import vf4 from "../assets/images/vf-4.png";
import vf5 from "../assets/images/vf-5.png";
import vf6 from "../assets/images/vf-6.png";
import vf7 from "../assets/images/vf-7.png";
import vf8 from "../assets/images/vf-8.png";
import fancy from "../assets/images/fancy-weather.png";
import fancy2 from "../assets/images/fancy-weather-2.png";
import quiz from "../assets/images/quiz.png";
import quiz2 from "../assets/images/quiz-2.png";
import quiz3 from "../assets/images/quiz3.png";
import quiz4 from "../assets/images/quiz4.png";
import todo from "../assets/images/todo.png";
import todo2 from "../assets/images/todo-2.png";
import store from "../assets/images/store.png";
import store2 from "../assets/images/store2.png";
import store3 from "../assets/images/store3.png";

export const data = [
  {
    name: "VitFor",
    purpose: {
      ru: "Городской форум",
      en: "City Forum",
    },
    stack: "React / Redux / TypeScript / SASS",
    github: "https://github.com/KalmykovaElena/vitfor",
    description: {
      ru: "Платформа, созданная с целью продвижения культурной жизни города в интернет пространстве. Здесь можно общаться, узнавать факты из жизни города, найти забытые вещи, продать либо выбрать нужные услуги и товары, вдохновляться на прогулки и путешествия. ",
      en: "The platform created to promote the cultural life of the city in the Internet space. Here you can communicate, learn facts from the life of the city, find forgotten things, sell or choose the necessary services and goods, be inspired to walk and travel.",
    },
    images: [vf, vf2, vf3, vf4, vf5, vf6, vf7, vf8],
    deploy: "https://vitforproject.netlify.app",
  },
  {
    name: "Fancy weather",
    purpose: {
      ru: "Приложение погоды",
      en: "Weather app",
    },
    stack: "React / Redux / SASS",
    github: "https://github.com/KalmykovaElena/fancy-weather",
    description: {
      ru: "Приложение отображает погоду на ближайшие четыре дня для искомого населенного пункта либо для текущего местоположения пользователя. Населенный пункт, для которого осуществляется поиск, отображается на карте. В приложении есть возможность смены языка и единиц измерения температуры, а также смены фонового изображения.",
      en: "The application displays the weather for the next four days for the desired locality or for the user's current location. The locality for which the search is being performed is displayed on the map. The application has the ability to change the language and temperature measurement units, as well as change the background image.",
    },
    images: [fancy, fancy2],
    deploy: "https://kalmykovaelena.github.io/fancy-weather/",
  },
  {
    name: "SongBird",
    purpose: {
      ru: "Приложение-викторина для распознавания птиц по их голосам",
      en: "A quiz app for recognizing birds by their voices",
    },
    stack: "JS / HTML / SASS",
    github: "https://github.com/KalmykovaElena/song-bird-quiz",
    description: {
      ru: "В блоке с вопросом случайным образом выбирается птица, пользователю предлагается угадать ее по голосу. Баллы начисляются в зависимости от количества попыток дать правильный ответ. После последнего вопроса выводится страница с результатами игры. До игры у пользователя есть возможность ознакомиться со всеми птицами, их голосами, изображениями и описанием.",
      en: "In the block with the question, a bird is randomly selected, the user is asked to guess it by voice. Points are awarded depending on the number of attempts to give the correct answer. After the last question, a page with the results of the game is displayed. Before the game, the user has the opportunity to get acquainted with all the birds, their voices, images and descriptions.",
    },
    images: [quiz, quiz2, quiz3, quiz4],
    deploy: "https://kalmykovaelena.github.io/song-bird-quiz/",
  },
  {
    name: "ToDo List",
    purpose: {
      ru: "Приложение для создания списка дел",
      en: "Planning Application",
    },
    stack: "React / Redux / SASS",
    github: "https://github.com/KalmykovaElena/Organizer",
    description: {
      ru: "Приложение позволяет добавлять, удалять задачи, помечать важные и выполненные пункты. Просматривать задачи можно как полным списком, так и отдельно выполненные, важные и находящиеся в работе. Кроме того есть возможность поиска по списку задач.",
      en: "The application allows you to add, delete tasks, mark important and completed items. You can view the tasks as a complete list, or separately completed, important and in progress. In addition, it is possible to search through the list of tasks.",
    },
    images: [todo, todo2],
    deploy: "https://kalmykovaelena.github.io/Organizer/",
  },
  {
    name: "OnlineStore",
    purpose: {
      ru: "Ювелирный онлайн магазин",
      en: "Jewelry Online Store",
    },
    stack: "TypeScript/ SASS",
    github: "https://github.com/KalmykovaElena/online-store",
    description: {
      ru: "Интернет-магазин",
      en: "Online store",
    },
    images: [store, store2, store3],
    deploy: "https://kalmykovaelena.github.io/online-store/",
  },
];
