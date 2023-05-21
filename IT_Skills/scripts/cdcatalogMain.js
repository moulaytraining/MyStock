function GetFiles(){ 
  const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
  const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalog.xsl";
  LoadFiles("xmlcode",file1);
  LoadFiles("xsltcode",file2);
}
function LoadFiles(ElemId,file){ 
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   document.getElementById(ElemId).value = this.responseText;
  }
  xhttp.open("GET", file);
  xhttp.send();
}
