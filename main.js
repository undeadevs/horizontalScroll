const hscroll = document.querySelector('.hscroll');
const wrapper = document.querySelector('.wrapper');
const innerWrapper = document.querySelector('.inner-wrapper');

hscroll.style.height = innerWrapper.scrollWidth / 2 + 'px';

window.addEventListener('scroll', e => {
    wrapper.scrollLeft = window.scrollY * 2 - hscroll.offsetTop;
})