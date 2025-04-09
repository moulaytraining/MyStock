function introPageData(file,pageID) {
  console.log(pageID);
  getXml(file,populateIntroPage,arg1) ;
}

function populateIntroPage(xml,arg1){
  var i;
  var xmlDoc = xml.responseXML;
  var child=xmlDoc.getElementsByTagName("intro-page[id='"+arg1+"']")[0];
  var imgSrc=child.getElementsByTagName("img")[0].childNodes[0].nodeValue; 
  console.log(imgSrc);
  document.querySelector("#intro-page-header img").setAttribute("src",imgSrc);
}
function getXml(file,callBack,arg1) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this,arg1); 
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
