document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for the banner slider
    if (document.querySelector('.banner-swiper')) {
        const bannerSwiper = new Swiper('.banner-swiper', {
            loop: true, // Enables continuous loop mode
            slidesPerView: 1, // Show one slide at a time
            // spaceBetween: 20, // Optional space between slides
            autoplay: {
                delay: 4000, // Delay between transitions (in ms)
                disableOnInteraction: false, // Autoplay will not be disabled after user interactions
            },
            pagination: {
                el: '.swiper-pagination', // CSS selector for pagination container
                clickable: true, // Allows clicking on pagination dots to navigate
            },
            navigation: {
                nextEl: '.swiper-button-next', // CSS selector for next button
                prevEl: '.swiper-button-prev', // CSS selector for previous button
            },
            effect: 'fade', // Optional: adds a fade effect instead of slide
            fadeEffect: {
                 crossFade: true
            },
        });
    }

    // Existing ScrollReveal (updated to include new section and remove old #about children)
    ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700
    }).reveal(`
        #welcome-content,
        #welcome-content .col-a,
        #welcome-content .col-b,
        #welcome-content .stats,
        #services,
        #services header,
        #services .card,
        #banner-slider-area,
        #banner-slider-area header,
        .banner-swiper,
        #about, /* Reveals the entire #about section (now containing the banner image) */
        #contact,
        #contact .col-a,
        #contact .col-b
        `); 
}); // End of DOMContentLoaded

const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');

const welcomeContent = document.getElementById('welcome-content');
const services = document.getElementById('services');
const bannerSliderArea = document.getElementById('banner-slider-area'); // Used for menu activation
const about = document.getElementById('about'); 
const contact = document.getElementById('contact');


window.addEventListener('scroll', onScroll);
onScroll(); // Initial call

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    if (welcomeContent) activateMenuAtCurrentSection(welcomeContent);
    if (services) activateMenuAtCurrentSection(services);
    if (bannerSliderArea) activateMenuAtCurrentSection(bannerSliderArea); // CHANGED: Re-enabled for "Destaque" link
    if (about) activateMenuAtCurrentSection(about); // This will still run if an #about section exists, but it's not linked in nav.
    if (contact) activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    if (!section) return;

    const targetLine = scrollY + innerHeight / 2;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*="#${sectionId}"]`);

    if (menuElement) {
        menuElement.classList.remove('active');
        if (sectionBoundaries) {
            menuElement.classList.add('active');
        }
    }
}

function showNavOnScroll() {
    if (navigation) {
        if (scrollY > 0) {
            navigation.classList.add('scroll');
        } else {
            navigation.classList.remove('scroll');
        }
    }
}

function showBackToTopButtonOnScroll() {
    if (backToTopButton) {
        if (scrollY > 550) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}