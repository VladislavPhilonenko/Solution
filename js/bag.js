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

function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}

function resetPriceAndCount() {
	priceCount.innerHTML = '';
	itemCount.innerHTML = 0;
	euro.classList.add('hidden-euro');
	euro.classList.remove('euro');

	localStorage.removeItem('count');
	localStorage.removeItem('cart');
}

function setItemCount(o) {
	localStorage.setItem('count', JSON.stringify(o));
  	return false;
}
function getItemCount() {
	return JSON.parse(localStorage.getItem('count'));
}

var get = getItemCount();
if(get) {
	itemCount.innerHTML = get[0];
	priceCount.innerHTML = get[1];
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
		    numberOfItems += '<h4 class="bag__elem__h4">' + cartData[items][0] + '<h4 class="bag__elem__h4">';
		    numberOfItems += '<h4 class="bag__elem__h2">' + cartData[items][1] + '<h4 class="bag__elem__h2">';
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

showAddedItems();
// function openCart(e){
//   var cartData = getCartData(), // вытаскиваем все данные корзины
//       totalItems = '';
//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if(cartData !== null){
//     totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//     for(var items in cartData){
//       totalItems += '<tr>';
//       for(var i = 0; i < cartData[items].length; i++){
//         totalItems += '<td>' + cartData[items][i] + '</td>';
//       }
//       totalItems += '</tr>';
//     }
//     totalItems += '</table>';
//     cartCont.innerHTML = totalItems;
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'В корзине пусто!';
//   }
//   return false;
// }