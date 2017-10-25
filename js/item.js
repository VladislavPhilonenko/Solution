var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	close = document.querySelector('.hide-menu'),
	props = document.querySelectorAll('.prop'),
	addBtn = document.querySelector('.add'),

	itemCount = document.querySelector('.item-count'),
	priceCount = document.querySelector('.price-count'),

	previewShowElem = document.querySelector('.preview__show'),
	previewImgElem = document.querySelector('.preview__images');

ShowImages();
selectProperty();

searchBtn.onclick = function() {
	searchInput.classList.toggle('change');
}
sandwich.onclick = function() {
	close.style.display = 'block';
};
close.onclick = function() {
	close.style.display = 'none';
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



function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
function setItemCount(o) {
	localStorage.setItem('count', JSON.stringify(o));
  	return false;
}
function getItemCount() {
	return JSON.parse(localStorage.getItem('count'));
}

addBtn.addEventListener("click", changeHeaader);
addBtn.addEventListener( "click", addToCart);

var received = getItemCount();
if(received) {
	itemCount.innerHTML = received[0];
	priceCount.innerHTML = received[1];
}

function changeHeaader() {
	var itemPrice = document.querySelector('.item-info__h2').innerHTML.slice(1);
	itemPrice = +priceCount.innerHTML + +itemPrice;
	priceCount.innerHTML = itemPrice.toFixed(2);
	var countArr = [0, 0];
	itemCount.innerHTML++;
	countArr[0] = +itemCount.innerHTML;
	countArr[1] = priceCount.innerHTML;
	setItemCount(countArr);
}

function addToCart(e){
  	this.disabled = true; 
  	var cartData = getCartData() || {}, 
      	itemId = this.getAttribute('data-id'), 
      	itemTitle = document.querySelector('.item-info__h3').innerHTML,
	  	itemPrice = document.querySelector('.item-info__h2').innerHTML,
		highlighted = document.querySelectorAll('.prop-highlight'),
		size = highlighted[0].innerHTML,
		color = highlighted[1].innerHTML;
  	if(cartData.hasOwnProperty(itemId) && cartData[itemId][2] == size && cartData[itemId][3] == color) { 
    	cartData[itemId][4] += 1;
  	} else if (cartData.hasOwnProperty(itemId)) {
  		if (cartData[itemId][2] != size || cartData[itemId][3] != color) {
	  		var count = 1;
	  		var test = 1;
	  		for (var key in cartData) {
	  			if (cartData[key][0] == itemTitle && cartData[key][2] == size && cartData[key][3] == color) {
	  				cartData[key][4] += 1;
	  				test = 0;
	  			}
		  		count++;
		  	}
		  	count++;
		  	if (test != 0) {
		  		cartData[count] = [itemTitle, itemPrice, size, color,  1];
		  	}
  		}
    } else { 
    	cartData[itemId] = [itemTitle, itemPrice, size, color,  1];
    }
  	if(!setCartData(cartData)){ 
    	this.disabled = false; 
    }
    return false;
}