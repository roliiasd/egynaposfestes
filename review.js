// DOM Elements
const addReviewBtn = document.getElementById('addReviewBtn');
const reviewFormPopup = document.getElementById('reviewFormPopup');
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const starRating = document.querySelector('.star-rating');
const ratingInput = document.getElementById('rating');
const stars = starRating.getElementsByTagName('i');


// Popup handlers
addReviewBtn.addEventListener('click', () => {
    reviewFormPopup.classList.add('active');
});

reviewFormPopup.addEventListener('click', (e) => {
    if (e.target === reviewFormPopup) {
        reviewFormPopup.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reviewFormPopup.classList.contains('active')) {
        reviewFormPopup.classList.remove('active');
    }
});

// Show popup on page load
setTimeout(() => {
    reviewFormPopup.classList.add('active');
}, 500);


starRating.addEventListener('click', () =>  {
    
});