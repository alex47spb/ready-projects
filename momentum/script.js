if (typeof localStorage.focusField === "undefined")
  localStorage.setItem("focusField", "Введите свою цель");
if (typeof localStorage.nameField === "undefined")
  localStorage.setItem("nameField", "Введите свое имя");

const time = document.querySelector(".time"),
  nameField = document.querySelector(".nameField"),
  focusField = document.querySelector(".focusField"),
  dateday = document.querySelector(".dateday");

var dayNames = new Array(
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
);

var monthNames = new Array(
  " января",
  " февраля",
  " марта",
  " апреля",
  " мая",
  " июня",
  " июля",
  " августа",
  " сентября",
  " октября",
  " ноября",
  " декабря"
);

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML =
    (parseInt(hour, 10) < 10 ? "0" : "") +
    hour +
    "<span>:</span>" +
    (parseInt(min, 10) < 10 ? "0" : "") +
    min +
    "<span>:</span>" +
    (parseInt(sec, 10) < 10 ? "0" : "") +
    sec;

  setTimeout(showTime, 1000);
}

// =====================================


function showGreeting() {

    greetingField.innerHTML = 'время суток';

    let today = new Date(),
      hour = today.getHours();
  
  // четыре времени суток: утро 6:00-12:00, день 12:00-18:00, вечер 18:00-24:00, ночь 24:00-6:00.
  
                           if ( 0 <= parseInt(hour, 10) && parseInt(hour, 10) < 6 ) greetingField.innerHTML = 'Добрая ночь, ';
                      else if ( 6 <= parseInt(hour, 10) && parseInt(hour, 10) < 12 ) greetingField.innerHTML = 'Доброе утро, ';
                      else if ( 12 <= parseInt(hour, 10) && parseInt(hour, 10) < 18 ) greetingField.innerHTML = 'Добрый день, ';
                      else if ( 18 <= parseInt(hour, 10) && parseInt(hour, 10) < 24 ) greetingField.innerHTML = 'Добрый вечер, ';
  
    setTimeout(showTime, 1000);
  }

// ==============================
function showDateday() {
  let todayDay = new Date(),
    day = dayNames[todayDay.getDay()],
    dayNumber = todayDay.getDate(),
    monthIndx = todayDay.getMonth();

  // Output Date

  dateday.innerHTML =
    (parseInt(day, 10) < 10 ? "0" : "") +
    day +
    "<span> </span>" +
    (parseInt(dayNumber, 10) < 10 ? "0" : "") +
    dayNumber +
    "<span> </span>" +
    monthNames[monthIndx];


  setTimeout(showTime, 100000);
}

// ==============================

showTime();
showDateday();
showGreeting();

// =================================

let nameFromStorage = localStorage.getItem("nameField");

if (nameFromStorage !== null || nameFromStorage.length === 0)
        nameField.innerHTML = nameFromStorage;
else nameField.innerHTML = "Введите свое имя";

function onclickText(e) {

    nameField.innerHTML = '';

  }

// обработчик изменения текста
function onchangeText(e) {

    if( e.target.innerText.length !== 0 ) localStorage.setItem("nameField", e.target.innerText);
}
// обработка потери фокуса
function onblurText(e) {
    if( e.target.innerText.length !== 0 ) 
    { localStorage.setItem("nameField", e.target.innerText);
        nameField.innerHTML = e.target.textContent;
}   
}
// получение фокуса
function onfocusText(e) {
  //
}

nameField.addEventListener("click", onclickText);
nameField.addEventListener("change", onchangeText);
nameField.addEventListener("blur", onblurText);
nameField.addEventListener("focus", onfocusText);

nameField.addEventListener("keydown", function (event) {
  if (event.keyCode == 13 || event.which == 13) event.preventDefault();
});

// =================================

let focusFromStorage = localStorage.getItem("focusField");

if (focusFromStorage !== null || focusFromStorage.length === 0)
  focusField.innerHTML = focusFromStorage;
else focusField.innerHTML = "Введите свою цель";
// обработчик изменения текста
function onchangeFocusField(e) {
  localStorage.setItem("focusField", e.target.innerText);
}
// обработка потери фокуса
function onblurFocusField(e) {
  localStorage.setItem("focusField", e.target.innerText);
  focusField.innerHTML = e.target.textContent;
}
// получение фокуса
function onfocusFocusField(e) {
  //
}

focusField.addEventListener("change", onchangeFocusField);
focusField.addEventListener("blur", onblurFocusField);
focusField.addEventListener("focus", onfocusFocusField);

focusField.addEventListener("keydown", function (event) {
  if (event.keyCode == 13 || event.which == 13) event.preventDefault();
});

//-----------------------------------------
const btns = document.querySelectorAll(".btn");

//--------------------------------------

for (var i = 0; i < btns.length; i++) {
  var currentBtn = btns[i];
  currentBtn.addEventListener("click", function (e) {
    btnPress(e.target.textContent);
  });
}

function btnPress(btn) {
  switch (btn) {
    case "Просмотр изображений":
      //        bgimg.innerHTML =  '<img id="landscape-bg" src="assets/images/morning/05.jpg" alt=""></img>';

      var myButtonClasses = document.getElementById("landscape-bg").classList;
      myButtonClasses.remove("slow-show");
      //            myButtonClasses.add("slow-show");
      setTimeout(() => {
        document.getElementById("landscape-bg").src =
          "assets/images/morning/05.jpg";
      }, 1000);
      myButtonClasses.add("slow-show");

      //      document.location.reload();
      //        document.getElementById("bg").reload();

      break;
    default:
      break;
  }
}
