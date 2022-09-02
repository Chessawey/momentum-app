const search = document.querySelector(".search-input");
const searchLink = document.querySelector(".search-link");

search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(search.value);
    searchLink.href = `https://www.google.com/search?q=${search.value}`;
    searchLink.click();
    search.value = "";
  }
});

let ampm = false;

const date = new Date();
// let year = date.getFullYear();
// let month = months[date.getMonth()];
// let day = date.getDate();
let hours = date.getHours();
let random = Math.floor(Math.random() * 4);
const greeting = document.querySelector(".greeting");
// TIME
function refreshTime() {
  const timeDisplay = document.querySelector(".time");
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  if (ampm === false) {
    timeDisplay.textContent = `${hours.toString().padStart(2, 0)}:${minutes
      .toString()
      .padStart(2, 0)}`;
  } else {
    hours > 12 ?
      (timeDisplay.textContent = `${(hours % 12 ? hours % 12 : 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)}pm`) :
      (timeDisplay.textContent = `${(hours % 12 ? hours % 12 : 12)
          .toString()
          .padStart(2, 0)}:${minutes.toString().padStart(2, 0)}am`);
  }
  greeting.textContent = `${localStorage.getItem("name")}`;
  if (hours < 12) {
    greeting.textContent = `Good morning, ${localStorage.getItem("name")}`;
  } else if (hours > 11 && hours < 18) {
    greeting.textContent = `Good afternoon, ${localStorage.getItem("name")}`;
  } else {
    greeting.textContent = `Good evening, ${localStorage.getItem("name")}`;
  }
}
setInterval(refreshTime, 200);

const nameContainer = document.querySelector(".name-container");
const container = document.querySelector(".container");
const nameInput = document.querySelector(".name-input");

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("name", nameInput.value);
    console.log(localStorage.getItem("name"));
    if (localStorage.getItem("name") === null || undefined) {
      nameContainer.style.display = "flex";
      greeting.style.display = "none";
    } else {
      nameContainer.style.display = "none";
      greeting.style.display = "flex";
    }
  }
});

if (localStorage.getItem("name") === null || undefined) {
  nameContainer.style.display = "flex";
  greeting.style.display = "none";
} else {
  nameContainer.style.display = "none";
  greeting.style.display = "flex";
}

greeting.addEventListener("click", () => {
  localStorage.removeItem("name");
  if (localStorage.getItem("name") === null || undefined) {
    nameContainer.style.display = "flex";
    greeting.style.display = "none";
  } else {
    nameContainer.style.display = "none";
    greeting.style.display = "flex";
  }
});

const focus = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusHeader = document.querySelector(".focus-header");
const yourFocus = document.querySelector(".your-focus");
const yourFocusText = document.querySelector(".your-focus-text");
const whatFocus = document.querySelector(".what-focus");
// const whatFocus = document.querySelector(".what-focus");

focusInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    localStorage.setItem("focus", focusInput.value);
    console.log(localStorage.getItem("focus"));
    if (localStorage.getItem("focus") === null || undefined) {
      whatFocus.style.display = "flex";
      yourFocus.style.display = "none";
    } else {
      whatFocus.style.display = "none";
      yourFocus.style.display = "flex ";
      yourFocusText.textContent = localStorage.getItem("focus");
    }
  }
});

if (localStorage.getItem("focus") === null || undefined) {
  whatFocus.style.display = "flex";
  yourFocus.style.display = "none";
} else {
  whatFocus.style.display = "none";
  yourFocus.style.display = "flex ";
  yourFocusText.textContent = localStorage.getItem("focus");
}

yourFocusText.addEventListener("click", () => {
  localStorage.removeItem("focus");
  if (localStorage.getItem("focus") === null || undefined) {
    whatFocus.style.display = "flex";
    yourFocus.style.display = "none";
  } else {
    whatFocus.style.display = "none";
    yourFocus.style.display = "flex ";
    yourFocusText.textContent = localStorage.getItem("focus");
  }
});



// Quotes //


// To do //