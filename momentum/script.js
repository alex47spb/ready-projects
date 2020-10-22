const time = document.querySelector(".time"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus");

const btns = document.querySelectorAll(".btn");

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

showTime();
