function GetFiles(){ 
  const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
  const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt";
  var myTextElem1, myTextElem2; 
  
  myTextElem1 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem1.setAttribute("id", "xmlcode");
  fetch(file1).then(x=>x.text()).then(y=>myTextElem1.value = y);
  myTextElem1.style.display="none";

  myTextElem2 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem2.setAttribute("id", "xsltcode");
  fetch(file2).then(x=>x.text()).then(y=>myTextElem2.value = y);
  myTextElem2.style.display="none"; 
}
