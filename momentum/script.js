const time = document.querySelector(".time"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus"),
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
    case "ce":

//        bgimg.innerHTML =  '<img id="landscape-bg" src="assets/images/morning/05.jpg" alt=""></img>';

            var myButtonClasses = document.getElementById("landscape-bg").classList;
            myButtonClasses.remove("slow-show");
//            myButtonClasses.add("slow-show");
            setTimeout(() => { 
            document.getElementById("landscape-bg").src =  "assets/images/morning/05.jpg"; }, 1000);
            myButtonClasses.add("slow-show");
 

//      document.location.reload();
//        document.getElementById("bg").reload();

      break;
    default:
      break;
  }
}
