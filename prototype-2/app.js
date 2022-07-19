const highlighterElem = document.querySelector('nav .highlighter-elem');
const menuItems = document.querySelectorAll('nav a.links');

function scrollObserver() {
	let current = 'home';
	[...navSections].forEach(section => {
		if (scrollY >= section.offsetTop - section.clientHeight / 3)
			current = section.id;
	});
	[...menuItems].forEach(element => {
		element.classList.remove('active');
		if (element.classList.contains(current)) {
			element.classList.add('active');
		}
	});
}

window.addEventListener('scroll', scrollObserver);