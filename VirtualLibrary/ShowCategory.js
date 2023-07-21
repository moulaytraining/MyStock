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
