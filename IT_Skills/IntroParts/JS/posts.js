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
     // // var postTitle=document.querySelector("#Blog1 > div > div > div > h1").innerText;  
     // console.log(postTitle); 
//Work on repeated texts
    var rptdTexts=[["#post > header > strong","strong"],[".post-introPara p","intro-p"],[".post-para p","post-para"],[".post-h1 h1","post-h1"],[".post-o-lst h1","lst-h1"],["#post > div.post-sec > div > h1","post-sec-h1"],[".post-sec>div>p","post-sec-p"],[".post-h1-p h1","post-h1-p-h1"],[".post-h1-p p","post-h1-p-p"],[".post-cen-link a","post-cen-link-txt"]];
    for (i = 0; i < rptdTexts.length; i++) { 
    	if(rptdTexts[i][0]!=""){
          if(document.querySelectorAll(rptdTexts[i][0]).length!=0){
        	for (j = 0; j < document.querySelectorAll(rptdTexts[i][0]).length; j++) {
    // console.log(rptdTexts[i][0]+" "+document.querySelectorAll(rptdTexts[i][0]).length);
           		document.querySelectorAll(rptdTexts[i][0])[j].innerText=child.getElementsByTagName(rptdTexts[i][1])[j].childNodes[0].nodeValue;   
           }
          }
        }
    }
//Work on sec images
    var rptdImgs=[["#post > header > a","href","img"],["#post > header > a","title","post-title"],["#post > header > a > img","src","img"],["#post > header > a > img","alt","post-title"],["#post > div.post-sec > a","href","post-sec-img"],["#post > div.post-sec > a","title","post-sec-h1"],["#post > div.post-sec > a > img","src","post-sec-img"],["#post > div.post-sec > a > img","alt","post-sec-h1"],    ["#post > div.post-img > a","href","post-img"],["#post > div.post-img > a","title","post-img-alt"],["#post > div.post-img > a > img","src","post-img"],["#post > div.post-img > a > img","alt","post-img-alt"]]; 
    for (i = 0; i < rptdImgs.length; i++) {
      console.log(i);
    	if(rptdImgs[i][0]!=""){
    console.log(rptdImgs[i][0]);
          if(document.querySelectorAll(rptdImgs[i][0]).length!=0){
            console.log(document.querySelectorAll(rptdImgs[i][0]).length);
        	for (j = 0; j < document.querySelectorAll(rptdImgs[i][0]).length; j++) {
           		document.querySelectorAll(rptdImgs[i][0])[j].setAttribute(rptdImgs[i][1],child.getElementsByTagName(rptdImgs[i][2])[j].childNodes[0].nodeValue);  
           		// document.querySelectorAll(rptdImgs[i][0].Replace(" > img",""))[j].setAttribute("src",child.getElementsByTagName(rptdImgs[i][1])[j].childNodes[0].nodeValue);    
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
//Work on repeated links
    var rptdLinks=[[".post-cen-link a","post-cen-link-a"]];
    for (i = 0; i < rptdLinks.length; i++) {
    	if(rptdLinks[i][0]!=""){
          if(document.querySelectorAll(rptdLinks[i][0]).length!=0){
    //console.log(rptdImgs[i][0]);
        	for (j = 0; j < document.querySelectorAll(rptdLinks[i][0]).length; j++) {
           		document.querySelectorAll(rptdLinks[i][0])[j].setAttribute("href",child.getElementsByTagName(rptdLinks[i][1])[j].childNodes[0].nodeValue);   
           }
          }
        }
    }
    for(z = 0; k < 2; z++){
    for(k = 0; k < document.querySelectorAll(".post-o-lst>ol>li").length; k++){
      try{
          document.querySelectorAll(".post-o-lst>ol>li")[k].removeChild(document.querySelector("#HTML202")); 
      }
      catch(err){}
      } 
    }
  }
  function getIntroPostStyle(fileData,arg1){document.getElementById("post-style").innerText = fileData.responseText;}
