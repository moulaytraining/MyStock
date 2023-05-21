function GetFiles(){ 
  var myTextElem1, myTextElem2,file,text; 
  
  myTextElem1 = document.querySelector('#xmlcode');
  var file='https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml';
  GetFileData(file,"#xmlcode");
  myTextElem1.style.display="none";

  myTextElem2 =  document.querySelector('#xsltcode');
  var file='https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt';
  GetFileData(file,"#xsltcode");
  myTextElem2.style.display="none";   
  
  // Waiting for three seconds 
  const date = Date.now();
  let currentDate = null;
  do {currentDate = Date.now();} while (currentDate - date < 3000);}

function GetFileData(file,ElemId){ 
  fetch(file)
    .then((response) => response.text())
    .then((text) => {
     document.querySelector(ElemId).innerHTML=text;
    });  
}
