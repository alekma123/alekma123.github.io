const spaceFon = document.getElementById("banner");
 
//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
   //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
   //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
   //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
 
   //Меняем положение фона
   spaceFon.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}

const popupBuyTicket = document.querySelector("#popup");
const openPopup = document.querySelector('#popupBuyTicket');
const closePopup = document.querySelector('#popup .close');


closePopup.addEventListener('click', function(event){
    popupBuyTicket.classList.toggle("popupBuyTicket_open");
})

openPopup.addEventListener('click', function(event){
    popupBuyTicket.classList.toggle("popupBuyTicket_open");
})

console.log(popupBuyTicket.classList);



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


function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

el = document.querySelector('nav#topnav');

let res = isOverflown(el);
console.log('isOverflown: ', el);
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
//# sourceMappingURL=main.js.map
