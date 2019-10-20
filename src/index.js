import { domInhit } from "./modules/dom.js";
import { eatPage } from "./modules/eat.js";
import { visitPage } from "./modules/visit.js";

setMainPage();


function setMainPage() {
  domInhit();
  setEvents();


  function setEvents() {
    let midEat = document.querySelector(".eat");
    midEat.addEventListener("mouseenter", () => {
      document.body.classList = "hover-eat";
    });
    midEat.addEventListener("mouseleave", () => {
      document.body.classList = "";
    });
    midEat.addEventListener("click", eatPage);

    let midDrink = document.querySelector(".drink");
    midDrink.addEventListener("mouseenter", () => {
      document.body.classList = "hover-drink";
    });
    midDrink.addEventListener("mouseleave", () => {
      document.body.classList = "";
    });

    let midVisit = document.querySelector(".visit");
    midVisit.addEventListener("mouseenter", () => {
      document.body.classList = "hover-visit";
    });
    midVisit.addEventListener("mouseleave", () => {
      document.body.classList = "";
    });
    midVisit.addEventListener("click", visitPage);
  }
}
export {setMainPage};