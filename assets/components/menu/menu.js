function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    console.log('className: ' +  x.className);
}


function openMenu(){
  var x = document.getElementById("topnav");
  x.classList.toggle("mobile-menu_open");
}

