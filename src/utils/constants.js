import image1 from "../images/quiz/quiz-1.png";
import image2 from "../images/quiz/quiz-2.png";
import image3 from "../images/quiz/quiz-3.png";
import image4 from "../images/quiz/quiz-4.png";
import image5 from "../images/quiz/quiz-5.png";

export const questions = [
  {
    text: "Я могу проверять работы студентов и оценивать их.",
    image: image1,
    counterAdd: "reviewer",
  },
  {
    text: "Я могу проводить вебинары 2 раза в месяц.",
    image: image2,
    counterAdd: "mentor",
  },
  {
    text: "Я могу часто общаться со студентами и мотивировать их.",
    image: image3,
    counterAdd: "mentor",
  },
  {
    text: "Я могу объяснять студентам их ошибки простым языком.",
    image: image4,
    counterAdd: "reviewer",
  },
  {
    text: "Я работаю в IT-сфере больше 2х лет.",
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
