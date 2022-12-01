import image1 from "../images/quiz/quiz-1.png";
import image2 from "../images/quiz/quiz-2.png";
import image3 from "../images/quiz/quiz-3.png";
import image4 from "../images/quiz/quiz-4.png";
import image5 from "../images/quiz/quiz-5.png";

export const questions = [
  {
    text: "Я хочу проверять работы студентов и оценивать их",
    description: "в течение 48 часов с момента сдачи работы в формате зачёт/незачёт.",
    image: image1,
    counterAdd: "reviewer",
  },
  {
    text: "Я хочу проводить вебинары 2 раза в месяц",
    description: "продолжительностью от 1,5 до 2,5 часов каждый.",
    image: image2,
    counterAdd: "mentor",
  },
  {
    text: "Я хочу часто общаться со студентами и мотивировать их",
    description: "справляться с трудностями во время обучения и спокойно относиться к своим ошибкам.",
    image: image3,
    counterAdd: "mentor",
  },
  {
    text: "Я хочу объяснять студентам их ошибки простым языком",
    description: "чтобы их обучение проходило легче.",
    image: image4,
    counterAdd: "reviewer",
  },
  {
    text: "Я работаю в IT-сфере больше 2х лет",
    description: "и накопил много полезного опыта.",
    image: image5,
    counterAdd: "mentor",
  },
];

export const mentorDescription =
  "Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. \n" +
  "Каждый наставник курирует группу численностью от 60 студентов. \n" +
  "Общается с ними в Slack, проводит групповые и индивидуальные звонки на протяжении 9 месяцев обучения.";

export const reviewerDescription =
  "Студенты учатся с помощью онлайн-тренажера, \n" +
  "а также выполняют самостоятельные работы, которые проверяет, оценивает и комментирует команда специалистов. " +
  "Ревьюера проверяет задания студента и даёт обратную связь. Именно ревьюер решает: зачесть задание или нет. Также\n" +
  " он даёт советы по улучшению задания, отмечает неточности, указывает на ошибки.";

export const vacanciesList = [
  {
    role: 'Наставник',
    course: 'Курс «Миддл-фронтенд разработчик»',
    faculty: 'Программирование',
    sаlary: '~ 45 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Ревьюер',
    course: 'Курс «Python‑разработчик» (резерв)',
    faculty: 'Программирование',
    sаlary: '~ 35 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 2-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Ревьюер',
    course: 'Курс «Дизайнер интерфейсов»',
    faculty: 'Дизайн',
    sаlary: '~ 40 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 1-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Go-разработчик»',
    faculty: 'Программирование',
    sаlary: '~ 55 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «DevOps»',
    faculty: 'Программирование',
    sаlary: '~ 50 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Алгоритмы для разработчиков»',
    faculty: 'Анализ данных',
    sаlary: '~ 40 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Миддл-фронтенд разработчик»',
    faculty: 'Программирование',
    sаlary: '~ 45 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Ревьюер',
    course: 'Курс «Python‑разработчик» (резерв)',
    faculty: 'Программирование',
    sаlary: '~ 35 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Ревьюер',
    course: 'Курс «Дизайнер интерфейсов»',
    faculty: 'Дизайн',
    sаlary: '~ 40 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Go-разработчик»',
    faculty: 'Программирование',
    sаlary: '~ 55 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «DevOps»',
    faculty: 'Программирование',
    sаlary: '~ 50 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Алгоритмы для разработчиков»',
    faculty: 'Анализ данных',
    sаlary: '~ 40 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
  {
    role: 'Наставник',
    course: 'Курс «Алгоритмы для разработчиков»',
    faculty: 'Анализ данных',
    sаlary: '~ 40 тыс. рублей в месяц',
    requirements: [
      'Опыт бэкенд-разработки на Python от 3-х лет.',
      'Владеете Django и другими фреймворками, знаете ООП, базовые алгоритмы и структуры данных.',
      'Работали с GIT, СУБД SQL, Docker.',
      'Готовы посвящать проекту от 10 часов в неделю.',
    ],
    link: '#',
  },
]

export const faculties = [
    {
      name:'Дизайн',
      description: "Направление подойдёт как новичкам, так и практикующим профессионалам — у нас обучаются дизайнеры, UX-писатели и UX-исследователи. Учим работать с композицией, цветом, типографикой, текстом, исследованиями так, чтобы приносить пользу и пользователям, и бизнесу. Процесс строится на постоянной практике: реальные проекты или максимально приближённые к ним учебные задачи, ТЗ, дедлайны и развёрнутая обратная связь от специалистов.",
      link: 'https://practicum.yandex.ru/catalog/design/',
  },
  {
      name:'Программирование',
      description: "Направление для всех, кто хочет развиваться в сфере программирования вне зависимости от прошлого опыта. Учим разработке и тестированию в условиях, которые имитируют реальную работу: с проектами, спринтами и дедлайнами. Мы за честный взгляд на программирование: без клише и ложных ожиданий.",
      link: 'https://practicum.yandex.ru/catalog/programming/',
  },
  {
      name:'Анализ данных',
      description: "Курсы по анализу данных подойдут всем, кому интересно работать с цифрами и аналитикой. В эту область входят несколько направлений: предобработка и анализ, Data Science и Data Engineering, хранение и управление данными. Вы можете освоить новую специальность с нуля или углубить знания в сфере работы с данными.",
      link: 'https://practicum.yandex.ru/catalog/data-analysis/',
  },
  {
      name:'Маркетинг',
      description: "Направление для всех, кто хочет учиться маркетингу в интернете. На курсах мы учим запускать рекламу и управлять рекламными кампаниями. Знакомим с анализом бренда, рассказываем про seo-оптимизацию и email-маркетинг, обучаем на реальных примерах из бизнеса. В процессе вас поддержат наставники, кураторы и ревьюеры — практикующие специалисты с большим опытом работы в сфере.",
      link: 'https://practicum.yandex.ru/catalog/marketing/',
  },
  {
      name:'Менеджмент',
      description: "Направление для тех, кто начинает или продолжает свой путь в сфере управления — людьми, проектами, продуктами, ресурсами. В обучении мы используем проблемно-ориентированный подход, силу данных и научно обоснованные методики. Курсы позволяют устроиться на работу в IT сразу после окончания учёбы или получить новые навыки для развития в текущей профессии.",
      link: 'https://practicum.yandex.ru/catalog/management/',
  },
  {
      name:'Английский язык',
      description: "Занятия для тех, кто хочет выучить английский для работы и жизни: мы учим применять язык, а не просто объясняем теорию. Здесь вас ждут опытные преподаватели из 37 стран, много разговорной практики и современные образовательные технологии. Можно начать с нуля или продолжить с любого другого уровня.",
      link: 'https://practicum.yandex.ru/catalog/eng/',
  }
]

