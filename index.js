// Show Newsletter Modal after 2000ms of laading window
    // const newsletterInterval = setInterval(() => {
    //     document.querySelector("#newsletter_popup_overlay").classList.add('open_newsletter_modal');
    // }, 2000);

// Toggle Open Mobile Navbar
var clicked = false;

function toggoleMenu(menuIcon) {
    clicked = !clicked;

    if (clicked) {
        menuIcon.querySelector('img').src = "./assets/images/X.png";
        document.querySelector('.navbar_menu').style.left = "0";
    }
    else {
        menuIcon.querySelector('img').src = "./assets/images/Bars.png";
        document.querySelector('.navbar_menu').style.left = "-100%";
    }
}

// Close Newsletter Popup
function closeNewsletterModal() {
    document.querySelector('#newsletter_popup_overlay').classList.remove('open_newsletter_modal');
    clearInterval(newsletterInterval);
}

// Open Sort Option on Product page
var sortOpen = false;
var sortClose = false;

function openSort() {
    sortOpen = true;

    if (sortOpen) {
        document.querySelector('#sort_aside').classList.add('sort_open');
    }
    else {
        return;
    }
}

function closeSort() {
    sortClose = true;

    if (sortClose) {
        document.querySelector('#sort_aside').classList.remove('sort_open');
    }
    else {
        return;
    }
}