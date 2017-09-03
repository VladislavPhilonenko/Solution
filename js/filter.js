var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),

	sandwich = document.querySelector('.sandwich'),
	nav = document.querySelector('.navbar'),
	close = document.querySelector('.hide-menu'),

	filter = document.querySelector('.filter'),
	closeDropdown = document.querySelector('.close'),
	dropdownContent = document.querySelector('.dropdown-content'),
	filterElems = document.querySelectorAll('.filter__elem'),
	filterElemsH2 = document.querySelectorAll('.filter__elem__h2'),
	dropdown = document.querySelectorAll('.dropdown'),
	caretDown = document.getElementById('last-caret-down'),

	itemCount = document.querySelector('.item-count'),
	priceCount = document.querySelector('.price-count'),
	euro = document.querySelector('.hidden-euro');


 
if (filter) {														//Подготовка к работе с фильтром
	var selectedTd = [],                          					//если 0, то ни в одном из +-шести dropdown ни одного подсвеченого элемента
		h2Arr = [],                                              	//массив изначальных значений filterElemsH2
		highlightedFilterElems = [];                              	//все элементы подсвеченые в фильтре 
	for (var i = 0; i < filterElems.length; i++) {
		selectedTd.push(0);
	}
	console.log(selectedTd);

	createAndInsert('div');

	for (var i = 0; i < filterElemsH2.length; i++) {
		h2Arr.push(filterElemsH2[i].innerText);
	}
	hideAndShowFilterContent();
	DesctopFilter();
}

if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
    createAndInsert('li');
	createAndInsert('span');
	tabMobFilter();
}

if (window.innerWidth < 768) {
    createAndInsert('li');
	createAndInsert('span');
	tabMobFilter();
}



searchBtn.onclick = function() {
	searchInput.classList.toggle('change');
}
sandwich.onclick = function() {
	sandwich.style.display = 'none';
	nav.style.display = 'block';
	close.style.display = 'block';
}
close.onclick = function() {
	close.style.display = 'none';
	nav.style.display = 'none';
	sandwich.style.display = 'block';
}
window.onresize = function() {
	if (window.innerWidth > 1024) {
        if(closeDropdown && caretDown && dropdownContent) {
        	closeDropdown.style.display = 'none';
        	caretDown.style.display = 'inline-block';
        	dropdownContent.style.display = 'none';
        }
        sandwich.style.display = 'none';
        close.style.display = 'none';
        nav.style.display = 'block';


        //filter
		for (var i = 0; i < filterElems.length; i++) {
			if (filterElems[i].children[0].children.length >= 1) {
				filterElems[i].children[0].removeChild(filterElems[i].children[0].children[0]);
			}
		}
        for (var i = 0; i < filterElems.length; i++) {
        	if(filterElems[i].children[0].innerHTML != h2Arr[i]) {
        		highlightedFilterElems.push(filterElems[i]);
        	}
        }
        for (var i = 0; i < filterElems.length; i++) {
			filterElems[i].appendChild(dropdown[i]);
			if (dropdown[i].children[0].innerHTML == h2Arr[i]) {
				dropdown[i].removeChild(dropdown[i].children[0]);
			}
		}
        for (var i = 0; i < highlightedFilterElems.length; i++) {
        	highlightedFilterElems[i].style.backgroundColor = 'rgb(229, 229, 229)';
        	highlightedFilterElems[i].children[0].style.marginTop = 0 + 'px';
			highlightedFilterElems[i].children[0].style.marginBottom = 24 + 'px';
			highlightedFilterElems[i].children[0].style.fontSize = 1.3 + 'em';
			highlightedFilterElems[i].children[0].style.color = 'black';
			highlightedFilterElems[i].children[1].innerHTML = highlightedFilterElems[i].children[0].innerHTML;
        }
        highlightedFilterElems = [];
        for (var i = 0; i < h2Arr.length; i++) {
        	filterElemsH2[i].innerHTML = h2Arr[i];
        }
    }
    if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        nav.style.display = 'block';
        sandwich.style.display = 'none';
        close.style.display = 'none';

        tabMobFilter();
        for (var i = 0; i < filterElems.length; i++) {
        	if(filterElems[i].style.backgroundColor == 'rgb(229, 229, 229)') {
        		highlightedFilterElems.push(filterElems[i]);
        		filterElems[i].style.backgroundColor = 'white';
        	}
        }
        for (var i = 0; i < filterElemsH2.length; i++) {
        	if (filterElemsH2[i].nextElementSibling.innerHTML) {
        		filterElemsH2[i].innerHTML = filterElemsH2[i].nextElementSibling.innerHTML;
        		filterElemsH2[i].style.color = "rgb(241, 74, 88)";
        	}
        	filterElems[i].children[0].style.marginTop = 10 + 'px';
			filterElems[i].children[0].style.marginBottom = 10 + 'px';
			filterElems[i].children[0].style.fontSize = 1.6 + 'em';
			filterElems[i].style.backgroundColor = 'white';
			filterElems[i].children[1].innerHTML = '';

        }
        createAndInsert('li');
        createAndInsert('span');
    }
    if (window.innerWidth < 768) {
        sandwich.style.display = 'block';
        nav.style.display = 'none';
        close.style.display = 'none';

        tabMobFilter();
        for (var i = 0; i < filterElems.length; i++) {
        	if(filterElems[i].style.backgroundColor == 'rgb(229, 229, 229)') {
        		highlightedFilterElems.push(filterElems[i]);
        		filterElems[i].style.backgroundColor = 'white';
        	}
        }
        for (var i = 0; i < filterElemsH2.length; i++) {
        	if (filterElemsH2[i].nextElementSibling.innerHTML) {
        		filterElemsH2[i].innerHTML = filterElemsH2[i].nextElementSibling.innerHTML;
        		filterElemsH2[i].style.color = "rgb(241, 74, 88)";
        	}
        	filterElems[i].children[0].style.marginTop = 10 + 'px';
			filterElems[i].children[0].style.marginBottom = 10 + 'px';
			filterElems[i].children[0].style.fontSize = 1.6 + 'em';
			filterElems[i].style.backgroundColor = 'white';
			filterElems[i].children[1].innerHTML = '';

        }
        createAndInsert('li');
        createAndInsert('span');
    }
}


function hideAndShowFilterContent() {
	filter.addEventListener( "click", function(event) {
		var target = event.target;
		if (window.innerWidth <= 1024) {
	        closeDropdown.style.display = 'block';
	        caretDown.style.display = 'none';
	        dropdownContent.style.display = 'flex';
	        if (target.classList.contains('close') || target.classList.contains('fa-times')) {
	        	closeDropdown.style.display = 'none';
	        	caretDown.style.display = 'inline-block';
	        	dropdownContent.style.display = 'none';
	        }
	    }
	});
}
function DesctopFilter() {
	for (let i = 0; i < filterElems.length; i++) {
		filterElems[i].addEventListener( "click", function(event) {
			var target = event.target;
			if (target.tagName != "LI") return;
			if (target.previousElementSibling == null) {
				filterElemsH2[i].style.marginTop = 10 + 'px';
				filterElemsH2[i].style.marginBottom = 10 + 'px';
				filterElemsH2[i].style.fontSize = 1.6 + 'em';
				filterElems[i].style.backgroundColor = 'white';
				filterElems[i].children[1].innerHTML = '';

				for (var j = 0; j < dropdown[i].children.length; j++) {
					dropdown[i].children[j].classList.remove('highlight');
				}
				selectedTd[i] = 0;
				return;
			}

			if(selectedTd[i] == 0) {
				filterElemsH2[i].style.marginTop = 0 + 'px';
				filterElemsH2[i].style.marginBottom = 24 + 'px';
				filterElemsH2[i].style.fontSize = 1.3 + 'em';
				filterElems[i].style.backgroundColor = 'rgb(229, 229, 229)';
				filterElems[i].children[1].innerHTML = target.innerHTML;

				target.classList.add('highlight');
				selectedTd[i] = 1;
			} else {
				for (var j = 0; j < dropdown[i].children.length; j++) {
					dropdown[i].children[j].classList.remove('highlight');
				}
				filterElems[i].children[1].innerHTML = target.innerHTML;
				target.classList.add('highlight');
			}
		});
	}
}
function tabMobFilter() {
	for (let i = 0; i < dropdownContent.children.length; i++) {
		dropdownContent.children[i].addEventListener( "click", function(event) {
			var target = event.target;
			if (target.tagName != "LI" || target.previousElementSibling == null) return;

			if (target == dropdownContent.children[i].children[1]) {
				for (var j = 0; j < highlightedFilterElems.length; j++) {  
					if(highlightedFilterElems[j] == filterElems[i]) {
						highlightedFilterElems.splice(j, 1);             	//удаляем из подсвеченых
					}
				}

				filterElemsH2[i].innerHTML = h2Arr[i];          			//меняем значение filterElemsH2 на то что было в начале
				addComma();								 					//добавляем запятую
				filterElemsH2[i].style.color = 'black';        				//меняем цвет filterElemsH2 на черный

				for (var j = 0; j < dropdown[i].children.length; j++) { 
					dropdown[i].children[j].classList.remove('highlight');  //снимаем класс highlight со всех детей dropdown
				}
				selectedTd[i] = 0;
				return;
			}

			if(selectedTd[i] == 0) {
				filterElemsH2[i].innerHTML = target.innerHTML;              //меняем значение filterElemsH2 на выбраное
				addComma();        											//добавляем запятую
				filterElemsH2[i].style.color = "rgb(241, 74, 88)";     		//меняем цвет filterElemsH2 на красный
				target.classList.add('highlight');                          //добавляем подсветку выбраному элемнту
				selectedTd[i] = 1;
			} else {
				for (var j = 0; j < dropdown[i].children.length; j++) {
					dropdown[i].children[j].classList.remove('highlight'); 	//снимаем класс highlight со всех детей dropdown
				}

				filterElemsH2[i].innerHTML = target.innerHTML;     			//меняем значение filterElemsH2 на выбраное
				addComma();													//добавляем запятую
				target.classList.add('highlight');                       	//добавляем подсветку выбраному элемнту
			}
		});

		function addComma() {
			var span = document.createElement('span');  
			span.classList.add('comma');
			span.innerHTML = ',';
			filterElemsH2[i].appendChild(span);
		}
	}
}
function createAndInsert(tag) {
	for (var i = 0; i < filterElems.length; i++) {
    	var elem = document.createElement(tag);
    	if (tag == 'li') {
    		if (dropdown[i].children[0].innerHTML != h2Arr[i]) {
    			elem.innerHTML = h2Arr[i];
    			dropdown[i].insertBefore(elem, dropdown[i].children[0]);
    		}
    		dropdownContent.appendChild(dropdown[i]);
    	} else if (tag == 'div') {
			elem.classList.add('title');
			filterElems[i].insertBefore(elem, filterElems[i].children[1]);
    	} else if (tag == 'span') {
    		if (filterElems[i].children[0].children.length == 0) {
				elem.classList.add('comma');
				elem.innerHTML = ',';
				filterElems[i].children[0].appendChild(elem);
			}
    	}
	}
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