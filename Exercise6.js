// 1. Store the image paths in an array
const images = [
    "robot.jpg",
    "art.jpg",
    "sky.png"

];

// 2. Keep track of the current image index
let currentIndex = 0;

// 3. Select the image element from the HTML
const imageElement = document.getElementById("myImage");

// 4. Add a click event listener to the image
imageElement.addEventListener("click", () => {
    // Move to the next index, and loop back to 0 if we hit the end
    currentIndex = (currentIndex + 1) % images.length;
    
    // Update the src attribute of the image
    imageElement.src = images[currentIndex];
});