function toggleDetails(id) {
    const element = document.getElementById(id);
    const allDetails = document.querySelectorAll('.service-details');
    
    // Hide all detail sections
    allDetails.forEach(detail => {
        if (detail.id !== id) {
            detail.style.display = 'none';
        }
    });
    
    // Toggle the clicked one
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Add this new function for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission (which opens the form)
    const form = e.target;
    const formData = new FormData(form);
    const url = form.action;

    console.log('Submitting to:', url);
    console.log('Form data:', Array.from(formData.entries())); // Log data being sent

    // Submit data via Fetch
    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Allows cross-origin POST to Google Forms
    })
    .then(response => {
        console.log('Response status:', response.status); // Should be 0 for no-cors
        // Success: Clear fields and show notification
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        const notification = document.getElementById('form-notification');
        notification.style.display = 'block';
        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Submission error:', error);
        // Optional: Show error notification (add another alert div for errors if needed)
        alert('There was an error submitting your message. Please try again.');
    });
});

// Smooth scrolling for CTAs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});