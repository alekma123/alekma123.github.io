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

/*
function responseveMenu(){
    let topnav = document.querySelector('#topnav');
    let height = topnav.clientHeight;

    if (height > 44) {
        // add responsive menu class
        topnav.classList.add("mobile-menu");

    }  else {
        // del responsive menu class
        topnav.classList.remove("mobile-menu");
    } 
    console.log("topNav height: ", height);
}

window.addEventListener('resize', function() {
    responseveMenu();
})
*/