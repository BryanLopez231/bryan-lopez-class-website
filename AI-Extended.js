const images = [
  'robot.jpg',
  'sky.png',
  'art.jpg',
  'logo new final.png',
  'sad.GIF',
  'Skeleton.GIF'
];

const clearBtn = document.getElementById('clear-btn');

// 1. Listen for page clicks to spawn images
document.addEventListener('click', (event) => {
  // Prevent spawning an image if the clear button itself was clicked
  if (event.target === clearBtn) return;

  const x = event.clientX;
  const y = event.clientY;

  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImageSrc = images[randomIndex];

  const imgElement = document.createElement('img');
  imgElement.src = selectedImageSrc;
  imgElement.classList.add('spawned-image');

  imgElement.style.left = `${x}px`;
  imgElement.style.top = `${y}px`;

  document.body.appendChild(imgElement);
});

// 2. Clear all spawned images on button click
clearBtn.addEventListener('click', () => {
  const spawnedImages = document.querySelectorAll('.spawned-image');
  spawnedImages.forEach(img => img.remove());
});