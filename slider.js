let left = document.getElementById('left');
let right = document.getElementById('right');
let slider = document.querySelector('.slider28');
let images = document.querySelector('.img')
var count = 1;

const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${count * 800}px)`;
    count++;
}

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    count = 1;
}
left.addEventListener('click',function(){
    count < length ? nextSlide():firstSlide();
})

const prevSlide = () => {
    slider.style.transform = `translateX(-${(count - 2) * 800}px)`;
    count--;
}
const prevfirst = () => {
    slider.style.transform = `translateX(-${(length-1) * 800}px)`;
    count = length;
}
right.addEventListener('click',function(){
    count < length ? prevSlide():prevfirst();
})