document.addEventListener('DOMContentLoaded', function () {
    // Inicialização do Swiper para o slider de banners
    if (document.querySelector('.banner-swiper')) {
        const bannerSwiper = new Swiper('.banner-swiper', {
            loop: true, 
            slidesPerView: 1, 
            autoplay: {
                delay: 4000, 
                disableOnInteraction: false, 
            },
            pagination: {
                el: '.swiper-pagination', 
                clickable: true, 
            },
            navigation: {
                nextEl: '.swiper-button-next', 
                prevEl: '.swiper-button-prev', 
            },
            effect: 'fade', 
            fadeEffect: {
                 crossFade: true
            },
        });
    }

    // ScrollReveal unificado (Contém a nova seção de Banner Inicial)
    ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 700
    }).reveal(`
        #promo-hero-banner,
        #welcome-content,
        #welcome-content .col-a,
        #welcome-content .col-b,
        #welcome-content .stats,
        #products,
        #products header,
        .product-card,
        #testimonials,
        #testimonials .feedback-card,
        #banner-slider-area,
        #banner-slider-area header,
        .banner-swiper,
        #about, 
        #contact,
        #contact .col-a,
        #contact .col-b
    `); 

    // Filtro de Busca da Vitrine
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const cardName = card.getAttribute('data-name') || '';
                if (cardName.includes(searchTerm)) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}); 

const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');
const welcomeContent = document.getElementById('welcome-content');
const productsSection = document.getElementById('products');
const testimonials = document.getElementById('testimonials'); 
const bannerSliderArea = document.getElementById('banner-slider-area'); 
const contact = document.getElementById('contact');

window.addEventListener('scroll', onScroll);
onScroll(); 

function onScroll() {
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    if (welcomeContent) activateMenuAtCurrentSection(welcomeContent);
    if (productsSection) activateMenuAtCurrentSection(productsSection);
    if (testimonials) activateMenuAtCurrentSection(testimonials); 
    if (bannerSliderArea) activateMenuAtCurrentSection(bannerSliderArea); 
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

let cartItemsCount = 0;
function addToCart(productName) {
    cartItemsCount++;
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.innerText = cartItemsCount;
    }
    window.open("https://wa.me/558499507938?text=Olá! Gostaria de fechar o seguinte encarte: " + encodeURIComponent(productName), "_blank");
}
