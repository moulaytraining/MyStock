function getFileData(file,callBack,arg1) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this,arg1); 
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
function getIntroPostHtml(fileData,arg1){
    var i;
    var xmlDoc = fileData.responseXML;  
    var x = xmlDoc.getElementsByTagName("intro-post");
    for (i = 0; i < x.length; i++) {if(x[i].getAttribute("id") == arg1){var child=x[i]};}   
    document.querySelector("#intro-post-header strong").innerText=child.getElementsByTagName("strong")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-post-header img").setAttribute("src",child.getElementsByTagName("img")[0].childNodes[0].nodeValue);
    document.querySelector("#intro-post-introPara p").innerText=child.getElementsByTagName("p")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-post-lst01 h1").innerText=child.getElementsByTagName("h1")[0].childNodes[0].nodeValue; 
    for (i = 0; i < document.querySelectorAll("#intro-post-lst01.lst-itms li").length; i++) {
      document.querySelectorAll("#intro-post-lst01>div>ol>li b")[i].innerText=child.getElementsByTagName("li-b")[i].childNodes[0].nodeValue; 
      document.querySelectorAll("#intro-post-lst01>div>ol>li")[i].innerText=child.getElementsByTagName("li-text")[i].childNodes[0].nodeValue;      
    }  
    document.querySelector("#post-Para p").innerText=child.getElementsByTagName("p")[1].childNodes[0].nodeValue;
    try{
        document.querySelector("#intro-post-lst01 > div > ol").removeChild(document.querySelector("#HTML202"));
    }
    catch(err){}
}
function getIntroPostStyle(fileData,arg1){document.getElementById("intro-post-style").innerText = fileData.responseText;}
