// on scroll=====================================
// const experiment = document.querySelector('.window');
// const img = document.querySelector('img');
// window.addEventListener('scroll', () => {
//     let wScroll = this.scrollY;
//     let opacity = (wScroll - experiment.offsetTop + 800) / wScroll;
//     let offset = Math.min(600, wScroll - experiment.offsetTop + window.innerHeight - 200);
//     if(wScroll > experiment.offsetTop - window.innerHeight){
//         img.style.transform = `translateX(-${(offset * .5)}px)`;
//         document.querySelector('p').style.opacity = opacity;
//         document.querySelector('p').style.transform = `translateX(${offset * .5}px)`;
        
//     }
// })


// let observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
        
//     })
// }, {
//     threshold: .2,
// });
// observer.observe(experiment);

// setTimeOut=======================================================

let count = 1;
setInterval(() => {
    document.getElementById('bg' + count).checked = true;
    count++;
    if(count > 3){
        count = 1;
    }
}, 10000);

// navigation========================================================

const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-times');

navOpen.addEventListener('click', () => {
    document.querySelector('nav ul').style.transform = 'translateX(0)';
})
navClose.addEventListener('click', () => {
    document.querySelector('nav ul').style.transform = 'translateX(250px)';
})