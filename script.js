const divtoShow = 'nav .menu';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.m-trigger');

divTrigger.addEventListener('click',() => {
    setTimeout(() => {
       if (!divPopup.classList.contains('show')) {
        divPopup.classList.add('show');
        document.body.classList.add('menu-visible')
       } 
    }, 250);
})

//Automatically close by click outside menu 
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);

    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
        document.body.classList.remove('menu-visible')
    }
})

// SEARCH BOX
const sTrigger = document.querySelector('.s-trigger');
const addclass = document.querySelector('.site');
sTrigger.addEventListener('click',() => {
    addclass.classList.toggle('showsearch')
})

// SLIDER

const sliderThumb = new Swiper('.thumb-nav', {
  spaceBetween: 10,
  slidersPerView: 3,
  slidersPerGroup: false,
  breakpoints: {
       992: {
           direction: 'vertical'
       }
  }
});
const theslider = new Swiper('.thumb-big', {
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    thumbs: {
        swiper: sliderThumb,
    }
});

// TABBED Products

const tabbeNav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidersPerView: 6,
    centeredSlides: true,
    slidersPerGroup: false,
});
const theTab = new Swiper('.tabbed-item', {
    loop: true,
    sliderPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbeNav,
    }
});

// ON SCROLL TRANSITION 

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.classList.add('this')
        }
    })
})

const box = document.querySelectorAll('.animate');
    box.forEach((el) => {
        io.observe(el);
    })