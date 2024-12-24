// script.js

// Keep track of the current top z-index value
//let topZIndex = 5; // Start with a number higher than any initial z-index

// Select all floating images
const images = document.querySelectorAll('.floating-image');




// Set the image container dimensions
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

// Function to generate a random position within the container
function getRandomPosition(image) {
  const maxLeft = containerWidth/2 - image.clientWidth/2;// Limit to half of the container width
  const maxTop = containerHeight/2 - image.clientHeight/2;// Limit to half of the container height
  const randomLeft = Math.floor(Math.random() * maxLeft) + (containerWidth / 4);// Add offset for centralizing
  const randomTop = Math.floor(Math.random() * maxTop) + (containerHeight / 4);// Add offset for centralizing
  return { left: randomLeft, top: randomTop };
}

// Apply random positioning to each image with more potential  overlap
images.forEach((img) => {
    const position = getRandomPosition(img);
    img.style.left = `${position.left}px`;
    img.style.top = `${position.top}px`;

    // Apply random rotation between -20 to 20 degrees
  const randomRotation = Math.floor(Math.random() * 40) - 20;
  img.style.transform = `rotate(${randomRotation}deg)`;

  });


// Keep track of the current top z-index value
let topZIndex = 5; // Start with a number higher than any initial z-index

// Add click event listeners to each image
images.forEach((img) => {
  img.addEventListener('click', () => {
    // Increase the top z-index and assign it to the clicked image
    topZIndex++;
    img.style.zIndex = topZIndex;

    // Optionally scale up the image slightly for visual effect
    img.style.transform = 'scale(3.0)';

    // Reset the scale back after a short time
    setTimeout(() => {
      img.style.transform = 'scale(1)';
    }, 1000);
  });
});