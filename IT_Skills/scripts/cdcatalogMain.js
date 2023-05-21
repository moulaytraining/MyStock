function GetFiles(){ 
  const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
  const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt";
  var myTextElem1, myTextElem2; 
  
  myTextElem1 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem1.setAttribute("id", "xmlcode");
  GetFileData(file1, myTextElem1);
  myTextElem1.style.display="none";

  myTextElem2 = document.querySelector('article').appendChild(document.createElement('textarea'));
  myTextElem2.setAttribute("id", "xsltcode");
  GetFileData(file2, myTextElem2);
  myTextElem2.style.display="none"; 
}

function GetFileData(file, Myelem) {
    fetch(file).then(x=>x.text()).then(y=>Myelem.value = y);
}

