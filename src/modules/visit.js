import { eatPage } from "./eat.js";
import { setMainPage } from "../index.js";

function visitPage() {
  let container = document.querySelector(".container");
  container.removeChild(container.children[1]); // the 0 child is allways the h1
  document.body.classList = "white";

  let visitContainer = document.createElement("div");
  visitContainer.classList = "secondPage";

  let header = document.querySelector("h1");
  header.classList = "clicked";
 
  header.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    setMainPage();
  });


  let visit = document.createElement("h3");
  visit.innerText = "-VISIT US-";
  visitContainer.appendChild(visit);

  let em = document.createElement("em");
  em.innerText = "Location";
  visitContainer.appendChild(em);

  let adress = document.createElement("p");
  adress.innerText = "Tchelet 25, Modiin , Israel";
  visitContainer.appendChild(adress);

  let btn = document.createElement("button");
  btn.innerText = "Our menu ";
  btn.addEventListener("click", eatPage);
  visitContainer.appendChild(btn);

  container.appendChild(visitContainer);
}
export { visitPage };
