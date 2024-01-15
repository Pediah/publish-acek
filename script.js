document.addEventListener("DOMContentLoaded", function () {
    const headerSection = document.getElementById("header-section");
    const stickyHeader = document.getElementById("stickyHeader");
    const headsSection = document.querySelector(".heads");

    let prevScrollPos = window.pageYOffset;
    let isScrollingUp = true;

    if (headerSection && stickyHeader) {
        window.onscroll = function () {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos < currentScrollPos) {
                // Scrolling down
                isScrollingUp = false;
                headsSection.style.display = "none";
            } else {
                // Scrolling up
                isScrollingUp = true;
                headsSection.style.display = "flex";
            }

            if (isScrollingUp) {
                headerSection.style.top = "0";
            } else {
                headerSection.style.top = "-60px";
            }

            stickyHeader.classList.toggle("visible", currentScrollPos > 200);

            prevScrollPos = currentScrollPos;
        };
    }
});
