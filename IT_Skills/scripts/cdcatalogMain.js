function GetFiles(){ 
  var myTextElem1, myTextElem2,file,text; 
  
  myTextElem1 = document.querySelector('#xmlcode');
  file="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
    fetch(file)
    .then((response) => response.text())
    .then((text) => {
     myTextElem1.innerHTML=text;
    });  
  myTextElem1.style.display="none";

  myTextElem2 =  document.querySelector('#xsltcode');
   file="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt";
    fetch(file)
    .then((response) => response.text())
    .then((text) => {
    myTextElem2.innerHTML=text;
    }); 
  myTextElem2.style.display="none";   
  
  // Waiting for three seconds 
  const date = Date.now();
  let currentDate = null;
  do {currentDate = Date.now();} 
  while (currentDate - date < 3000);
}
