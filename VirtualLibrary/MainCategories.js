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
function ShowCategory(){
  
const catLinks = document.querySelectorAll("article > div.main > div.row > div > div > button");
const getCategory = e => {
  var classFile='https://moulaytraining.github.io/MyStock/htmls/'+e.target.className+'.html';
  var className=e.target.innerText;
  console.log('Hello'); 
  console.log(classFile,className); 
  var myElem=document.querySelector('.main');
  loadElement(myElem,classFile);
}
for (let catLink of catLinks) {
  catLink.addEventListener("click", getCategory);
}
}
