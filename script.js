"use strict"

let state = "waiting"// cooking "ready"
let balance = document.querySelector(".balance");
let cup = document.querySelector(".cup img");
//onclick = "cookCoffee"(`Американо`, 50, this)
function cookCoffee(name, price, elem) {
  if (state != "waiting") {
    return;
  }
  if (balance.value >= price) {
  state = "сcooking";
     balance.style.backgroundColor = "";
    balance.value -= price;
  changeDisplayText(`Ваш ${name} готовится`);

  let coffeeImg = elem.querySelector("img");
   let coffeeSrc = coffeeImg.getAttribute("src");

  
  startCooking(name, coffeeSrc);
  } else {
    changeDisplayText("Недостаточно средств");
    balance.style.backgroundColor = "rgb(255, 50, 50)";
    }
  }
  // планирование
  // setTimeout(func,ms) - отрабатывает только один раз
  //setInterval(func,ms)-отрабатывает пока не отключим
  //Let timeout = setTimeout(func,ms);
  //Let interval =setInterval(func,ms)
  //clearTimeout(timeout)
  //clearInterval(interval)
  function startCooking(name, src) {
   // let progressBar = document.querySelector(".progress-bar");
    cup.setAttribute("src", src);
    cup.style.display = "inline";
    let t = 0;
    let cookingInterval = setInterval(() => {// то же самое, что и function () {}
    t++;
    cup.style.opacity = t + "%";
    changeProgressPercent(t);
    //progressBar.style.width = t + "%";
    console.log(t);
    if (t == 100) {
      state = "ready";
      clearInterval(cookingInterval);
      changeDisplayText(`Ваш ${name} готов!`); 
      cup.style.cursor = "pointer";
      cup.onclick = function() {
        takeCoffee();
    }
    }
      }, 50);
  }
  
  function takeCoffee() {
    if (state != "ready") {
      return;
    }
    state = "waiting";
    changeProgressPercent(0);
     cup.style.opacity = 0;
     cup.style.display = "";// или none
     cup.style.cursor = "";
     changeDisplayText("Выберите кофе");
     cup.onclick = null;
  }
  
  function changeProgressPercent(percent) {
    let progressBar = document.querySelector(".progress-bar");
     progressBar.style.width = percent + "%";
  }
  
  
  function changeDisplayText(text) {
    let displayText = document.querySelector(".display span");
    displayText.innerHTML = text;
  }
  function changeDisplayText(text) {
    if (text.length > 23) {
      text = text.slice(0, 23) + "...";
    }
    let displayText = document.querySelector(".display span");
    displayText.innerHTML = text;
    }
  
  