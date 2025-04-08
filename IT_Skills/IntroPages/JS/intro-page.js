function introPageData(file,pageID) {
  getXml(file,populateIntroPage,arg1) ;
}

function populateIntroPage(xml,arg1){
  var i;
  var xmlDoc = xml.responseXML;
  var child=xmlDoc.getElementsByTagName("intro-page")["id"=arg1];
  var imgSrc=child.getElementsByTagName("img")[0].childNodes[0].nodeValue; 
  document.querySelector("#intro-page-header img").setAttribute("src",imgSrc);
}
