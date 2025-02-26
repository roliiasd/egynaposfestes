// Add this function at the beginning of your JavaScript file
function showInitialPopup() {
    // Check if this is the first visit
    if (!localStorage.getItem('hasVisited')) {
        // Show popup with a slight delay for better UX
        setTimeout(() => {
            reviewFormPopup.classList.add('active');
        }, 500);
        // Set flag that user has visited
        localStorage.setItem('hasVisited', 'true');
    }
}

// DOM Elements
const addReviewBtn = document.getElementById('addReviewBtn');
const reviewFormPopup = document.getElementById('reviewFormPopup');
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const starRating = document.querySelector('.star-rating');
const ratingInput = document.getElementById('rating');
const stars = starRating.getElementsByTagName('i');

// Load reviews from localStorage
let reviews = [];
try {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
        reviews = JSON.parse(storedReviews);
        if (!Array.isArray(reviews)) {
            reviews = [];
        }
    }
} catch (error) {
    console.error('Error loading reviews:', error);
    reviews = [];
}

// User management functions
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

function setCurrentUser(name) {
    localStorage.setItem('currentUser', name);
}

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

// Star rating functionality
function initStarRating() {
    Array.from(stars).forEach(star => {
        star.className = 'far fa-star';
    });

    Array.from(stars).forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            updateStars(rating);
        });
    });
}

function updateStars(rating) {
    Array.from(stars).forEach(star => {
        const starRating = star.getAttribute('data-rating');
        if (starRating <= rating) {
            star.className = 'fas fa-star';
        } else {
            star.className = 'far fa-star';
        }
    });
}

function createStarDisplay(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    return starsHtml;
}

// Review card creation and management
function createReviewCard(review, index) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const currentUser = getCurrentUser();
    if (currentUser === review.name) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteReview(index));
        card.appendChild(deleteBtn);
    }
    
    const name = document.createElement('h3');
    name.textContent = review.name;
    
    const stars = document.createElement('div');
    stars.className = 'review-stars';
    stars.innerHTML = createStarDisplay(review.rating);
    
    const text = document.createElement('p');
    text.textContent = review.text;
    
    card.appendChild(name);
    card.appendChild(stars);
    card.appendChild(text);
    
    return card;
}

function deleteReview(index) {
    const review = reviews[index];
    const currentUser = getCurrentUser();
    
    if (currentUser !== review.name) {
        alert('You can only delete your own reviews!');
        return;
    }
    
    if (confirm('Are you sure you want to delete this review?')) {
        reviews.splice(index, 1);
        saveReviews();
        displayReviews();
    }
}

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        const card = createReviewCard(review, index);
        reviewsContainer.appendChild(card);
    });
}

function saveReviews() {
    try {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    } catch (error) {
        console.error('Error saving reviews:', error);
        alert('There was an error saving the review. Please try again.');
    }
}

// Form submission handler
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;
    const rating = parseInt(ratingInput.value);
    
    if (rating === 0) {
        alert('Please select a rating');
        return;
    }
    
    const newReview = {
        name: name,
        text: reviewText,
        rating: rating,
        timestamp: Date.now()
    };
    
    setCurrentUser(name);
    reviews.push(newReview);
    saveReviews();
    displayReviews();
    
    reviewForm.reset();
    ratingInput.value = "0";
    initStarRating();
    reviewFormPopup.classList.remove('active');
});

// Clear all reviews function (for debugging)
function clearAllReviews() {
    localStorage.clear();
    reviews = [];
    displayReviews();
}
//asd
// Initialize the application
initStarRating();
displayReviews();

// Make clearAllReviews available globally
window.clearAllReviews = clearAllReviews;

// Add this line at the end of your file, after all other initializations
showInitialPopup();
setTimeout(() => {
    reviewFormPopup.classList.add('active');
}, 500);