
let slidebtnl = document.getElementById("btnl")
let slidebtnr = document.getElementById("btnr") 
let imgitem=document.querySelectorAll(".image-item")
console.log(imgitem.length-1)
let start=0
let end=(imgitem.length-1)*100 


slidebtnl.addEventListener("click",handleleft)
function handleleft(){

    if(start< 0)
   {
    start=start+100;
    
}

    imgitem.forEach(element=>{
        element.style.transform=`translateX(${start}%)`;
    })
   
}


slidebtnr.addEventListener("click",handleright)
function handleright(){
   if(start>= -end+100)
   {
    start=start-100;
}

    imgitem.forEach(element=>{
        element.style.transform=`translateX(${start}%)`;
    })

    
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


function render(){
   
   if(start >= -end+100){
    handleright()
    
   }
   else{
      start=0;
     handleleft()
   }
   handleTransition();
}
setInterval(render,2000);

const sidebarnav=document.getElementById("sidebarcontainer")
const sidebaropen=document.getElementById("navid")
const sidebarclose=document.getElementById("close")


sidebaropen.addEventListener("click",()=>{
    sidebarnav.classList.toggle("slidebar-show")
    
})
sidebarclose.addEventListener("click",()=>{
    sidebarnav.classList.toggle("slidebar-show")
})
function scrollToTop() {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
    var scrollTopBtn = document.getElementById('top');
    
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

let btnl = document.getElementById("left")
let btnr = document.getElementById("right") 
let currentIndex = 0;



function showSlide(index) {
    const sliderWrapper = document.querySelector('.today-deals-product-list');
    const slides = document.querySelectorAll('.size-img');
    const slideWidth = slides[0].offsetWidth;

    currentIndex = index;

    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

btnr.addEventListener("click",nextSlide)
function nextSlide() {
    const slides = document.querySelectorAll('.size-img');
    if (currentIndex < slides.length - 6) {
      currentIndex=currentIndex+3;
    } else {
        showSlide(currentIndex);
    }
    showSlide(currentIndex);
  }


btnl.addEventListener("click",prevSlide)
  function prevSlide() {
    const slides = document.querySelectorAll('.size-img');
    if (currentIndex > 0) {
      currentIndex=currentIndex-3;
    } else {
        showSlide(currentIndex);
      
    }
    showSlide(currentIndex);
}
const r=document.querySelector('.r-btn');
const l=document.querySelector('.l-btn');
r.addEventListener("click",
    function (event) 
    {
       const conent=document.querySelector(".productslide");
       conent.scrollLeft+=1100;
        event.preventDefault();
    }
);

l.addEventListener("click",
    function (event) 
    {
       const conent=document.querySelector(".productslide");
       conent.scrollLeft-=1100;
        event.preventDefault();
    }
);



