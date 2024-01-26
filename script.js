document.addEventListener("DOMContentLoaded", function () {
    // Add a mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Open and close contact form modal
    const openContactModalButton = document.getElementById('open-contact-modal');
    const contactFormModal = document.getElementById('contact-form');

    openContactModalButton.addEventListener('click', function () {
        contactFormModal.classList.add('show-modal');
    });

    // Close modal when clicking outside the form
    document.addEventListener('click', function (e) {
        if (!contactFormModal.contains(e.target) && !openContactModalButton.contains(e.target)) {
            contactFormModal.classList.remove('show-modal');
        }
    });

    // Scroll reveal animation (optional, if you need it)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Add your animation class here
            }
        });
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
// JavaScript for toggle menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// JavaScript for showing words one after the other
document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.word');
    let index = 0;

    function showWord() {
        if (index < words.length) {
            words[index].style.opacity = '1';
            index++;
            setTimeout(showWord, 1000); // Adjust the delay as needed (in milliseconds)
        }
    }

    showWord(); // Start the animation
});


