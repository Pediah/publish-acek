document.addEventListener("DOMContentLoaded", function () {
    const headsSection = document.querySelector('.heads');
    let lastScrollTop = 0;

    function handleScroll() {
        const currentScrollTop = window.scrollY;

        // Toggle visibility using display property
        headsSection.style.display = currentScrollTop > lastScrollTop ? 'none' : 'block';

        // Handle position of .heads based on scroll direction
        headsSection.style.top = currentScrollTop > lastScrollTop ? "-80px" : "0";

        // Add or remove "scrolled" class based on scroll position
        headsSection.classList.toggle("scrolled", window.scrollY > 0);

        lastScrollTop = currentScrollTop;
    }

    // Add a single scroll event listener with smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener for the smooth scroll and heads behavior
    window.addEventListener('scroll', handleScroll);

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

    // Scroll reveal animation
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
