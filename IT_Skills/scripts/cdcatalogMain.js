
  const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
  const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalogStyle.txt";
  var myTextElem1, myTextElem2;
  const xhttp = new XMLHttpRequest();
function GetFiles(){ 
  myTextElem1 = document.body.appendChild(document.createElement('textarea'));
  myTextElem1.setAttribute("id", "xmlcode");
  myTextElem1.style.display="none";
  LoadFiles("xmlcode",file1);
  myTextElem2 = document.body.appendChild(document.createElement('textarea'));
  myTextElem2.setAttribute("id", "xsltcode");
  myTextElem2.style.display="none"; 
  LoadFiles("xsltcode",file2);  
}

function LoadFiles(ElemId,file){ 

  xhttp.onload = function() {document.getElementById(ElemId).value = this.responseText;}
  xhttp.open("GET", file);
  xhttp.send();
}
