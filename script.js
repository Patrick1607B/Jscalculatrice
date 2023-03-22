// DOM
const touches = [...document.querySelectorAll(".styled")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".afficheur");
const modif = document.querySelector(".modif");
// function getRandomInt(max) {
//   return Math.floor(Math.random() * 50);
// }
// console.log(getRandomInt());
let border1 = Math.floor(Math.random() * 50) + "px";
console.log("test1", border1);

let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let Ctouche = rootStyles.getPropertyValue("--styleD");
let cHeader = rootStyles.getPropertyValue("--backgroundHeader");
let backgroundMain = rootStyles.getPropertyValue("--backgroundMain");
let backgroundConteneur = rootStyles.getPropertyValue("--backgroundConteneur");
let colorB = rootStyles.getPropertyValue("--colorB");
let backgroundHeader = rootStyles.getPropertyValue("--backgroundHeader");
let backgroundAfficheur = rootStyles.getPropertyValue("--backgroundAfficheur");
let br = rootStyles.getPropertyValue("--br");

modif.addEventListener("click", () => {
  root.style.setProperty(
    "--styleD",
    "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  );
  root.style.setProperty(
    "--colorB",
    "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  );

  root.style.setProperty(
    "--backgroundConteneur",
    "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  );

  root.style.setProperty(
    "--backgroundAfficheur",
    "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  );
  root.style.setProperty("--br", Math.floor(Math.random() * 50) + "px");
  // console.log("test2", border);
  // console.log("click ");
});

//---------------------------------------

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listeKeycode.indexOf(valeur);
        const touche = touches[indexKeycode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  alert("Une erreur est survenue dans votre calcul : " + e.message);
});

// let total = 0;

// let buttonEgal = document.querySelector(".styled1");
// buttonEgal.addEventListener("click", resetC);

// // let button = document.querySelector('.styled')

// let button = document.querySelector("#conteneur .ligne1 > styled");
// // button.addEventListener('click',test)

// function test(params) {
//   console.log("test C");
// }

// console.log("👌");

// function add(x) {
//   total += x;
//   return total;
// }
// function soustraction(x) {
//   total -= x;
//   return total;
// }
// function multiplication(x) {
//   if (total === 0) {
//     return (total = x);
//   } else {
//     total *= x;
//     return total;
//   }
// }
// function division(x) {
//   if (total === 0) {
//     return (total = x);
//   } else {
//     total /= x;
//     return total;
//   }
// }
// function resetC() {
//   console.log("test =");
//   // total = 0
// }
