// Get the modal and the image and caption elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("full-size-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const nextBtn = document.querySelector('.next-button');
const fullSizeImg = document.getElementById('full-size-image');
const prevBtn = document.querySelector('.prev-button');
// Get all the gallery images
const galleryItems = document.querySelectorAll(".gallery-item img");



// Keep track of the currently viewed image's index
let currentIndex = 0;
let imageSources = [];
let imageData =[];
// Populate the imageData array on page load
galleryItems.forEach((img, index) => {
  imageData.push({
    full: img.getAttribute('src'),
    caption: img.getAttribute('alt')
  });
});

// Populate the imageSources array on page load
galleryItems.forEach((img, index) => {
  imageSources.push(img.getAttribute('src'));
});

function updateModal(imageIndex) {
  currentIndex = imageIndex;
     fullSizeImg.src = imageData[currentIndex].full;
  // NEW: Update the caption text with the new caption
  captionText.textContent = imageData[currentIndex].caption;
}

// Function to open the modal
function openModal(imageIndex) {
  currentIndex = imageIndex;
  fullSizeImg.src = imageSources[currentIndex];
  updateModal(imageIndex);
  modal.style.display = 'block';

}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to navigate to the next image
function nextImage() {
  // Increment index, or loop back to the start if at the end
  currentIndex = (currentIndex + 1) % imageSources.length;
  fullSizeImg.src = imageSources[currentIndex];
  updateModal(currentIndex);
}

// Function to navigate to the previous image
function prevImage() {
  // Decrement index, or loop to the end if at the start
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  fullSizeImg.src = imageSources[currentIndex];
  updateModal(currentIndex);
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(index);
  });
});

// 2. Close modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// 3. Navigate with the next/previous buttons
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// 4. Close the modal by clicking the background overlay
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});