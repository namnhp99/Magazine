	
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active-sub-nav");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}






// back to top button
const toTop = document.getElementById('backtop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
})



// SHOW CHANGE SKIN
function showChangeSkin() {
  var changeSkin = document.querySelector('.change-skin');
  var skinCog = document.querySelector('.change-skin .change-skin-icon i')

  if (changeSkin.classList.value.search('show-change-skin') != -1) {
    changeSkin.classList.remove('show-change-skin');
    skinCog.classList.remove('fa-spin');
  } else {
    changeSkin.classList.add('show-change-skin');
    skinCog.classList.add('fa-spin');
  }
}


//main slide
$(document).ready(function () {
  $('.main-slide').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    draggable: false,





  });
});

// slide olympia
if ($('.owl-carousel').val() != undefined) {
  $('.owl-carousel').owlCarousel({

    margin: 30,
    nav: true,
    smartSpeed: 100,
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },

      479: {
        items: 1,
        slideBy: 1
      },
      480: {
        items: 2,
        slideBy: 2
      },

      768: {
        items: 3,
        slideBy: 3
      },
      992: {
        items: 4,
        slideBy: 4
      }
    }
  });
}

// slide olympia end

// slide highlight news
if ($('.slider-for').val() != undefined) {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider-nav'
  });
}

if ($('.slider-nav').val() != undefined) {
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    draggable: true,
    focusOnSelect: true,
    vertical: true,
    arrows: true,
  });
}

// slide highlight news end

//show menu mobile

var primaryMenu = document.getElementsByClassName('nav-mobile')[0];
var sportsMenu = document.getElementsByClassName('sport-nav-mobile')[0];

var page = document.getElementById('page');
var over = document.getElementById('overlay');
var close = document.getElementsByClassName('nav-mobile-close')[0];



function openPrimaryMenu() {


  primaryMenu.classList.add('show');
  page.classList.add('openMenu');
  over.classList.add('show');
  close.classList.add('show2');
}

function openSportsMenu() {


  sportsMenu.classList.add('show');
  page.classList.add('openMenu');
  over.classList.add('show');
  close.classList.add('show2');
}

function hideMenu() {

  page.classList.remove('openMenu');
  over.classList.remove('show');
  close.classList.remove('show2');
  sportsMenu.classList.remove('show');
  primaryMenu.classList.remove('show');
}


// show login form
function showHideLogin() {
  var login = document.getElementById('login-block');
  if (login.classList.value.includes('show')) {
    login.classList.remove('show');
  } else {
    login.classList.add('show');
  }
}




