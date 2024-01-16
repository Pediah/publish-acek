document.addEventListener("DOMContentLoaded", function () {
    const headerSection = document.getElementById("header-section");
    const stickyHeader = document.getElementById("stickyHeader");
    const headsSection = document.querySelector(".heads");

    let prevScrollPos = window.pageYOffset;

    if (headerSection && stickyHeader && headsSection) {
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos < currentScrollPos) {
                // Scrolling down
                headsSection.style.display = "none";
            } else {
                // Scrolling up
                headsSection.style.display = "flex";
            }

            if (currentScrollPos === 0) {
                // Reached the top of the page
                headsSection.style.display = "flex";
            }

            if (currentScrollPos > 200) {
                // Add or remove the 'visible' class based on scroll position
                stickyHeader.classList.add("visible");
            } else {
                stickyHeader.classList.remove("visible");
            }

            prevScrollPos = currentScrollPos;
        };

        var lastScrollTop = 0;
        navbar = document.getElementById("heads");
        window.addEventListener("scroll", function() {
            var scrolltop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolltop > lastScrollTop) {
                headsSection.style.top = "-80px";
            } else {
                headsSection.style.top = "0";
            }
            lastScrollTop = scrolltop;
        });
    }
});
