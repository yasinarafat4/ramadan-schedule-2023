const images = [
  " images/ramadan-image-1.png",
  "images/ramadan-image-2.png",
  "images/ramadan-image-3.png",
  "images/ramadan-image-4.png",
  "images/ramadan-image-5.png",
  " images/ramadan-image-6.png",
  " images/ramadan-image-7.png",
  "images/ramadan-image-8.png",
];

let imgIndex = 0;
const imgEl = document.getElementById("img-slider");
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgEl.setAttribute("src", imgUrl);
  imgIndex++;
}, 4000);
