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
      var i,j,k;
      var xmlDoc = fileData.responseXML;  
      var x = xmlDoc.getElementsByTagName("post");
      for (i = 0; i < x.length; i++) {if(x[i].getAttribute("id") == arg1){var child=x[i]};}   
     console.log(arg1);
      document.querySelector("#post > header > strong").innerText=child.getElementsByTagName("strong")[0].childNodes[0].nodeValue;
      document.querySelector("#post > header > img").setAttribute("src",child.getElementsByTagName("img")[0].childNodes[0].nodeValue);
      if(document.querySelectorAll(".post-introPara p").length!=0){document.querySelector(".post-introPara p").innerText=child.getElementsByTagName("intro-p")[0].childNodes[0].nodeValue;}; 
//Work on repeated texts
    var rptdTexts=[[".post-para p","post-para"],[".post-h1 h1","post-h1"],[".post-o-lst h1","lst-h1"],[".post-sec>div>h1","post-sec-h1"],[".post-sec>div>p","post-sec-p"],[".post-h1-p h1","post-h1-p-h1"],[".post-h1-p p","post-h1-p-p"]];
    for (i = 0; i < rptdTexts.length; i++) {
    	if(rptdTexts[i][0]!=""){
          if(document.querySelectorAll(rptdTexts[i][0]).length!=0){
        	for (j = 0; j < document.querySelectorAll(rptdTexts[i][0]).length; j++) {
    console.log(rptdTexts[i][0]+" "+document.querySelectorAll(rptdTexts[i][0]).length);
           		document.querySelectorAll(rptdTexts[i][0])[j].innerText=child.getElementsByTagName(rptdTexts[i][1])[j].childNodes[0].nodeValue;   
           }
          }
        }
    }
//Work on repeated images
    var rptdImgs=[[".post-sec>img","post-sec-img"]];
    for (i = 0; i < rptdImgs.length; i++) {
    	if(rptdImgs[i][0]!=""){
          if(document.querySelectorAll(rptdImgs[i][0]).length!=0){
    //console.log(rptdImgs[i][0]);
        	for (j = 0; j < document.querySelectorAll(rptdImgs[i][0]).length; j++) {
           		document.querySelectorAll(rptdImgs[i][0])[j].setAttribute("src",child.getElementsByTagName(rptdImgs[i][1])[j].childNodes[0].nodeValue);   
           }
          }
        }
    }
//Work on repeated lists
    var rptdLsts=[[".post-o-lst>ol>li b","li-b"],[".post-o-lst>ol>li","li-text"]];
    for (i = 0; i < rptdLsts.length; i++) {
    	if(rptdLsts[i][0]!=""){
          if(document.querySelectorAll(".post-o-lst>ol>li").length!=0){
    console.log(rptdLsts[i][0]);
        	for (j = 0; j < document.querySelectorAll(".post-o-lst>ol>li").length; j++) {
                var bldText=child.getElementsByTagName(rptdLsts[0][1])[j].childNodes[0].nodeValue; 
                var normText=child.getElementsByTagName(rptdLsts[1][1])[j].childNodes[0].nodeValue;   
                document.querySelectorAll(".post-o-lst>ol>li")[j].innerHTML="<b>"+bldText+": </b>"+normText;   
           }
          }
        }
    } 
    for(k = 0; k < document.querySelectorAll(".post-o-lst>ol>li").length.length; k++){
      try{
          document.querySelectorAll("#post > div.post-o-lst > ol")[k].removeChild(document.querySelector("#HTML202")); 
      }
      catch(err){}
      }
  }
  function getIntroPostStyle(fileData,arg1){document.getElementById("post-style").innerText = fileData.responseText;}
