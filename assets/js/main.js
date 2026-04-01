function toggleHeart(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('bi-heart')) {
        icon.classList.replace('bi-heart', 'bi-heart-fill');
        btn.classList.add('active');
    } else {
        icon.classList.replace('bi-heart-fill', 'bi-heart');
        btn.classList.remove('active');
    }
}

// Scroll: toggle navbar style
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Filter Pills
function setActive(btn) {
    document.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('active');
        p.classList.add('inactive');
    });
    btn.classList.remove('inactive');
    btn.classList.add('active');
}

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.getElementById('hero-slider');
    if (!sliderWrapper) return;

    const bannerData = sliderWrapper.getAttribute('data-banners');
    if (!bannerData) return;

    const bannerImages = JSON.parse(bannerData);
    const heroBg = document.querySelector('.hero-bg');
    const prevBtn = document.getElementById('prev-banner');
    const nextBtn = document.getElementById('next-banner');
    let currentBannerIndex = 0;

    if (bannerImages.length <= 1) {
        document.querySelector('.slider-arrows').style.display = 'none';
        return;
    }

    function changeBanner(index) {
        heroBg.style.backgroundImage = `url('${bannerImages[index]}')`;
    }

    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        currentBannerIndex--;
        if (currentBannerIndex < 0) {
            currentBannerIndex = bannerImages.length - 1;
        }
        changeBanner(currentBannerIndex);
    });

    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        currentBannerIndex++;
        if (currentBannerIndex >= bannerImages.length) {
            currentBannerIndex = 0;
        }
        changeBanner(currentBannerIndex);
    });

    const offcanvasMenu = document.getElementById('mobileMenu')
    const toggler = document.querySelector('.custom-toggler');
    offcanvasMenu.addEventListener('show.bs.offcanvas', event => {
        toggler.style.display = 'none';
    })
    offcanvasMenu.addEventListener('hidden.bs.offcanvas', event => {
        toggler.style.display = 'flex';
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var sliderElement = document.getElementById('article-slider');

    if (sliderElement) {
        var splide = new Splide(sliderElement, {
            type: 'slide',
            perPage: 3,
            gap: '24px',
            pagination: false,
            arrows: false,
            drag: true,
            snap: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                    padding: { right: '20%' },
                    gap: '16px',
                }
            }
        });
        splide.mount();
    }

    var expertSliderEl = document.getElementById('expert-slider');

    if (expertSliderEl) {
        var expertSplide = new Splide(expertSliderEl, {
            type: 'slide',
            perPage: 4,     
            gap: '24px', 
            pagination: false,  
            drag: true,
            snap: true,
            breakpoints: {
                1200: {
                    perPage: 3,
                },
                991: {
                    perPage: 2,
                },
                576: {
                    perPage: 1,
                    padding: { right: '20%' }, 
                    gap: '16px',
                }
            }
        });
        expertSplide.mount();
    }

    var backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });
});