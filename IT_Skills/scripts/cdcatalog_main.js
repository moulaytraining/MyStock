function GetFiles(){ 
const file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
const file2="https://moulaytraining.github.io/MyStock/IT_Skills/xslts/cdcatalog.xslt.txt";
  
 const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   document.getElementById("xmlcode").value = this.responseText;
  }
  xhttp.open("GET", file1);
  xhttp.send();
  
 const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   document.getElementById("xsltcode").value = this.responseText;
  }
  xhttp.open("GET", file2);
  xhttp.send();}
