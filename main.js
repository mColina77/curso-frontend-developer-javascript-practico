const menuEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarritoIcon = document.querySelector(`.navbar-shopping-cart`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);

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


const productList = [];
productList.push({
    name: `Bike`,
    price: 120,
    Image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
});
productList.push({
    name: `Monitor`,
    price: 210,
    Image: `https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});
productList.push({
    name: `Photographic camera`,
    price: 550,
    Image: `https://images.pexels.com/photos/7420955/pexels-photo-7420955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});
productList.push({
    name: `Motorcicle`,
    price: 12000,
    Image: `https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});
productList.push({
    name: `Book`,
    price: 30,
    Image: `https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});
productList.push({
    name: `Notebook`,
    price: 720,
    Image: `https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement(`img`);
        productImg.setAttribute(`src`, product.Image);
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        const productInfoDiv = document.createElement(`div`);
    
        const productPrice = document.createElement(`p`);
        productPrice.innerText = `$ ` + product.price;
        const productName = document.createElement(`p`);
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement(`figure`);
        const productImgCard = document.createElement(`img`);
        productImgCard.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);