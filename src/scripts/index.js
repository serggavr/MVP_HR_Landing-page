import css from "../pages/index.css";

console.log("run index.js");

const facultiesItems = document.querySelectorAll(".faculties__items");
const facultiesItem = document.querySelectorAll(".faculties__item");
const facultiesLink = document.querySelectorAll(".faculties__link");
const facultiesClose = document.querySelectorAll(".faculties__close");
const facultiesBox = document.querySelectorAll(".faculties__box-hidden")

// function openBox() {
//     console.log(facultiesItem.nextElementSibling);
//     facultiesItem.nextElementSibling.remove("faculties__box-hidden_active");
   
// }

// facultiesItem.forEach((item) => {
//     console.log(item)
//     item.addEventListener("click", function(){
//         this.nextElementSibling.remove("faculties__box-hidden_active");
//     });
//   });

facultiesLink.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      facultiesItem.forEach(function (item , i) {
        facultiesItems[i].classList.add('faculties__items_open');
        facultiesBox[i].classList.add('faculties__box-hidden_active')
        
      });
    });
  });

  facultiesClose.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      facultiesItem.forEach(function (item , i) {
        facultiesItem[i].classList.remove('faculties__items_open');
        facultiesBox[i].classList.remove('faculties__box-hidden_active')
      });
    });
  });