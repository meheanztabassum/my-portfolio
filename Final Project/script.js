// Show/Hide Back to Top Button
window.onscroll = function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block"; // Show button
  } else {
      backToTopButton.style.display = "none"; // Hide button
  }
};

// Scroll to Top Functionality
document.getElementById("back-to-top").onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Add Recommendation Functionality
function addRecommendation(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Create new recommendation item
  const recommendationContainer = document.querySelector(".recommendations-container");
  const newRecommendation = document.createElement("div");
  newRecommendation.classList.add("recommendation-item");

  // Append the recommendation text
  newRecommendation.innerHTML = `
      <div class="recommendation-text">
          "${message}" ${name ? `- ${name}` : ''}
      </div>
  `;
  recommendationContainer.appendChild(newRecommendation);

  // Show popup message
  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  // Clear the form
  document.getElementById("recommendationForm").reset();
}

// Close Popup Functionality
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
