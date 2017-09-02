var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	nav = document.querySelector('.navbar'),
	close = document.querySelector('.hide-menu'),
	removeAllItemsBtn = document.querySelector('.bag-down__btn-empty'),
	bag = document.querySelector('.bag'),
	buyItemsBtn = document.querySelector('.bag-down__btn'),

	priceCount = document.querySelector('.price-count'),
	itemCount = document.querySelector('.item-count'),
	euro = document.querySelector('.euro');

var h2 = document.createElement('h2');
h2.classList.add('bag-alert');

buyItemsBtn.onclick = function() {
	if (bag.children[0].tagName == "H2") return;
	var bagElems = document.querySelectorAll('.bag__elem');
	for (var i = 0; i < bagElems.length; i++) {
		bag.removeChild(bagElems[i]);
	}

	h2.innerHTML = 'Thank you for your purchase';
	bag.appendChild(h2);
	resetPriceAndCount();
}
removeAllItemsBtn.onclick = function() {
	if (bag.children[0].tagName == "H2") return;
	var bagElems = document.querySelectorAll('.bag__elem');
	for (var i = 0; i < bagElems.length; i++) {
		bag.removeChild(bagElems[i]);
	}
	h2.innerHTML = 'Your shopping bag is empty. Use catalog  to add new items';
	bag.appendChild(h2);
	resetPriceAndCount();
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

function resetPriceAndCount() {
	priceCount.innerHTML = '';
	itemCount.innerHTML = 0;
	euro.classList.add('hidden-euro');
	euro.classList.remove('euro');
}