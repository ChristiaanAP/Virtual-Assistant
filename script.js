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
// Smooth scrolling for CTAs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});