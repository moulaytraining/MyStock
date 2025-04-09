function getIntroPostHtml(fileData,arg1){
    var i;
    var xmlDoc = fileData.responseXML;  
    var x = xmlDoc.getElementsByTagName("intro-post");
    for (i = 0; i < x.length; i++) {if(x[i].getAttribute("id") == arg1){var child=x[i]};}   
    document.querySelector("#intro-post-header strong").innerText=child.getElementsByTagName("strong")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-post-header img").setAttribute("src",child.getElementsByTagName("img")[0].childNodes[0].nodeValue);
    document.querySelector("#intro-post-introPara p").innerText=child.getElementsByTagName("p")[0].childNodes[0].nodeValue;
    document.querySelector("#intro-post-toc h1").innerText=child.getElementsByTagName("h1")[0].childNodes[0].nodeValue; 
    for (i = 0; i < document.querySelectorAll("#toc-links a").length; i++) {
      document.querySelectorAll("#intro-post-toc a")[i].setAttribute("href",child.getElementsByTagName("a-href")[i].childNodes[0].nodeValue);
      document.querySelectorAll("#intro-post-toc a")[i].innerText=child.getElementsByTagName("a-text")[i].childNodes[0].nodeValue;      
    }  
}
function getIntroPostStyle(fileData,arg1){document.getElementById("intro-post-style").innerText = fileData.responseText;}
