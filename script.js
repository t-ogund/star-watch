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

const reversedNasaImg = nasaImg.reverse();
console.log(reversedNasaImg);

const cardMediaSectionToArray = Array.from(cardMediaSection);
const reversedCardMediaSection = cardMediaSectionToArray.reverse();

const cardTextToArray = Array.from(cardText);
const reversedCardText = cardTextToArray.reverse();

const learnMoreBtnToArray = Array.from(learnMoreBtn);
const reversedLearnMoreBtnToArray = learnMoreBtnToArray.reverse();

async function fetchImages() {
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=01wmByPh4KD8GxAag5vMZBZht2xh2Hu89iOY5eaF&start_date=${end_date}&end_date=${start_date}`)
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.length; i++) {
    }
    for (let j = 0; j < reversedNasaImg.length; j++) {
        reversedNasaImg[j].src = res[j].hdurl;
        console.log(reversedNasaImg[j].src)
        if (reversedNasaImg[j].src.includes("undefined") === true) {
          console.log("this is an iframe");
          const iframe = document.createElement("iframe");
          iframe.src = res[j].url;
          reversedCardMediaSection[j].prepend(iframe)
          reversedCardMediaSection[j].children[1].style.display = "none";
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

        const year = reversedDates[i].slice(0,4);
        const month = reversedDates[i].slice(5,7);
        const day = reversedDates[i].slice(8,10);

        const finalDate = `${month}/${day}/${year}`

        reversedDate[i].textContent = finalDate
      }
    }
  });
}

fetchImages();




