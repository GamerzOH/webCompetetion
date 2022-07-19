const fadeItems = document.querySelectorAll('.fade.item');
const loader = document.getElementById('loader');
const highlighterElem = document.querySelector('nav .highlighter-elem');
const menuItems = document.querySelectorAll('nav a.links');
const navSections = document.getElementsByTagName('section');
const contactForm = document.querySelector('.form');
const slidesCont = contactForm.querySelector('.slides-cont');
const nextDoneFormBtn = contactForm.querySelector('.top-bar .btn.next-btn');
const backFormBtn = contactForm.querySelector('.top-bar .btn.back-btn');
const contactFormProgressBar = contactForm.querySelector('.progress-bar');

function setNextBtn() {
    if (slidesCont.style.getPropertyValue('transform') === 'translateX(-100%)') {
		nextDoneFormBtn.textContent = 'Done';
	} else if (
		slidesCont.style.getPropertyValue('transform') === 'translateX(0%)'
	) {
		nextDoneFormBtn.textContent = 'Next';
	}
}

function nextBtnCLick() {
    if (slidesCont.style.getPropertyValue('transform') === 'translateX(0%)') {
        slidesCont.style.transform = 'translateX(-100%)';
        setNextBtn();
        contactFormProgressBar.style.width = '50%';
    }
    // console.log(slidesCont.style.getPropertyValue('transform'))
}

function backBtnClick() {
    if (slidesCont.style.getPropertyValue('transform') === 'translateX(-100%)') {
        slidesCont.style.transform = 'translateX(0%)';
        setNextBtn();
        contactFormProgressBar.style.width = '0%';
    }
}

let currentELem = 0;
function fadeIn() {
    if (currentELem < fadeItems.length) {
        setTimeout(() => {
            fadeItems[currentELem].style.opacity = 1;
            currentELem++;
            fadeIn();
        }, 1200);
    }
}

function scrollObserver() {
    let current = 'home';
    [...navSections].forEach((section) => {
        if (scrollY >= section.offsetTop - section.clientHeight / 3) current = section.id;
    });
    [...menuItems].forEach((element) => {
        element.classList.remove('active');
        if (element.classList.contains(current)) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', scrollObserver);

window.addEventListener('load', function () {
    loader.style.transform = 'translateY(-100%)';
    fadeIn();
    setNextBtn;
    setTimeout(function () {
        document.body.removeChild(loader)
    }, 500)
});

nextDoneFormBtn.onclick = nextBtnCLick;

backFormBtn.onclick = backBtnClick;