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
function filterSelection(c,elem) {
  var x, i; x = document.getElementsByClassName("column"); if (c == "all") c = ""; for (i = 0; i < x.length; i++) { w3RemoveClass(x[i], "show"); if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); }  if (c!="") {console.log(c);btnClick(elem);}
} 
function w3AddClass(element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];} } } 
function w3RemoveClass(element, name) { var i, arr1, arr2; arr1 = element.className.split(" "); arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { while (arr1.indexOf(arr2[i]) > -1) { arr1.splice(arr1.indexOf(arr2[i]), 1); } } element.className = arr1.join(" "); } 
function btnClick(elem){
console.log(elem);
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
var current = document.getElementsByClassName("btn active")[0];
current.className=current.className.replace(" active", ""); 
elem.className += " active"; } 
function ShowCategory(){  
const catLinks = document.querySelectorAll("article > div.main > div.row > div > div > button");
const getCategory = e => {
  var classFile='https://moulaytraining.github.io/MyStock/VirtualLibrary/'+e.target.className+'.html';
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