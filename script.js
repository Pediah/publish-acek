document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    const openContactModalButton = document.getElementById('open-contact-modal');
    const contactFormModal = document.getElementById('contact-form');

    openContactModalButton.addEventListener('click', function () {
        contactFormModal.classList.add('show-modal');
    });

    document.addEventListener('click', function (e) {
        if (!contactFormModal.contains(e.target) && !openContactModalButton.contains(e.target)) {
            contactFormModal.classList.remove('show-modal');
        }
    });

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
