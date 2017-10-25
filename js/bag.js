var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	close = document.querySelector('.hide-menu'),
	removeAllItemsBtn = document.querySelector('.bag-down__btn-empty'),
	bag = document.querySelector('.bag'),
	buyItemsBtn = document.querySelector('.bag-down__btn'),

	priceCount = document.querySelector('.price-count'),
	itemCount = document.querySelector('.item-count'),
	bagDownPrice = document.querySelector('.bag-down__price');

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
}
sandwich.onclick = function() {
	close.style.display = 'block';
};
close.onclick = function() {
	close.style.display = 'none';
};

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

function resetPriceAndCount() {
	priceCount.innerHTML = '0';
	itemCount.innerHTML = 0;
	bagDownPrice.innerHTML = 0;

	localStorage.clear();
}

var received = getItemCount();
if(received) {
	itemCount.innerHTML = received[0];
	priceCount.innerHTML = received[1];
	bagDownPrice.innerHTML = received[1];
}

if (itemCount.innerHTML == 0) {
	h2.innerHTML = 'Your shopping bag is empty. Use catalog  to add new items';
	bag.appendChild(h2);
}

showAddedItems();
removeOneItem();

function removeOneItem() {
	var bagElemsH2 = document.querySelectorAll('.bag__elem__h2');
	var bagElemsH4 = document.querySelectorAll('.bag__elem__h4');
	var bagInfo = document.querySelectorAll('.bag__info');
	var removeItemBtns = document.querySelectorAll('.remove-item-btn');
	for (let i = 0; i < removeItemBtns.length; i++) {
		removeItemBtns[i].addEventListener( "click", function(event) {
			var properties = [];
			var negative = bagElemsH2[i].innerHTML;
			var badWords = ['Color: ', 'Size: ', 'Quantity: '];
			var test = bagInfo[i].children[2].innerHTML;
			for (var k = 0; k < badWords.length; k++) {
  				test  = test.split(badWords[k]).join('');
  			}

  			if (test != 1) {
  				changeHeader();
				var cartData = getCartData();

				for (var item in cartData) {
					if (cartData[item][0] == properties[0] && cartData[item][1] == properties[1] &&
						cartData[item][2] == properties[3] && cartData[item][3] == properties[2]) {
						cartData[item][4] -= 1;
					}
				}
				setCartData(cartData);
  			} else {
  				changeHeader();
				var cartData = getCartData();

				for (var item in cartData) {
					if (cartData[item][0] == properties[0] && cartData[item][1] == properties[1] &&
						cartData[item][2] == properties[3] && cartData[item][3] == properties[2]) {
						delete cartData[item];
					}
				}
				setCartData(cartData);

				bag.innerHTML = '';
				showAddedItems();
				removeOneItem();
				if (itemCount.innerHTML == 0) {
					h2.innerHTML = 'Your shopping bag is empty. Use catalog  to add new items';
					bag.appendChild(h2);
				}
  			}

  			function changeHeader() {
  				test--;
  				negative = negative.slice(1);
  				negative = +priceCount.innerHTML - +negative;
				negative = negative.toFixed(2);
				itemCount.innerHTML = +itemCount.innerHTML - 1;
				priceCount.innerHTML = negative;
				bagDownPrice.innerHTML = negative;
				bagInfo[i].children[2].innerHTML = 'Quantity: ' + test;
				received[0] = +itemCount.innerHTML;
				received[1] = negative;
				setItemCount(received);

				properties.push(bagElemsH4[i].innerHTML);	
				properties.push(bagElemsH2[i].innerHTML);	
				for (var j = 0; j < bagInfo[i].children.length; j++) {
					var test2 = bagInfo[i].children[j].innerHTML;
					for (var k = 0; k < badWords.length; k++) {
		  				test2  = test2.split(badWords[k]).join('');
		  			}
					properties.push(test2);
				}
  			}

			// negative = negative.slice(1);
	  		// negative *= +test;
	  		// negative = +priceCount.innerHTML - +negative;
			// negative = negative.toFixed(2);

			// itemCount.innerHTML = +itemCount.innerHTML - +test;
			// priceCount.innerHTML = negative;
			// bagDownPrice.innerHTML = negative;
			// received[0] = +itemCount.innerHTML;
			// received[1] = negative;
			// setItemCount(received);

			// properties.push(bagElemsH4[i].innerHTML);	
			// properties.push(bagElemsH2[i].innerHTML);	
			// for (var j = 0; j < bagInfo[i].children.length; j++) {
			// 	var test = bagInfo[i].children[j].innerHTML;
			// 	for (var k = 0; k < badWords.length; k++) {
	  		// 		test  = test.split(badWords[k]).join('');
	  		// 	}
			// 	properties.push(test);
			// }

			// var cartData = getCartData();

			// for (var item in cartData) {
			// 	if (cartData[item][0] == properties[0] && cartData[item][1] == properties[1] &&
			// 		cartData[item][2] == properties[3] && cartData[item][3] == properties[2]) {
			// 		delete cartData[item];
			// 	}
			// }
			// setCartData(cartData);

			// bag.innerHTML = '';
			// showAddedItems();
			// removeOneItem();
			// if (itemCount.innerHTML == 0) {
			// 	h2.innerHTML = 'Your shopping bag is empty. Use catalog  to add new items';
			// 	bag.appendChild(h2);
			// }
		});
	}
}

function showAddedItems() {
	var cartData = getCartData();
	var numberOfItems = '';
	if (cartData !== null) {
		for(var items in cartData) { 
			numberOfItems =
			`<figure class="bag__elem wrapper">
				<div class="new-arrivals__img">
					<img src="images/arrivals-img-5.jpg" alt="item">
					<a class="more wrapper" href="item.html">View item</a>
				</div>`;
			numberOfItems += '<figcaption>';
		    numberOfItems += '<h4 class="bag__elem__h4">' + cartData[items][0] + '</h4>';
		    numberOfItems += '<h2 class="bag__elem__h2">' + cartData[items][1] + '<h2>';
		    numberOfItems += '<div class="bag__info">';
		    numberOfItems += '<p class="bag__elem__p">Color: ' + cartData[items][3] + '</p>';
		    numberOfItems += '<p class="bag__elem__p">Size: ' + cartData[items][2] + '</p>';
		    numberOfItems += '<p class="bag__elem__p">Quantity: ' + cartData[items][4] + '</p>';
		    numberOfItems += '</div>';
		    numberOfItems += '<button class="remove-item-btn" type="button">Remove item</button>';
		    numberOfItems += '</figcaption>';
		    numberOfItems += '</figure>';
		    bag.innerHTML += numberOfItems;
		}
	} else {
		h2.innerHTML = 'Your shopping bag is empty. Use catalog  to add new items';
		bag.appendChild(h2);
	}
}