import { visitPage } from "./visit.js";
import { setMainPage } from "../index.js";

function eatPage() {
  let container = document.querySelector(".container");
  container.removeChild(container.children[1]); // the 0 child is allways the h1
  document.body.classList = "white";

  let header = document.querySelector("h1");
  header.classList = "clicked";

  header.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    setMainPage();
  });

  let menuContainer = document.createElement("div");
  menuContainer.classList = "secondPage";

  let entrees = document.createElement("h3");
  entrees.innerText = "-ENTRÉES-";
  menuContainer.appendChild(entrees);

  let emFirst = document.createElement("em");
  emFirst.innerText = "Potenti nullam ac tortor vitae";
  menuContainer.appendChild(emFirst);

  let entree1 = document.createElement("p");
  let br = document.createElement("br");
  entree1.innerText = "—Horsdoeuvres—";
  entree1.appendChild(br);
  entree1.innerHTML += "Goat cheese crostini with fig-olive";
  entree1.appendChild(br);
  entree1.innerHTML += "$22";
  menuContainer.appendChild(entree1);

  let entree2 = document.createElement("p");

  entree2.innerText = "— Amuse-bouche — ";
  entree2.appendChild(br);
  entree2.innerHTML += "Sweet potato chips with goat cheese and caviar";
  entree2.appendChild(br);
  entree2.innerHTML += "$24";
  menuContainer.appendChild(entree2);

  let btn = document.createElement("button");
  btn.innerText = "Visit us ";
  btn.addEventListener("click", visitPage);
  menuContainer.appendChild(btn);

  container.appendChild(menuContainer);
}

export { eatPage };
