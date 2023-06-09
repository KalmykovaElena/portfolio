import fancy from '../assets/images/fancy-weather.png';
import fancy2 from '../assets/images/fancy-weather-2.png';
import quiz from '../assets/images/quiz.png';
import quiz2 from '../assets/images/quiz-2.png';
import todo from '../assets/images/todo.png';
import todo2 from '../assets/images/todo-2.png';
import store from '../assets/images/store.png';
import store2 from '../assets/images/store2.png';

export const data = [
  {
    name: 'Fancy weather',
    purpose: {
      ru: 'Приложение погоды',
      en: 'Weather app',
    },
    stack: 'React / Redux / SASS',
    github: 'https://github.com/KalmykovaElena/fancy-weather',
    description: {
      ru: 'Приложение отображает погоду на ближайшие четыре дня для искомого населенного пункта либо для текущего местоположения пользователя. Населенный пункт, для которого осуществляется поиск, отображается на карте. В приложении есть возможность смены языка и единиц измерения температуры, а также смены фонового изображения.',
      en: "The application displays the weather for the next four days for the desired locality or for the user's current location. The locality for which the search is being performed is displayed on the map. The application has the ability to change the language and temperature measurement units, as well as change the background image.",
    },
    img1: fancy,
    img2: fancy2,
    deploy:'https://kalmykovaelena.github.io/fancy-weather/'
  },
  {
    name: 'SongBird',
    purpose: {
        ru: 'Приложение-викторина для распознавания птиц по их голосам',
        en: 'A quiz app for recognizing birds by their voices',
      },
    stack: 'JS / HTML / SASS',
    github: 'https://github.com/KalmykovaElena/song-bird-quiz',
    description: {
        ru: 'В блоке с вопросом случайным образом выбирается птица, пользователю предлагается угадать ее по голосу. Баллы начисляются в зависимости от количества попыток дать правильный ответ. После последнего вопроса выводится страница с результатами игры. До игры у пользователя есть возможность ознакомиться со всеми птицами, их голосами, изображениями и описанием.',
        en: "In the block with the question, a bird is randomly selected, the user is asked to guess it by voice. Points are awarded depending on the number of attempts to give the correct answer. After the last question, a page with the results of the game is displayed. Before the game, the user has the opportunity to get acquainted with all the birds, their voices, images and descriptions.",
      },
    img1: quiz,
    img2: quiz2,
    deploy:'https://kalmykovaelena.github.io/song-bird-quiz/'
  },
  {
    name: 'ToDo List',
    purpose: {
        ru: 'Приложение для создания списка дел',
        en: 'Planning Application',
      },
    stack: 'React / Redux / SASS',
    github: 'https://github.com/KalmykovaElena/Organizer',
    description: {
        ru: 'Приложение позволяет добавлять, удалять задачи, помечать важные и выполненные пункты. Просматривать задачи можно как полным списком, так и отдельно выполненные, важные и находящиеся в работе. Кроме того есть возможность поиска по списку задач.',
        en: "The application allows you to add, delete tasks, mark important and completed items. You can view the tasks as a complete list, or separately completed, important and in progress. In addition, it is possible to search through the list of tasks.",
      },
    img1:todo ,
    img2: todo2,
    deploy:'https://kalmykovaelena.github.io/Organizer/'
  },
  {
    name: 'OnlineStore',
    purpose: {
        ru: 'Ювелирный онлайн магазин',
        en: 'Jewelry Online Store',
      },
    stack: 'TypeScript/ SASS',
    github: 'https://github.com/KalmykovaElena/online-store',
    description: {
        ru: 'Интернет-магазин',
        en: "Online store",
      },
    img1:store ,
    img2: store2,
    deploy:'https://kalmykovaelena.github.io/online-store/'
  },
];
