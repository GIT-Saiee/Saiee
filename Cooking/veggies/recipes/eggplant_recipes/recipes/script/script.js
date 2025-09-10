// Get the modal and the image and caption elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Get all the gallery images
const galleryItems = document.querySelectorAll(".gallery-item img");

// Loop through all gallery images and add a click event listener
galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Add a click event listener to the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks anywhere on the dark background
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});