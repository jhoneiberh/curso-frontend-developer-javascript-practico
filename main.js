const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside_products = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


menuCarritoIcon.addEventListener('click', toggleAsideProducts);


menu.addEventListener('click', toggleMenuMobile);

navbar_email.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu()
{   
    const isAsideClosed = aside_products.classList.contains('inactive');
    if ( !isAsideClosed ) 
    {
        aside_products.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
}


function toggleMenuMobile()
{
    const isAsideClosed = aside_products.classList.contains('inactive');
    mobile_menu.classList.toggle('inactive');

    if( !isAsideClosed )
    {
        aside_products.classList.add('inactive');
    }
}


function toggleAsideProducts()
{
    
    const isMobileMenuClosed = mobile_menu.classList.contains('inactive');

    // abrir el aside
    // Si el mobileMenu esta abierto, hay que cerrarlo
    if ( !isMobileMenuClosed ) 
    {
        mobile_menu.classList.add('inactive');
    }


    aside_products.classList.toggle('inactive');
    desktop_menu.classList.add('inactive');
}




/* Products Card */

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Display',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Display',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function showProducts(params) 
{
    for (iterator of productList) 
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', iterator.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + iterator.price;
    
        const productName = document.createElement('p');
        productName.innerText = iterator.name;
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productInfoFigure.append(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo); 
    
    
        cardsContainer.append(productCard);
    }
}

showProducts();