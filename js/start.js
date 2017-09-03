var searchBtn = document.querySelector('.search__btn'),
	searchInput = document.querySelector('.search__input'),
	sandwich = document.querySelector('.sandwich'),
	nav = document.querySelector('.navbar'),
	close = document.querySelector('.hide-menu'),
	slides = document.querySelectorAll(".slide"),
	dots = document.querySelectorAll(".dot"),

	itemCount = document.querySelector('.item-count'),
	priceCount = document.querySelector('.price-count');

var slideIndex = 1;
var count = 0;
var timer = setInterval(showSlides, 10000);

if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
    tablet();
}

if (window.innerWidth < 768) {
    mobile();
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
        desktop();
    }
     if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        tablet();
    }
    if (window.innerWidth < 768) {
        mobile();
    }
};

function showSlides() {
  if (slideIndex > slides.length) {
        slideIndex = 1;
		};    
  if (slideIndex < 1) {
        slideIndex = slides.length;
		};
  for (var i = 0; i < slides.length; i++) {
    	 slides[i].classList.remove('active-slide');  
    }  
  for (var i = 0; i < dots.length; i++) {  
     dots[i].classList.remove("active-dot");
  }
  slides[slideIndex-1].classList.add('active-slide');  
  dots[slideIndex-1].classList.add("active-dot");
  if(count == 0) {
  	slideIndex++;
  }

}; 
function plusSlides(n) {
	clearInterval(timer);
	count++;
	slideIndex +=n;
    showSlides();
    timer = setInterval(showSlides, 10000);
};
function currentSlide(n) {
	clearInterval(timer);
	count++;
	slideIndex = n;
    showSlides();
    count = 0;
    timer = setInterval(showSlides, 10000);
};
function desktop() {
	sandwich.style.display = 'none';
    close.style.display = 'none';
    nav.style.display = 'block';
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
	nav.style.display = 'block';
    sandwich.style.display = 'none';
    close.style.display = 'none';
	for (var i = 0; i < slides.length; i++) {
		slides[i].innerHTML = '<a href="item.html"><img src="images/slide-for-tab-' + i + '.jpg" alt=""></a>';
	}
};
function mobile() {
	sandwich.style.display = 'block';
    nav.style.display = 'none';
    close.style.display = 'none';
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