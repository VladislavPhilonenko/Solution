var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	close = document.querySelector('.hide-menu'),
	slides = document.querySelectorAll(".slide"),
	dotsContainer = document.querySelector('.dots'), 

	itemCount = document.querySelector('.item-count'),
	priceCount = document.querySelector('.price-count'),

	carousel = document.querySelector('.carousel');

var slideIndex = 0;
var count = 0;
dotsNumber();
var dots = document.querySelectorAll(".dot");
var timer = setInterval(showSlides, 10000);

for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener( "click", function(event) {
		clearInterval(timer);
		count++;
		slideIndex = i;
		showSlides();
    	timer = setInterval(showSlides, 10000);
	});
}

function dotsNumber() {
	for (var i = 0; i < slides.length; i++) {
		var dot = document.createElement('div');
		dot.classList.add('dot');
		if (i == 0) {
			dot.classList.add('active-dot');
		}
		dotsContainer.appendChild(dot);
	}
}

function showSlides() {
	if(count == 0) {
  		slideIndex++;
  	}
	if (slideIndex >= slides.length) {
        slideIndex = 0;
	}
	if (slideIndex < 0) {
        slideIndex = slides.length - 1;
	};
	for (var i = 0; i < slides.length; i++) {
    	slides[i].classList.remove('active-slide');  
    }  
 	for (var i = 0; i < dots.length; i++) {  
     	dots[i].classList.remove("active-dot");
  	}
  	slides[slideIndex].classList.add('active-slide');  
  	dots[slideIndex].classList.add("active-dot");
  	count = 0;
}

carousel.addEventListener( "click", function(event) {
	var target = event.target;
	if (target.classList.contains('arrow-left') || target.classList.contains('arrow-left__img')) {
		clearInterval(timer);
		count++;
		slideIndex += -1;
		showSlides();
    	timer = setInterval(showSlides, 10000);	
	} else if (target.classList.contains('arrow-right') || target.classList.contains('arrow-right__img')) {
		clearInterval(timer);
		count++;
		slideIndex += 1;
		showSlides();
    	timer = setInterval(showSlides, 10000);	
	}
});

if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
    tablet();
}

if (window.innerWidth < 768) {
    mobile();
}

sandwich.onclick = function() {
	close.style.display = 'block';
};
close.onclick = function() {
	close.style.display = 'none';
};
window.onresize = function() {
	if (window.innerWidth > 1024) {
        desktop();
    }
     if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        tablet();
    }
    if (window.innerWidth < 768) {
        mobile();
    }
};

function desktop() {
	for (var i = 0; i < slides.length; i++) {
		if (i == 1) {
			slides[i].innerHTML = 		
		`<div class="slide__inner wrapper">
			<div class="slide__left-content wrapper">
				<div class="slide__elem">
					<a href="item.html"><img src="images/slide-2-1.jpg" alt="slide's image"></a>
				</div>
				<div class="slide__elem">
					<a href="item.html" class="first-img"><img src="images/slide-2-2.jpg" alt="slide's image"></a>
					<a href="item.html" class="second-img"><img src="images/slide-2-2-2.jpg" alt="slide's image"></a>
				</div>
				<div class="slide__elem">
					<a href="item.html"><img src="images/slide-2-4.jpg" alt="slide's image"></a>
				</div>
				<div class="slide__elem">
					<a href="item.html" class="first-img"><img src="images/slide-2-5.jpg" alt="slide's image"></a>
					<a href="item.html" class="second-img"><img src="images/slide-2-5-2.jpg" alt="slide's image"></a>
				</div>
				<div class="slide__elem">
					<a href="item.html" class="first-img"><img src="images/slide-2-6.jpg" alt="slide's image"></a>
					<a href="item.html" class="second-img"><img src="images/slide-2-6-2.jpg" alt="slide's image"></a>
				</div>
			</div>
			<div class="slide__right-content wrapper">
				<a href="item.html"><img src="images/slide-2-3.jpg" alt="slide's image"></a>
			</div>
		</div>`;
		} else {
			slides[i].innerHTML = '<a href="item.html"><img src="images/slide-' + i + '.jpg" alt=""></a>';
		}
	}
};
function tablet() {
	for (var i = 0; i < slides.length; i++) {
		slides[i].innerHTML = '<a href="item.html"><img src="images/slide-for-tab-' + i + '.jpg" alt=""></a>';
	}
};
function mobile() {
	for (var i = 0; i < slides.length; i++) {
		slides[i].innerHTML = '<a href="item.html"><img src="images/slide-for-mob-' + i + '.jpg" alt=""></a>';
	}
};


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