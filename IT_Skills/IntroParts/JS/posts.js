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
      var x = xmlDoc.getElementsByTagName("post");
      for (i = 0; i < x.length; i++) {if(x[i].getAttribute("id") == arg1){var child=x[i]};}   
      document.querySelector("#post-header strong").innerText=child.getElementsByTagName("strong")[0].childNodes[0].nodeValue;
      document.querySelector("#post-header img").setAttribute("src",child.getElementsByTagName("img")[0].childNodes[0].nodeValue);
      document.querySelector("#post-introPara p").innerText=child.getElementsByTagName("p")[0].childNodes[0].nodeValue;
      document.querySelector(".post-lst h1").innerText=child.getElementsByTagName("h1")[0].childNodes[0].nodeValue;
      //console.log(document.querySelectorAll("#post-lst01 > div > ol > li").length);
      for (i = 0; i < document.querySelectorAll(".post-lst > div > ol > li").length; i++) {
        // console.log(i);
        var bldText=child.getElementsByTagName("li-b")[i].childNodes[0].nodeValue; 
        var normText=child.getElementsByTagName("li-text")[i].childNodes[0].nodeValue;   
        document.querySelectorAll(".post-lst>div>ol>li")[i].innerHTML="<b>"+bldText+"</b>"+normText;      
      }  
      document.querySelector("#post > div.post-sec > div > p").innerText=child.getElementsByTagName("p")[1].childNodes[0].nodeValue;
      try{
          document.querySelector(".post-lst > div > ol").removeChild(document.querySelector("#HTML202")); 
      }
      catch(err){}
  }
  function getIntroPostStyle(fileData,arg1){document.getElementById("post-style").innerText = fileData.responseText;}
