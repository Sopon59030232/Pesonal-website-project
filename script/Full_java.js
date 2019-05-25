
// action_menu_side
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    document.getElementById("mySidenav").style.display = "block"
  } else {
    document.getElementById("mySidenav").style.display = "none"
  }
}

// Date
window.onload = setInterval(clock,1000);
function clock(){
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth();
  d = n.getDate();
  da = n.getDay();
  var dayArr = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",],
      monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"],
      da = dayArr[da],
      m = monthArr[m];
  document.getElementById("txt_day").innerHTML = da;
  document.getElementById("txt_date").innerHTML = d +" "+ m + " " + y;
}



