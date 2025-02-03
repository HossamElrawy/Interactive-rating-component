// Function to get the selected rating value
function getSelectedRating() {
    const radios = document.getElementsByName('options');
    for (const radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null; // Return null if no rating is selected
}

// Function to switch screens
function switchScreens(ratingContainer, thankYouContainer) {
    ratingContainer.classList.add("hide-con");
    thankYouContainer.classList.remove("hide-con");
}

// Function to display the selected rating
function displaySelectedRating(selectedValue) {
    const selectionText = document.querySelector('.js-selection-text');
    selectionText.textContent = `You selected ${selectedValue} out of 5`;
}

// Main function to handle the submit button click
function handleSubmit() {
    const selectedValue = getSelectedRating();

    if (selectedValue === null) {
        alert("Please select a rating before submitting.");
        return;
    }

    const ratingContainer = document.querySelector('.js-rating-container');
    const thankYouContainer = document.querySelector('.js-thank-you-container');

    switchScreens(ratingContainer, thankYouContainer);
    displaySelectedRating(selectedValue);

    // Optional: Set focus on the thank you container for better accessibility
    thankYouContainer.setAttribute('tabindex', '-1');
    thankYouContainer.focus();
}

// Add event listener to the submit button
document.querySelector(".js-submit-button").addEventListener("click", handleSubmit);