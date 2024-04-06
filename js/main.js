const input = document.querySelector('input'),
plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
shaps = document.querySelector('.shaps'),
button= document.querySelector('.cart'),
buttonAdd= document.querySelector('form button'),
cratpage =document.querySelector('.crat-page'),
menu= document.querySelector('.menu'),
closes= document.querySelector('.close');

function shap(){
    if(input.value==0){
        shaps.innerHTML = '';
        cratpage.innerHTML=` 
        <h3>
          cart
        </h3>
        <hr>
        <p class="paraghraph">your cart is empty</p>
      `;
    }else{
        cratpage.innerHTML=` 
        <h3>
          cart
        </h3>
        <hr>
        <div class="small">
        <img src="./images/image-product-1-thumbnail.jpg">
        <p>Fall Limited Edition Sneakers 125$ x ${input.value} <span>${input.value * 125}</span></p>
        <img src="./images/icon-delete.svg" class="delete">
      </div>
      <button>checkout</button>
      `;
      const deleteimg = document.querySelector('.delete');
      deleteimg.addEventListener('click',()=>{
        input.value=0
        shaps.innerHTML=''
        shap()
      })
      shaps.innerHTML=parseInt(input.value)
    }
}
plus.addEventListener('click' , ()=>{
    input.value++
})
minus.addEventListener('click' ,()=>{
    if(input.value>0){
        input.value--
    }
})
button.addEventListener('click', ()=>{
    cratpage.classList.toggle('visable')
    shap()
})
buttonAdd.addEventListener('click', ()=>{
    shap()
})
menu.addEventListener('click',()=>{
  document.querySelector('ul').classList.add('active')
  document.querySelector('.gray-b').classList.add('active')
})
closes.addEventListener('click',()=>{
  document.querySelector('ul').classList.remove('active')
  document.querySelector('.gray-b').classList.remove('active')
})

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


var productthumb = new Swiper('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});
var productBig = new Swiper('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productthumb
  }
});