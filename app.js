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

let activeBtn = "featured";

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

