function mainPageData(){
var myElem=document.querySelector('.main');
var myHtmlFile="https://moulaytraining.github.io/MyStock/VirtualLibrary/MainCategories.html";
loadElement(myElem,myHtmlFile);
}
function loadElement(element,file) { 
  fetch(file)
    .then(response => response.text())
    .then(html => {
      element.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
} 
