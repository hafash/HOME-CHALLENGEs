// galleryData is an array of objects, each representing an item in a gallery.
// Each object contains:
// - imgSrc: The file path to the image.
// - title: The title or name of the image subject.
// - location: The geographical location where the subject can be found.
const galleryData = [
    {
        imgSrc: "./assets/FOX.png",
        title: "FENNEC FOX",
        location: "India",
    },
    {
        imgSrc: "./assets/WHALE.png",
        title: "HUMPBACK WHALE",
        location: "south africa",
    },
    {
        imgSrc: "./assets/BABOON.png",
        title: "COMMON,BROWN BABOON",
        location: "south africa"
    },
    {
        imgSrc: "./assets/DEER.png",
        title: "SPOTTED DEER",
        location: "amazon",
    },
];

// Function to create gallery cards
function createGalleryCards() {
    const galleryWrapper = document.querySelector(".galleryWrapper");
    galleryData.forEach((data) => {
        const galleryCard = document.createElement("div");
        galleryCard.classList.add("galleryCard");

        galleryCard.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.title}" />
    <div class="galleryOverlay">
      <div class="contents">
        <h1>${data.title.split(" ").join("<br>")}</h1>
        <small class="location">${data.location}</small>
        <p class="more"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        galleryWrapper.appendChild(galleryCard);
    });
}

// Call the function to create gallery cards on page load
document.addEventListener("DOMContentLoaded", createGalleryCards);