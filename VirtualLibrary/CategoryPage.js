function filterSelection(c,elem) {
var x, i; x = document.getElementsByClassName("column"); 
if (c == "all") c = ""; 
for (i = 0; i < x.length; i++) { w3RemoveClass(x[i], "show"); 
if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show"); 
}  
if (c!="") {console.log(c);btnClick(elem);
}
} 
function w3AddClass(element, name) { var i, arr1, arr2; 
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
console.log(elem);
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
var current = document.getElementsByClassName("btn active")[0];
current.className=current.className.replace(" active", ""); 
elem.className += " active"; 
} 
filterSelection('all','');
viewKinds(); 
