let currentSlide = 0;
let slidesList = document.querySelectorAll('.slide');

let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');

previousBtn.addEventListener('click',previousSlide);
nextBtn.addEventListener('click',nextSlide);

function nextSlide(){
    slidesList[currentSlide].style.display='none';
    currentSlide++;
    if (currentSlide>=slidesList.length){
        currentSlide=0;
    }
    slidesList[currentSlide].style.display='block';
}

function previousSlide(){
    slidesList[currentSlide].style.display='none';
    currentSlide--;
    if (currentSlide<0){
        currentSlide=slidesList.length-1;
    }
    slidesList[currentSlide].style.display='block';
}


