

const image = document.querySelector("#robo");

image.addEventListener("click", changeImage);
if (image.src.includes('robo.jpg')) {
        image.src = 'sky.png';
    } else {
        image.src = 'robot.jpg';
    }
  