var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	nav = document.querySelector('.navbar'),
	close = document.querySelector('.hide-menu'),
	props = document.querySelectorAll('.prop'),
	addBtn = document.querySelector('.add'),

	priceCount = document.querySelector('.price-count'),
	itemCount = document.querySelector('.item-count'),
	euro = document.querySelector('.hidden-euro'),

	previewShowElem = document.querySelector('.preview__show'),
	previewImgElem = document.querySelector('.preview__images');

ShowImages();
selectProperty();


addBtn.onclick = function() {
	+itemCount.innerHTML++;
	var randomPrice = getRandomArbitary(250, 400);
	euro.classList.remove('hidden-euro');
	euro.classList.add('euro');
	randomPrice = +priceCount.innerHTML + +randomPrice.toFixed(2);
	priceCount.innerHTML = +randomPrice.toFixed(2);
}
searchBtn.onclick = function() {
	searchInput.classList.toggle('change');
};
sandwich.onclick = function() {
	sandwich.style.display = 'none';
	nav.style.display = 'block';
	close.style.display = 'block';
};
close.onclick = function() {
	close.style.display = 'none';
	nav.style.display = 'none';
	sandwich.style.display = 'block';
};

window.onresize = function() {
	if (window.innerWidth > 1024) {
        sandwich.style.display = 'none';
        nav.style.display = 'block';
    	close.style.display = 'none';
    }
     if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
     	sandwich.style.display = 'none';
        nav.style.display = 'block';
    	close.style.display = 'none';
    }
    if (window.innerWidth < 768) {
       	sandwich.style.display = 'block';
    	nav.style.display = 'none';
    	close.style.display = 'none';
    }
};

function ShowImages() {
	previewShowElem.children[0].style.display = 'block';
	previewImgElem.children[0].children[1].style.opacity = '1';

	for (let i = 0; i < previewImgElem.children.length; i++) {
		previewImgElem.children[i].addEventListener( "click", function(event) {
			var target = event.target;
			for (var j = 0; j < previewImgElem.children.length; j++) {
				previewImgElem.children[j].children[1].style.opacity = '0';
				previewShowElem.children[j].style.display = 'none';
			}
			previewShowElem.children[i].style.display = 'block';
			target.style.opacity = '1';
		});
	}
}
function selectProperty() {
	for (let i = 0; i < props.length; i++) {
		props[i].addEventListener( "click", function(event) {
			var target = event.target;
			if (target.tagName != "LI" || !target.previousElementSibling) return;

			for (var j = 0; j < props[i].children.length; j++) {
				props[i].children[j].classList.remove('prop-highlight');
			}
			target.classList.add('prop-highlight');
		});
	}
}
function getRandomArbitary(min, max) {
  return Math.random() * (max - min) + min;
}