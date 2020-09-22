const bodyDOM = document.querySelector("body");
const timeDOM = document.querySelector(".time");
const dateDOM = document.querySelector(".date");

const btnDOM = document.querySelector(".btn");

// Default = numeric
let btnSwitchIsClicked = false;

// hour 24 = 100% / minute 60 = 100% / second 60 = 100%

// Day 31 = 100% / Month 12 = 100% / year 2020 = 20

const getPercent = (baseNum, curNum) => {
  // baseNum = 100%
  // curNum current number

  return (100 / baseNum) * curNum;
};

// get hex 0-15 value by Percent 0-100
const getHexByPercent = (per) => {
  // 100% = ff / 255
  // 1% = 2.55

  return Math.round(per * 2.55).toString(16);
};

const handleSwitchBtnClick = () => {
  btnSwitchIsClicked = !btnSwitchIsClicked;
  if (btnSwitchIsClicked) {
    btnDOM.textContent = "Switch to numeric";
  } else {
    btnDOM.textContent = "Switch to percent";
  }
};

setInterval(() => {
  let [hour, minute, second] = new Date()
    .toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .split(":");

  let [day, month, year] = new Date()
    .toLocaleDateString("de-DE", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .split(".");

  if (btnSwitchIsClicked) {
    let = hexTime = `#${getHexByPercent(getPercent(24, hour))}${getHexByPercent(
      getPercent(60, minute)
    )}${getHexByPercent(getPercent(60, second))}`;
    let = hexDate = `#${getHexByPercent(getPercent(31, day))}${getHexByPercent(
      getPercent(12, month)
    )}${year}`;
  } else {
    let = hexTime = `#${hour}${minute}${second}`;
    let = hexDate = `#${day}${month}${year}`;
  }

  timeDOM.textContent = hexTime;
  dateDOM.textContent = hexDate;

  bodyDOM.style.background = `conic-gradient(${hexTime} ${getPercent(
    60,
    second
  )}%, ${hexDate} ${getPercent(60, second)}%)`;
}, 1000);

btnDOM.addEventListener("click", handleSwitchBtnClick);
