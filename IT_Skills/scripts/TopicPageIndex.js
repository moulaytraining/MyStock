var btnContainer = document.getElementById("side-bar");
var btns = btnContainer.getElementsByClassName("side-bar-itm");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-select");
    current[0].className = current[0].className.replace(" active-select", "");
    this.className += " active-select";
  });
}
