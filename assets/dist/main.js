const bannerTitle = null;
const bannerText = null;
const bannerLineSVG = null;
const background =  null;


window.addEventListener("load", function(event) {
    this.bannerTitle = this.document.querySelector('#banner-title_anime');
    this.bannerText = this.document.querySelector('#banner-text_anime');
    this.bannerLineSVG = this.document.querySelector('#banner-line_anime');
    this.background = this.document.querySelector('#banner');
    
    setTimeout(offsetBackground, 1);
    setTimeout(bannerTextShow, 1000);
    setTimeout(bannerLineSVGShow, 1000);
    setTimeout(bannerTitleShow, 2000);
});


function bannerTitleShow() {
    this.bannerTitle.style.opacity = 1;

}
function bannerTextShow() {
    this.bannerText.style.opacity = 1;
}
function bannerLineSVGShow() {
    this.bannerLineSVG.style.opacity = 1;
    this.bannerLineSVG.style.height = "87%";
    let circle = this.document.querySelector('#banner-line_anime #endline');
    
    setTimeout(() => {
        circle.style.opacity = 1;
    }, 1200);
}

function offsetBackground(){
    this.background.setAttribute("style", "background-position-x: -960px;");
}


  
const spaceFon = document.getElementById("banner");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
 
   spaceFon.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}

function animation(x) {
    x.classList.toggle("change");
  }

/*
function createMenuIcon() {
    const iconsBurger = document.querySelectorAll('.icon-burger');
    const iconMenuBurger = document.createElement('div');
    iconMenuBurger.classList.add('conntainer');

    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const bar3 = document.createElement('div');
    bar1.classList.add('bar1');
    bar2.classList.add('bar2');
    bar3.classList.add('bar3');

    iconMenuBurger.appendChild(bar1);
    iconMenuBurger.appendChild(bar2);
    iconMenuBurger.appendChild(bar3);

    console.log(iconsBurger);
    iconsBurger.forEach(el => {
        el.appendChild(iconMenuBurger);
    });
}

createMenuIcon();
*/



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
const popupBuyTicket = document.querySelector("#popup");
const openPopup = document.querySelector('#popupBuyTicket');
const closePopup = document.querySelector('#popup .close');


closePopup.addEventListener('click', function(event){
    popupBuyTicket.classList.toggle("popupBuyTicket_open");

    console.log("close");
})

openPopup.addEventListener('click', function(event){
    popupBuyTicket.classList.toggle("popupBuyTicket_open");
})



/*
function fontsize() {
    let block = document.querySelector('.fontsize');
    let text = document.querySelector('.fontsize .text');
    let w = text.offsetWidth;
    text.style.fontSize = w/5 + "px";
    //text.style.top = w/38 + "px";
    //text.style.left = w/9 + "px";

    console.log("fontSize: ", w);
}
window.onload = fontsize;
window.onresize = fontsize;  */
//# sourceMappingURL=main.js.map
