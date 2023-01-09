const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail`);

menuEmail.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarritoIcon.addEventListener(`click`, toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideMenuClosed = aside.classList.contains(`inactive`);

    if (!isAsideMenuClosed) {
        aside.classList.add(`inactive`);
    }

    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
    const isAsideMenuClosed = aside.classList.contains(`inactive`);

    if (!isAsideMenuClosed) {
        aside.classList.add(`inactive`);
    }

    mobileMenu.classList.toggle(`inactive`);
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
    const isDesktopMenuClosed = desktopMenu.classList.contains(`inactive`);

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add(`inactive`);
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add(`inactive`);
    }

    aside.classList.toggle(`inactive`);
}