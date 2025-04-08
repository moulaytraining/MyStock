function textHttpRequest(file,callBack) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this);
       //document.getElementById(elemId).innerHTML =this.responseXML; 
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
function loadXmlDoc(fileUrl,callBack,childTag,targetTags,targetElemId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this,childTag,targetTags,targetElemId);
    }
  };
  xhttp.open("GET", fileUrl, true);
  xhttp.send();
}
function tabulateXmlList(xml,childTag,targetTags,targetElemId) {
  var i;
  var xmlDoc = xml.responseXML;
  var length =targetTags.length;
  var table="<tr>"; 
  for (i = 0; i <targetTags.length; i++) { 
  	table +=  "<th>" +targetTags[i].toUpperCase() + "</th>" 
  }
  table += "</tr>";
  var x = xmlDoc.getElementsByTagName(childTag);
  for (i = 0; i <x.length; i++) { 
  	table += "<tr>";
  	for (j=0; j <targetTags.length; j++) { 
    	table += "<td>" + x[i].getElementsByTagName(targetTags[j])[0].childNodes[0].nodeValue +"</td>"
    }
    table += "</tr>";
  }
  document.getElementById(targetElemId).innerHTML = table;
}
