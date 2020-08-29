//Dates Section

let start_date = moment().format("YYYY-MM-DD");
let start_date1 = moment().subtract(1, "days").format("YYYY-MM-DD");
let start_date2 = moment().subtract(2, "days").format("YYYY-MM-DD");
let start_date3 = moment().subtract(3, "days").format("YYYY-MM-DD");
let start_date4 = moment().subtract(4, "days").format("YYYY-MM-DD");
let end_date = moment().subtract(5, "days").format("YYYY-MM-DD");

const dates = [start_date, start_date1, start_date2, start_date3, start_date4, end_date];
const reversedDates = dates.reverse();

const nasaImg = Array.from(document.getElementsByClassName("nasa-img"));
const cardTitle = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".card-text");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const overlay = document.querySelector(".overlay");
const moreInfoText = document.querySelector("#more-info-text");
const modalTitleText = document.querySelector("#modal-title-text");
const cardMediaSection = document.querySelectorAll(".card-media-section");
const topSection = document.getElementsByClassName("top-section");
const date = document.getElementsByClassName("date");
const card = document.getElementsByClassName("card");

const cardToArray = Array.from(card);
const reversedCard = cardToArray.reverse();

const cardTitleToArray = Array.from(cardTitle);
const reversedCardTitle = cardTitleToArray.reverse();

const dateToArray = Array.from(date);
const reversedDate = dateToArray.reverse();
function formattedDate(dateToFormat) {
  const months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

    for (let i = 0; i < dateToFormat.length; i++) {

      const monthNumber = dateToFormat[i].slice(5, 7);
      const monthDay = dateToFormat[i].slice(8, 10);
      const year = dateToFormat[i].slice(0, 4);
      console.log(monthNumber)
      console.log(monthDay);
      console.log(year);
    }
}
formattedDate(dates);

const cardTextToArray = Array.from(cardText);
const reversedCardText = cardTextToArray.reverse();

const learnMoreBtnToArray = Array.from(learnMoreBtn);
const reversedLearnMoreBtnToArray = learnMoreBtnToArray.reverse();

// console.log(start_date);
// console.log(start_date1);
// console.log(start_date2);
// console.log(start_date3);
// console.log(start_date4);
// console.log(end_date);

async function fetchImages() {
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=01wmByPh4KD8GxAag5vMZBZht2xh2Hu89iOY5eaF&start_date=${end_date}&end_date=${start_date}`)
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.length; i++) {
    }
    for (let j = 0; j < nasaImg.length; j++) {
        nasaImg[j].src = res[j].hdurl;
        if (nasaImg[j].src.includes("undefined") === true) {
          console.log("this is an iframe");
          const iframe = document.createElement("iframe");
          iframe.src = res[j].url;
          cardMediaSection[j].prepend(iframe)
          cardMediaSection[j].children[1].style.display = "none";
        }
    }
    for (let k = 0; k < reversedCardTitle.length; k++) {
      reversedCardTitle[k].textContent = `${res[k].title}`
    }
    for (let l = 0; l < reversedCardText.length; l++) {
      reversedCardText[l].textContent = `${res[l].explanation}`.substring(0, 75) + "...";
    }
    for (let m = 0; m < reversedLearnMoreBtnToArray.length; m++) {
      reversedLearnMoreBtnToArray[m].addEventListener("click", function() {
        moreInfoText.textContent = `${res[m].explanation}`;
        modalTitleText.textContent = `${res[m].title}`;
      })   
    }
    for (let i = 0; i < reversedDates.length; i++) {
      for (let j = 0; j < reversedDate.length; j++) {
        reversedDate[i].textContent = reversedDates[i]
      }
    }
  });
}

fetchImages();




