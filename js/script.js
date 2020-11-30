const presentDay = document.querySelector("#present-day");
const currSecond = document.querySelector("#curr-second");
const currMinute = document.querySelector("#curr-minute");
const currHour = document.querySelector("#curr-hour");
const currDay = document.querySelector("#curr-day");

const copyrightMessage = document.querySelector("#copyright");

const presentYear = new Date().getFullYear();

const getTodaysFullDate = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  const monthStrings = [
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

  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  presentDay.textContent = `${days[day]}, ${date} ${monthStrings[month]} ${presentYear}`;
};

const getCountdownTimer = () => {
  let dateNew = new Date(`Fri, 1 January ${presentYear + 1} 00:00:00`);

  setInterval(() => {
    let currentTimestamp = Date.now();
    let timestampDays = Math.trunc(
      (dateNew - currentTimestamp) / (60 * 60 * 24 * 1000)
    );
    let timestampHours = new Date().getHours();
    let timestampMinutes = new Date().getMinutes();
    let timestampSeconds = new Date().getSeconds();

    currDay.textContent = timestampDays;
    currHour.textContent = 23 - timestampHours;
    currMinute.textContent = 59 - timestampMinutes;
    currSecond.textContent = 59 - timestampSeconds;
  }, 1000);
};

getTodaysFullDate();
getCountdownTimer();

copyrightMessage.innerHTML = `Copyright &copy; ${presentYear} | Jainam Parikh`;
