function textHttpRequest(file,getTextData) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this.responseText);
       //document.getElementById(elemId).innerHTML =this.responseText; 
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
