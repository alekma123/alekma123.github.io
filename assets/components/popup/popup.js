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