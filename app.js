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
    cart.classList.remove('active');
};

// cart working
  if(document.readystate == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
  }
  else{
    ready()
       

    }
//   making function

function ready(){
    // remove item from cart
    var removeCartBtton =document.getElementsByClassName('cart-remove');
    console.log(removeCartBtton);
    for(var i =0; i< removeCartBtton.length; i++){
        var button =removeCartBtton[i];
        button.addEventListener('click' , removeCartBtton);
    }
}

// remove items from cart{
    function removeCartItem(event){
 var buttonClicked = event.target;
 buttonClicked.parentElement.remove();
    }
