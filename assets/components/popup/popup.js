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

