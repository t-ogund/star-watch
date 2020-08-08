let start_date = moment().format("YYYY-MM-DD");
// console.log(start_date)

let end_date = moment().subtract(5, "days").format("YYYY-MM-DD");

// console.log(end_date);

const nasaImg = Array.from(document.getElementsByClassName("nasa-img"));
const cardTitle = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".card-text");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const overlay = document.querySelector(".overlay")


// console.log(nasaImg);

function fetchImages() {
  fetch(`https://api.nasa.gov/planetary/apod?api_key=01wmByPh4KD8GxAag5vMZBZht2xh2Hu89iOY5eaF&start_date=${end_date}&end_date=${start_date}`)
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.length; i++) {
    // console.log(res[i].hdurl)
    }
    for (let j = 0; j < nasaImg.length; j++) {
        nasaImg[j].src = res[j].hdurl;
        console.log(nasaImg[j].src)

        if (nasaImg[j].src.includes("undefined") === true) {
          console.log("hi");
          const iframe = document.createElement("iframe");
          iframe.src = res[j].url;
          console.log(iframe)
          console.log(res[j].url)
        }
    }

    for (let k = 0; k < cardTitle.length; k++) {
      // console.log(cardTitle[k]);
      cardTitle[k].textContent = `${res[k].title}`
    }

    for (let l = 0; l < cardText.length; l++) {
      console.log(cardText[l]);
      cardText[l].textContent = `${res[l].explanation}`.substring(0, 75) + "...";
    }

    console.log(res)
    console.log("hi");


  });

  

  

  

}

fetchImages();

// nasaImg.forEach(item => item.src = `${res[i].hdurl}`)

