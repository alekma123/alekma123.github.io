const spaceFon = document.getElementById("banner");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
 
   spaceFon.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}