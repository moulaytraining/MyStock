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
function mainPageData(){
var myElem=document.querySelector('.main');
var myHtmlFile="https://moulaytraining.github.io/MyStock/VirtualLibrary/MainCategories.html";
loadElement(myElem,myHtmlFile);
} 
mainPageData();

function ShowCategory(elem){
  var classFile='https://moulaytraining.github.io/MyStock/VirtualLibrary/'+elem.className+'/'+elem.className+'1.html';
  var className=elem.innerText;
  console.log('Hello'); 
  console.log(classFile,className); 
  var myElem=document.querySelector('.main');
  loadElement(myElem,classFile);  
}
