function GetFiles(){ 
  const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
  const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt";
  var myTextElem1, myTextElem2; 
  
  myTextElem1 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem1.setAttribute("id", "xmlcode");
  fetch(file1)
  .then((response) => response.text())
  .then((text) => {
   myTextElem1.value = text;
  });  
  myTextElem1.style.display="none";

  myTextElem2 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem2.setAttribute("id", "xsltcode");
  fetch(file2)
  .then((response) => response.text())
  .then((text) => {
  myTextElem2.value = text;
  });
  myTextElem2.style.display="none"; 
}
