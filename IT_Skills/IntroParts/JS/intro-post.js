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
      document.querySelectorAll("intro-post-lst01.lst-itms li b")[i].innerText=child.getElementsByTagName("li-b")[i].childNodes[0].nodeValue; 
      document.querySelectorAll("#intro-post-lst01.lst-itms li")[i].innerText=child.getElementsByTagName("li-text")[i].childNodes[0].nodeValue;      
    }  
}
function getIntroPostStyle(fileData,arg1){document.getElementById("intro-post-style").innerText = fileData.responseText;}
