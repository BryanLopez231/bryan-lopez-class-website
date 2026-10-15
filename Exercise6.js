const images = [
    "robot.jpg",
    "art.jpg",
    "sky.png"
];

let currentIndex = 0;
const imageElement = document.getElementById("myImage");

imageElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
});