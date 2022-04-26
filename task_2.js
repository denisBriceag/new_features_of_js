import { Temporal } from "@js-temporal/polyfill";
// Date.prototype.toTemporalInstant = toTemporalInstant;

// const time = Temporal.Now.plainDateTimeISO();
// document.getElementById("month").innerHTML = time.month;
// document.getElementById("daynum").innerHTML = time.day;
// document.getElementById("year").innerHTML = time.year;

function checkTime() {
  const time = Temporal.Now.plainDateTimeISO();
  let day = time.day;
  let month = time.month;
  let year = time.year;
  let hour = time.hour;
  let minute = time.minute;
  let seconds = time.second;
  let period = "AM";

  if (hour === 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    period = "PM";
  }

  const id = ["day", "month", "year", "hours", "minutes", "seconds", "period"];
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateValues = [day, month, year, hour, minute, seconds, period];

  for (let i = 0; i < id.length; i++) {
    document.getElementById(id[i]).innerHTML = `${
      dateValues[i].toString().split("").length === 1
        ? "0" + dateValues[i]
        : dateValues[i]
    }`;
  }
  //   debugger;
}

setInterval(() => {
  checkTime();
}, 1000);

console.log(true * 40);
