let toggleButton = document.querySelector('.toggle-button')
let navbarlinks = document.querySelector('.navbar-links')


toggleButton.addEventListener('click' , ()=>{
    toggleButton.classList.toggle('active');
    navbarlinks.classList.toggle('active');

})

window.onscroll =()=>{
  navbarlinks.classList.remove('active')
 
}

// swipper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
   loop:true,
  });


  



//   menu 
const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.card');

let activeBtn = "featured-item";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

// cart

let cart = document.querySelector('.cart');
let cartBox = document.querySelector('.cartbox');
let closeCart = document.querySelector('#close-cart');


// open cart
cart.onclick =() =>{
    cartBox.classList.add('active');
};

// close cart
closeCart.onclick =() =>{
    console.log('clicked')
    cartBox.classList.remove('active');
};

// cart working
  if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
  }
  else{
    ready();
    }

//   making function
function ready(){
    // remove item from cart
    var removeCartBton =document.getElementsByClassName('cart-remove');
    console.log(removeCartBton);
    for(var i =0; i< removeCartBton.length; i++){
        var button =removeCartBton[i];
        button.addEventListener('click', removeCartItem);
    }
// quantity changes 
    var quantityInputs =document.getElementsByClassName('cart-quantity')
    for(var i =0; i< quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }

    // ADD cart
    var addCart = document.getElementsByClassName('fa-cart-shopping')
    for (var i =0; i< addCart.length; i++){
  var button =addCart[i]
  button.addEventListener('click', addCartClicked); 
}

// buy button work
document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}

function buyButtonClicked(){
    alert('your order is received')
    var   cartContent= document.getElementsByClassName("cart-content")[0];

    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
 
    }
    updateTotal();

}




// remove items from cart{
    function removeCartItem(event){
 var buttonClicked = event.target;
 buttonClicked.parentElement.remove();
       updateTotal(); 
    }

    // quantity changes
    function  quantityChanged(event){
        var input = event.target  
        if (isNaN(input.value) || input.value <=0){
            input.value = 1;
        }
        updateTotal();
    }


    //  add to cart
   function  addCartClicked(event){
    var button =event.target
    var shopProducts = button.parentElement
    var title = shopProducts.querySelectorAll('h3,price')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productPic= shopProducts.getElementsByClassName("product-image")[0].src;
    addProductToCart(title, price, productPic );

    updateTotal();
   
   }
 


   function addProductToCart(title, price, productPic ) {
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-boxItem')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i =0; i< cartItemsNames.length; i++){
        alert('you have already add this item');
        return;
    }
   

    var  cartBoxContent =`
   <img src="${productPic}" alt="" class="cart-img">
   <div class="detail-box">
     <div class="cart-product-title">${title}</div>
     <div class="cart-price">${price}</div>
     <input type="number" value="1" class="cart-quantity">
   </div>
   <!-- remove -->
   <button class="cart-remove">del</button> `;


   cartShopBox.innerHTML = cartBoxContent
   cartItems.append(cartShopBox)
   cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
   cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('click', quantityChanged)


   }

    
   



    // upload total
     function updateTotal (){
        var cartContent = document.getElementsByClassName('cart-content')[0];
        var cartBoxes =  cartContent.getElementsByClassName('cart-boxItem');
        var total= 0
        for(var i =0; i< cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            
            var price = parseFloat(priceElement.innerText.replace("$", ""));
            var quantity = quantityElement.Value ;
            total = total + (price *quantity);
     }
            total = Math.round(total *100)/100;

            document.getElementsByClassName('total-price')[0].innerText ='ksh' + total;
     }
    