const bannerTitle = null;
const bannerText = null;
const bannerLineSVG = null;
const background =  null;


window.addEventListener("load", function(event) {
    this.bannerTitle = this.document.querySelector('#banner-title_anime');
    this.bannerText = this.document.querySelector('#banner-text_anime');
    this.bannerLineSVG = this.document.querySelector('#banner-line_anime');
    this.background = this.document.querySelector('#banner');
    
    startPage();
    setTimeout(bannerTitleShow, 1000);
});

function startPage() {
    offsetBackground();
    bannerLineSVGShow();
    bannerTextShow();
}

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


  