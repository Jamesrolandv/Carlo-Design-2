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

// preloader========================================================
const preload = document.getElementById('preloader');
let countDownIndex = 3;
window.addEventListener('load', () => {
    let countDown = setInterval(() => {
        document.querySelector('#preloader h2').textContent = 'Waiting in... ' + countDownIndex;
        countDownIndex -= 1;
        if(countDownIndex < 0){
            clearInterval(countDown);
            preload.style.display = 'none';
        };
    }, 1000);
    setTimeout(countDown);
    
});

// setTimeOut=======================================================

let count = 1;
const sliderBg = () => {
    const slider = setInterval(() => {
        document.getElementById('bg' + count).checked = true;
        count++;
        if(count > 3){
            count = 1;
        }
    }, 10000);

    document.querySelectorAll('.manual-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(slider);
            sliderBg();
        })
    })
}
sliderBg();



// navigation========================================================

document.addEventListener('scroll', () => {
    const navi = document.querySelector('nav');
    if(window.scrollY > 0){
        navi.classList.add('scroll-nav');
    }else {
        navi.classList.remove('scroll-nav');
    }
});

// Intersection=======================================================

const pics = document.querySelectorAll('.pic');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('pic-showing', entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target);
    })
}, {
    threshold: .2,
    
});
pics.forEach(pic => {
    observer.observe(pic);
});



const imgs = document.querySelectorAll('.imgs');

let imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('showing', entry.isIntersecting);
        if(entry.isIntersecting) imgObserver.unobserve(entry.target);
    });
});

imgs.forEach(img => {
    imgObserver.observe(img);
})