//Dates Section

let start_date = moment().format("YYYY-MM-DD");
// console.log(start_date)

let end_date = moment().subtract(5, "days").format("YYYY-MM-DD");

// console.log(end_date);



const nasaImg = Array.from(document.getElementsByClassName("nasa-img"));
const cardTitle = document.querySelectorAll(".card-title");
const cardText = document.querySelectorAll(".card-text");
const learnMoreBtn = document.querySelectorAll(".learn-more-btn");
const overlay = document.querySelector(".overlay");
const moreInfoText = document.querySelector("#more-info-text");
const modalTitleText = document.querySelector("#modal-title-text");
const cardMediaSection = document.querySelectorAll(".card-media-section")

// console.log(cardMediaSection)




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
        // console.log(nasaImg[j].src)

        if (nasaImg[j].src.includes("undefined") === true) {
          console.log("this is an iframe");
          const iframe = document.createElement("iframe");
          iframe.src = res[j].url;
          cardMediaSection[j].prepend(iframe)
          cardMediaSection[j].children[1].style.display = "none";
          // for (let z = 0; z < cardMediaSection.length; z++) {
            
          // console.log(iframe)
         
          // }

          
          // console.log(iframe)
          // console.log(res[j].url)
        }
    }

    

    for (let k = 0; k < cardTitle.length; k++) {
      // console.log(cardTitle[k]);
      cardTitle[k].textContent = `${res[k].title}`
    }

    for (let l = 0; l < cardText.length; l++) {
      // console.log(cardText[l]);
      cardText[l].textContent = `${res[l].explanation}`.substring(0, 75) + "...";
    }

    for (let m = 0; m < learnMoreBtn.length; m++) {
      learnMoreBtn[m].addEventListener("click", function() {
        moreInfoText.textContent = `${res[m].explanation}`
        modalTitleText.textContent = `${res[m].title}`;
      })   
    }

    for (let n = 0; n < learnMoreBtn.length; n++) {
      learnMoreBtn[n].innerHTML = "Learn more";
    }

    // for (let q = 0; q < cardMediaSection.length; q++) {
    //   // if (cardMediaSection[q].)
    //   console.log(cardMediaSection[q].children)
    // }

    // console.log(res)

    // for (let x = 0; x < cardMediaSection.length; x++) {
    //   const children = cardMediaSection[x].children
    //   console.log(children)
    //   for (let y = 0; y < children.length; y++) {
    //     console.log(children[y].outerHTML)
    //     if (children[y].outerHTML.includes("undefined") === true) {
    //       console.log(y, "is undefined")
    //       const iframe = document.createElement("iframe");
    //       iframe.src = res[y].url
    //       children[y].appendChild(iframe);
    //       console.log(res[y].url)
    //     }
    //   }
    // }
    
  });
}

fetchImages();



// nasaImg.forEach(item => item.src = `${res[i].hdurl}`)



