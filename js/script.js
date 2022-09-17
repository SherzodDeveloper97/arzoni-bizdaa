/* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */

// humburger menu - open
const burger = document.querySelector('.burger');
const navMain = document.querySelector('.nav_main');

burger.addEventListener('click', () => {
    navMain.classList.toggle('active');
    burger.classList.toggle('toggle');
})

// Body Not-Scroll
const menuBtn = document.querySelector(".burger");
let menuOpen = false;
var x = document.getElementsByTagName("BODY")[0];

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            x.style.overflow = 'hidden';
        }
        else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            x.style.overflow = 'visible';
        }
    });

// humburger menu - close

/* scroll-to-top button - start */

const toTop = document.querySelector(".to_top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 800){
        toTop.classList.add("active_up");
    }else{
        toTop.classList.remove("active_up");
    }
})

/* scroll-to-top button - end */

/* Modal windows - open */

// const modal = document.querySelector('.for_cooperation');
// const toOrder = document.querySelector('.to_order');
// const watchVideo = document.querySelector('.watch_the_video');
// const contact_us = document.querySelector('.contact_us');
// const order = document.querySelector('.order');
// const orderOther = document.querySelector('.order_other');
// const modal_window = document.querySelector('.modal_window');
// const modal_order = document.querySelector('.modal_order');
// const close_modal = document.querySelector('.close');

// if(document.querySelector('.modal_window')){

//   modal.addEventListener("click", function(){
//       modal_window.classList.toggle('modal_active');
//   });


//   watchVideo.addEventListener("click", function(){
//     modal_window.classList.toggle('modal_active');
//   });

//   contact_us.addEventListener("click", function(){
//     modal_window.classList.toggle('modal_active');
//   });

//   order.addEventListener("click", function(){
//     modal_window.classList.toggle('modal_active');
//   });

//   orderOther.addEventListener("click", function(){
//     modal_window.classList.toggle('modal_active');
//   });

//   close_modal.addEventListener("click", function(){
//       modal_window.classList.remove('modal_active');
//   })
// }
/* Modal windows - close */

/* Modal Order - open */
// if(document.querySelector(".modal_order")){
//   toOrder.addEventListener("click", function(){
//     modal_order.classList.toggle('modal_active');
//   });
// }
/* Modal Order - close */

/* Universal Modal - open */
function modals(mdContainerName, btnOpenName,btnCloseName){
  const mdName = document.querySelector(mdContainerName);
  const btnOpen = document.querySelector(btnOpenName);
  const btnClose = document.querySelector(btnCloseName);

  btnOpen.addEventListener("click", function(){
    mdName.classList.add("modal_active");
  });

  btnClose.addEventListener("click", function(){
    mdName.classList.remove("modal_active");
  });

  document.addEventListener('click', function(e){
    const target = e.target;
    if(target == mdName){
      mdName.classList.remove("modal_active");
    }
  })

}

if(document.querySelector("#modal_cooperation")){
  modals("#modal_cooperation",'.contact_us','#close_md_cooperation');
}
if(document.querySelector("#modal_order")){
  modals("#modal_order",'.for_cooperation','#close_md_order');
}
if(document.querySelector("#modal_order")){
  modals("#modal_order",'.to_order','#close_md_order');
}
if(document.querySelector("#modal_order")){
  modals("#modal_order",'#order','#close_md_order');
}
if(document.querySelector("#modal_order")){
  modals("#modal_order",'#order_other','#close_md_order');
}
/* Universal Modal - close */

// Click nav_item - open
const clickArrow = document.querySelector('.click_arrow');
const navList = document.querySelector('.nav_item_list');

clickArrow.addEventListener("click",function(){
    navList.classList.toggle('list_active1');
})
// Click nav_item - close

// Click Languages - open
const clickLang = document.querySelector('.click_lang');
const langList = document.querySelector('.lang_list');
const langArrow = document.querySelector('.click_arrow_lang');
const langHead = document.querySelector('.nav_lang_head');

clickLang.addEventListener("click", function(){
    langList.classList.toggle('list_active2');
});
langArrow.addEventListener("click",function(){
    langList.classList.toggle('list_active2');
})
// Click Languages - close




// Scroll Spy - Menu
// variables
let links = document.querySelectorAll('li a');
let sections = document.querySelectorAll('section');


// add class active & go to section When navigate Links
links.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    let ele = document.querySelector(`section.${e.target.id}`)
    ele.scrollIntoView({
      behavior:"smooth"
    })
    links.forEach(el=>{el.classList.remove('nav_active')})
    e.target.classList.add('nav_active')
  })
})

// add class active & go to section When scroll Links
window.onscroll = ()=>{
  sections.forEach(section =>{
    if(window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight){

      let ele = document.querySelector(`#${section.classList[0]}`)

      links.forEach(li=>{
        li.classList.remove('nav_active');
      })


      ele.classList.add('nav_active');
    }
  })
}
