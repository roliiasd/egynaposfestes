// DOM Elements
const addReviewBtn = document.getElementById('addReviewBtn');
const reviewFormPopup = document.getElementById('reviewFormPopup');
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const starRating = document.querySelector('.star-rating');
const ratingInput = document.getElementById('rating');
const stars = starRating.getElementsByTagName('i');

// Change this URL to match your server's path
const API_BASE_URL = 'https://egynaposfestes.hu/reviews';


let reviews = [];
let currentImagePath = null;

// Image handling
document.getElementById('reviewImage').addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (file) {
        // Show preview
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        }
        reader.readAsDataURL(file);
        
        // Upload and convert to Base64
        await uploadImage(file);
    }
});

async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
        const response = await fetch(`${API_BASE_URL}/upload_image.php`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.success) {
            currentImagePath = result.image_data;
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error uploading image: ' + error.message);
    }
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

// Show popup on page load
setTimeout(() => {
    reviewFormPopup.classList.add('active');
}, 500);

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

// Update fetch calls with proper error handling
async function fetchReviews() {
    try {
        const response = await fetch(`${API_BASE_URL}/get_reviews.php`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        reviews = data;
        displayReviews();
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

function createReviewCard(review, index) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const currentUser = getCurrentUser();
    if (currentUser === review.name) {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteReview(review.id));
        card.appendChild(deleteBtn);
    }

    const name = document.createElement('h3');
    name.textContent = review.name;

    const stars = document.createElement('div');
    stars.className = 'review-stars';
    stars.innerHTML = createStarDisplay(review.rating);

    // Add image if exists (using Base64 data)
    if (review.image_path) {
        const image = document.createElement('img');
        image.src = review.image_path; // Base64 data
        image.className = 'review-card-image';
        image.alt = 'Review image';
        image.loading = 'lazy'; // Enable lazy loading
        card.appendChild(image);
    }

    const text = document.createElement('p');
    text.textContent = review.text;

    card.appendChild(name);
    card.appendChild(stars);
    card.appendChild(text);

    return card;
}

async function deleteReview(id) {
    const currentUser = getCurrentUser();
    const review = reviews.find(r => r.id === id);

    if (!review || currentUser !== review.name) {
        alert('You can only delete your own reviews!');
        return;
    }

    if (confirm('Are you sure you want to delete this review?')) {
        try {
            const response = await fetch(`${API_BASE_URL}/delete_review.php?id=${id}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.success) {
                fetchReviews(); // Refresh reviews after deletion
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Error deleting review:', error);
            alert('Error deleting review. Please try again.');
        }
    }
}

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        const card = createReviewCard(review, index);
        reviewsContainer.appendChild(card);
    });
}

// User management
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

function setCurrentUser(name) {
    localStorage.setItem('currentUser', name);
}

// Form submission
// Update form submission
reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;
    const rating = parseInt(ratingInput.value);
    
    if (rating === 0) {
        alert('Please select a rating');
        return;
    }
    
    const newReview = {
        name,
        text: reviewText,
        rating,
        image_data: currentImagePath
    };
    
    try {
        const response = await fetch(`${API_BASE_URL}/save_review.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message);
        }
        
        setCurrentUser(name);
        await fetchReviews();
        
        // Reset form
        reviewForm.reset();
        document.getElementById('imagePreview').innerHTML = '';
        currentImagePath = null;
        ratingInput.value = "0";
        initStarRating();
        reviewFormPopup.classList.remove('active');
        
    } catch (error) {
        console.error('Error saving review:', error);
        alert('Error saving review: ' + error.message);
    }
});

fetchReviews();

// Debug function
function clearAllReviews() {
    localStorage.clear();
    reviews = [];
    displayReviews();
}

// Make clearAllReviews available globally
window.clearAllReviews = clearAllReviews;
