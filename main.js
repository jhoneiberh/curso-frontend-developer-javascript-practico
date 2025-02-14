const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseICon = document.querySelector('.product-detail-close');


const productDetailContainer = document.querySelector('#productDetail');

menuCarritoIcon.addEventListener('click', toggleAsideProducts);


menu.addEventListener('click', toggleMenuMobile);

navbar_email.addEventListener('click', toggleDesktopMenu);

productDetailCloseICon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu()
{   
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if ( !isAsideClosed ) 
    {
        shoppingCartContainer.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}


function toggleMenuMobile()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    mobile_menu.classList.toggle('inactive');

    if( !isAsideClosed )
    {
        shoppingCartContainer.classList.add('inactive');
    }
    productDetailContainer.classList.add('inactive');
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


    shoppingCartContainer.classList.toggle('inactive');
    desktop_menu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
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


function openProductDetailAside()
{
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktop_menu.classList.add('inactive');
}

function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
}
function showProducts(params) 
{
    for (iterator of productList) 
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', iterator.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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