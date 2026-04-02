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
    const heroBgTop = document.getElementById('heroBgTop');
    const heroBgBottom = document.getElementById('heroBgBottom');
    const prevBtn = document.getElementById('prev-banner');
    const nextBtn = document.getElementById('next-banner');
    let currentBannerIndex = 0;

    if (bannerImages.length <= 1) {
        document.querySelector('.slider-arrows').style.display = 'none';
        return;
    }

    function changeBanner(index) {
        heroBgBottom.style.backgroundImage = `url('${bannerImages[index]}')`;
        heroBgTop.classList.add('fade-out');

        setTimeout(() => {
            heroBgTop.style.backgroundImage = `url('${bannerImages[index]}')`;
            heroBgTop.classList.remove('fade-out');
        }, 800);
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

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });


    const megaLinks = document.querySelectorAll('.mega-link');
    const megaPreviewImg = document.getElementById('megaPreviewImg');

    megaLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const img = link.getAttribute('data-img');
            if (img && megaPreviewImg) {
                megaPreviewImg.style.opacity = '0';
                setTimeout(() => {
                    megaPreviewImg.src = img;
                    megaPreviewImg.style.opacity = '1';
                }, 150);
            }
            document.querySelectorAll('.mega-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    // Mobile 2-panel navigation
    const goToSubMenu = document.getElementById('goToSubMenu');
    const backToMain = document.getElementById('backToMain');
    const mobilePanel2 = document.getElementById('mobilePanel2');

    if (goToSubMenu && mobilePanel2) {
        goToSubMenu.addEventListener('click', () => {
            mobilePanel2.classList.add('active');
        });
    }

    if (backToMain && mobilePanel2) {
        backToMain.addEventListener('click', () => {
            mobilePanel2.classList.remove('active');
        });
    }

    // Reset panel khi đóng offcanvas
    const mobileMenuEl = document.getElementById('mobileMenu');
    if (mobileMenuEl && mobilePanel2) {
        mobileMenuEl.addEventListener('hidden.bs.offcanvas', () => {
            mobilePanel2.classList.remove('active');
        });
    }

    // Panel 3: Từ nhà ra tiền
    const goToSubMenu2 = document.getElementById('goToSubMenu2');
    const backToMain2 = document.getElementById('backToMain2');
    const mobilePanel3 = document.getElementById('mobilePanel3');

    if (goToSubMenu2 && mobilePanel3) {
        goToSubMenu2.addEventListener('click', () => {
            mobilePanel3.classList.add('active');
        });
    }

    if (backToMain2 && mobilePanel3) {
        backToMain2.addEventListener('click', () => {
            mobilePanel3.classList.remove('active');
        });
    }

    // Reset panel 3 khi đóng offcanvas
    if (mobileMenuEl && mobilePanel3) {
        mobileMenuEl.addEventListener('hidden.bs.offcanvas', () => {
            mobilePanel3.classList.remove('active');
        });
    }

    document.querySelectorAll('.nav-item-dropdown, .nav-item-dropdown--simple').forEach(item => {
        let hideTimer = null;

        const dropdown = item.querySelector('.mega-dropdown, .simple-dropdown');
        if (!dropdown) return;

        const show = () => {
            clearTimeout(hideTimer);
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.pointerEvents = 'auto';
            dropdown.style.transform = 'translateY(0)';
        };

        const hide = () => {
            hideTimer = setTimeout(() => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.pointerEvents = 'none';
                dropdown.style.transform = 'translateY(-4px)';
            }, 150);
        };

        item.addEventListener('mouseenter', show);
        item.addEventListener('mouseleave', hide);
        dropdown.addEventListener('mouseenter', show);
        dropdown.addEventListener('mouseleave', hide);
    });
});