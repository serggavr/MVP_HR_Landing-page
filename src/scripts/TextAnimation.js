const profession = document.querySelector(".welcome__profession");
const professionList = [
  "разработке",
  "анализе данных",
  "маркетинге",
  "дизайне",
  "IT-профессии",
];

async function textAnimation() {
  for (let i = 0; i < professionList.length; i++) {
    profession.textContent = professionList[i];
    await new Promise((res) => setTimeout(res, 1000));
  }
}

export default textAnimation;
