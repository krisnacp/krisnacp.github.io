/* mobile toggle navigation */
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    // console.log(visibility);
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});
/* end of mobile toggle navigation */

/* animation canceler when the page resized */
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
/* end of animation canceler when the page resized */

/* scroll page*/
