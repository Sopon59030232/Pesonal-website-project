
//    animation_top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn_top").style.display = "block";
  } else {
    document.getElementById("myBtn_top").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}