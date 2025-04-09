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

function populateIntroPage(xml,arg1){
    var i;
    var xmlDoc = xml.responseXML;  
    var x = xmlDoc.getElementsByTagName("intro-page");
    for (i = 0; i < x.length; i++) {if(x[i].getAttribute("id") == arg1){var child=x[i]};}   
    document.querySelector("#intro-page-header strong").innerText=child.getElementsByTagName("strong")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-page-header img").setAttribute("src",child.getElementsByTagName("img")[0].childNodes[0].nodeValue);
    document.querySelector("#intro-page-introPara p").innerText=child.getElementsByTagName("p")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-page-toc h1").innerText=child.getElementsByTagName("h1")[0].childNodes[0].nodeValue;
    console.log(document.querySelectorAll("#toc-links a").length);
    for (i = 0; i < document.querySelectorAll("#toc-links a").length; i++) {
      document.querySelectorAll("#intro-page-toc a")[i].setAttribute("href",child.getElementsByTagName("a-href")[i].childNodes[0].nodeValue);
      document.querySelectorAll("#intro-page-toc a")[i].innerText=child.getElementsByTagName("a-text")[i].childNodes[0].nodeValue;      
    } 
    getXml("https://moulaytraining.github.io/MyStock/IT_Skills/IntroPages/CSS/intro-page.css",getIntroPageStyle,"");
}
function getIntroPageStyle(xml,arg1){document.getElementById("intro-page-style").innerText = xml.responseText;}
