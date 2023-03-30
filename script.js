const btns = [...document.querySelectorAll("div")];

const addAnimation = function () {
  let that = this;
  let animationNumber = 0;
  let index = btns.indexOf(this);
  for (index; index < btns.length; index++) {
    btns[index].classList.add(`animation${animationNumber}`);
    animationNumber++;
  }
  let animationNumber2 = 0;
  let index2 = btns.indexOf(this);
  for (index2; index2 > -1; index2--) {
    btns[index2].classList.add(`animation${animationNumber2}`);
    animationNumber2++;
  }
  const removeAnimation = () => {
    let animationNumber = 0;
    let index = btns.indexOf(that);
    for (index; index < btns.length; index++) {
      btns[index].classList.remove(`animation${animationNumber}`);
      animationNumber++;
    }
    let animationNumber2 = 0;
    let index2 = btns.indexOf(that);
    for (index2; index2 > -1; index2--) {
      btns[index2].classList.remove(`animation${animationNumber2}`);
      animationNumber2++;
    }
  };
  setTimeout(removeAnimation, 2200);
};

btns.forEach((btn) => btn.addEventListener("click", addAnimation));

document
  .querySelector("section.toggle i.fa-toggle-off")
  .addEventListener("click", () => {
    document.querySelector("section.toggle i.fa-toggle-off").style.display =
      "none";
    document.querySelector("section.toggle i.fa-toggle-on").style.display =
      "block";
    btns.forEach((btn) => btn.classList.add("animationColor"));
  });

document
  .querySelector("section.toggle i.fa-toggle-on")
  .addEventListener("click", () => {
    document.querySelector("section.toggle i.fa-toggle-on").style.display =
      "none";
    document.querySelector("section.toggle i.fa-toggle-off").style.display =
      "block";
    btns.forEach((btn) => btn.classList.remove("animationColor"));
  });
