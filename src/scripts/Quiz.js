import {
  questions,
  mentorDescription,
  reviewerDescription,
} from "../utils/constants";
import mentorImage from "../images/quiz/mentor.png";
import reviewerImage from "../images/quiz/reviewer.png";

export default () => {
  const quizSection = document.querySelector(".quiz");
  const quizStart = quizSection.querySelector(".quiz__start");
  const quizReset = quizSection.querySelector(".quiz__reset");
  const quizVacancies = quizSection.querySelector(".quiz__vacancies");
  const yesButton = quizSection.querySelector(".quiz__yes");
  const noButton = quizSection.querySelector(".quiz__no");
  const stepCounter = quizSection.querySelector(".quiz__counter");
  const progressLine = quizSection.querySelector(".quiz__progress-line");
  const quizQuestion = quizSection.querySelector(".quiz__question");
  const quizFinalButtons = quizSection.querySelector(".quiz__buttons_transformed");
  const quizDescription = quizSection.querySelector(
    ".quiz__question-description"
  );
  const quizImage = quizSection.querySelector(".quiz__image");
  let step = 0;
  let mentorCount = 0;
  let reviewerCount = 0;


  const nextStep = () => {
    if (mentorCount !== 0 || reviewerCount !== 0) {
      step++;
    }
    if (step <= 4) {
      const currentQuestion = questions[step];
      stepCounter.textContent = step;
      quizQuestion.textContent = currentQuestion.text;
      quizDescription.textContent = currentQuestion.description;
      quizImage.src = currentQuestion.image;
      progressLine.style.width = `${stepCounter.textContent * 20}%`;
    } else {
      stepCounter.textContent = step;
      progressLine.style.width = `${stepCounter.textContent * 20}%`;
      showResult();
    }
  };

  const showResult = () => {
    if (mentorCount > reviewerCount) {
      quizImage.src = mentorImage;
      quizQuestion.textContent = "Рекомендуем роль наставника";
      quizDescription.textContent = mentorDescription;
    } else {
      quizImage.src = reviewerImage;
      quizQuestion.textContent = "Рекомендуем роль ревьюера";
      quizDescription.textContent = reviewerDescription;
    }

    yesButton.classList.remove("quiz__button-visible");
    noButton.classList.remove("quiz__button-visible");
    quizReset.classList.add("quiz__button-visible");
    quizVacancies.classList.add("quiz__button-visible");
    quizFinalButtons.classList.add("quiz__buttons_transformed_visible");
  };

  const start = () => {
    step = 0;
    mentorCount = 0;
    reviewerCount = 0;
    nextStep();
    quizStart.classList.remove("quiz__button-visible");
    yesButton.classList.add("quiz__button-visible");
    noButton.classList.add("quiz__button-visible");
  };

  const onYesClick = () => {
    questions[step].counterAdd === "reviewer"
      ? reviewerCount++
      : mentorCount++;
    nextStep();
  };

  const onNoClick = () => {
    questions[step].counterAdd === "mentor"
      ? reviewerCount++
      : mentorCount++;
    nextStep();
  };

  const resetQuiz = () => {
    quizReset.classList.remove("quiz__button-visible");
    quizVacancies.classList.remove("quiz__button-visible");
    quizFinalButtons.classList.remove("quiz__buttons_transformed_visible");
    quizDescription.textContent = "";
    start();
  };

  quizStart.addEventListener("click", start);
  yesButton.addEventListener("click", onYesClick);
  noButton.addEventListener("click", onNoClick);
  quizReset.addEventListener("click", resetQuiz);
};
