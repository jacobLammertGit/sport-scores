const basketballBtn = document.querySelectorAll(".basketball");
const baseballBtn = document.querySelectorAll(".baseball");
const footballBtn = document.querySelectorAll(".football");
const soccerBtn = document.querySelectorAll(".soccer");
const hockeyBtn = document.querySelectorAll(".hockey");
const header = document.querySelector("#header");
const headerP = document.querySelector("#header-p");
const home = document.querySelector("#home");
const list = document.querySelector("#list");
const homeText = document.querySelector("#homeText");
const awayText = document.querySelector("#awayText");

const basketball = "basketball";
const baseball = "baseball";
const football = "american-football";
const hockey = "ice-hockey";

clickBasketball(basketballBtn);
clickBaseball(baseballBtn);
clickFootball(footballBtn);
clickSoccer(soccerBtn);
clickHockey(hockeyBtn);
homeClick();

function getSoccer() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bd7cf2b3c6msh58e53ba5f9e7351p156fb1jsnae404031f718",
      "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com",
    },
  };

  fetch("https://allsportsapi2.p.rapidapi.com/api/matches/live", options)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.events.length; i++) {
        let li = document.createElement("li");
        list.appendChild(li);
        li.classList.add("live-game");
        li.innerHTML = `<span>${data.events[i].homeTeam.name}</span><span class='num'>${data.events[i].homeScore.current}</span><span>${data.events[i].awayTeam.name}</span><span class='num'>${data.events[i].awayScore.current}</span>`;
      }
      if (data.events.length === 0) {
        headerP.classList.add("text-danger");
        headerP.innerText = "There are no games right now, try another sport!";
      }
    })
    .catch((err) => console.error(err));
}

function getSport(sport) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bd7cf2b3c6msh58e53ba5f9e7351p156fb1jsnae404031f718",
      "X-RapidAPI-Host": "allsportsapi2.p.rapidapi.com",
    },
  };

  fetch(
    `https://allsportsapi2.p.rapidapi.com/api/${sport}/matches/live`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.events.length; i++) {
        let li = document.createElement("li");
        list.appendChild(li);
        li.classList.add("live-game");
        li.innerHTML = `<span>${data.events[i].homeTeam.name}</span><span class='num'>${data.events[i].homeScore.current}</span><span>${data.events[i].awayTeam.name}</span><span class='num'>${data.events[i].awayScore.current}</span>`;
      }
      if (data.events.length === 0) {
        headerP.classList.add('text-danger');
        headerP.innerText = "There are no games right now, try another sport!";
      }
    })
    .catch((err) => console.error(err));
}

function clickBasketball(sport) {
  sport.forEach((e) =>
    e.addEventListener("click", () => {
      setTitle(e);
      homeText.classList.remove("hidden");
      awayText.classList.remove("hidden");
      getSport(basketball);
    })
  );
}
function clickBaseball(sport) {
  sport.forEach((e) =>
    e.addEventListener("click", () => {
      setTitle(e);
      homeText.classList.remove("hidden");
      awayText.classList.remove("hidden");
      getSport(baseball);
    })
  );
}
function clickFootball(sport) {
  sport.forEach((e) =>
    e.addEventListener("click", () => {
      setTitle(e);
      homeText.classList.remove("hidden");
      awayText.classList.remove("hidden");
      getSport(football);
    })
  );
}
function clickSoccer(sport) {
  sport.forEach((e) =>
    e.addEventListener("click", () => {
      setTitle(e);
      homeText.classList.remove("hidden");
      awayText.classList.remove("hidden");
      getSoccer();
    })
  );
}
function clickHockey(sport) {
  sport.forEach((e) =>
    e.addEventListener("click", () => {
      setTitle(e);
      homeText.classList.remove("hidden");
      awayText.classList.remove("hidden");
      getSport(hockey);
    })
  );
}

function setTitle(title) {
  let sportName = title.innerText;
  header.innerText = `${sportName} Scores`;
  headerP.classList.remove('text-danger');
  headerP.innerText = "";
  list.innerHTML = "";
}

function homeClick() {
  home.addEventListener("click", () => {
    window.location.reload();
  });
}
