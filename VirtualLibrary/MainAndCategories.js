function addPagination(elemSelector,pagesCount) {
    const paginationDiv=document.querySelector(elemSelector); 
    let htmlString=""; 
    for (let index = 1; index <= pagesCount; index++) {
        htmlString += `<div class="pagination-item" onclick="changePage(this)">${index}</div>`;
    }
    paginationDiv.innerHTML=htmlString;
    paginationDiv.querySelectorAll('.pagination-item')[0].classList.add("active");
    
}
function loadPageData(path){
    var myElem=document.querySelector('.main');
    var myHtmlFile="https://moulaytraining.github.io/MyStock/VirtualLibrary/"+path+".html";
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
function changePage(elem) {
    const pageDiv=document.querySelector('.main'); 
    var currentPage=document.querySelector('.pagination-item.active'); 
    currentPage.classList.remove('active');
    elem.classList.add("active");
    loadPageData("pjctMgmt/pjctMgmt"+elem.innerHTML); 
      waitPage();
    }
function waitPage() {  
window.onload= function(){
console.log("The page has been loaded:"); 
       filterSelection('all','');
   viewKinds();
  }
}
function filterSelection(c,elem) {
var x, i; x = document.getElementsByClassName("column"); 
if (c == "all") c = ""; 
for (i = 0; i < x.length; i++) { w3RemoveClass(x[i], "show"); 
if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); 
}  
if (c!="") {btnClick(elem);}
} 
function w3AddClass(element, name) { 
  var i, arr1, arr2; 
arr1 = element.className.split(" "); 
arr2 = name.split(" "); 
for (i = 0; i < arr2.length; i++) { 
  if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
  } 
} 
} 
function w3RemoveClass(element, name) { 
var i, arr1, arr2; 
arr1 = element.className.split(" "); 
arr2 = name.split(" "); for (i = 0; i < arr2.length; i++) { 
  while (arr1.indexOf(arr2[i]) > -1) { 
    arr1.splice(arr1.indexOf(arr2[i]), 1); 
  } 
} 
  element.className = arr1.join(" "); 
} 
function viewKinds(){
var myRow=document.querySelector('article .main .row');
var entriesCount=myRow.children.length-1;
var kindAbbr,kindName; 
var counter=0;
var myCheckList=[];  
var myBtns=document.querySelector("#myBtnContainer");
var myElem;
    for (let index = 0; index <entriesCount ; index++) {
        kindAbbr=myRow.children[index].classList.item(1);
        kindName=myRow.children[index].querySelector('article .main .row span').innerText; 
        if (myCheckList.indexOf(kindAbbr)==-1) {
            myCheckList.push(kindAbbr);  
            myElem=document.createElement("button");
            myElem.setAttribute("class", "btn");
            myElem.setAttribute("onclick", "filterSelection('"+kindAbbr+"',this)");
            myElem.innerHTML=kindName;
            myBtns.appendChild(myElem);            
        }  
        counter+=1;
    } 
console.log(myCheckList);
}
function btnClick(elem){
//console.log(elem);
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
var current = document.getElementsByClassName("btn active")[0];
current.className=current.className.replace(" active", ""); 
elem.className += " active"; 
} 
function ShowCategory(elem){
  var classFile='https://moulaytraining.github.io/MyStock/VirtualLibrary/'+elem.className+'/'+elem.className+'1.html';
  var className=elem.innerText;
  console.log('Hello'); 
  console.log(classFile,className); 
  var myElem=document.querySelector('.main');
  loadElement(myElem,classFile);  
}
