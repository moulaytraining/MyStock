function transformxml()
{
 var file1="https://moulaytraining.github.io/MyStock/IT_Skills/xmls/cdcatalog.xml";
 comst Myelem1=document.getElementById("xmlcode");
 fetch(file1).then(x=>x.text()).then(y=>Myelem1.innerHTML = y);
if (window.ActiveXObject)
 {
 // IE

 // XML:
 var xmltxt
 xmltxt=document.getElementById("xmlcode").value
 if (xmltxt=="")
  {
  alert("The XML is empty")
  return false;
  }
 xml=new ActiveXObject("MSXML2.DOMDocument");
 xml.async=false
 xml.loadXML(xmltxt)
 if (xml.parseError.errorCode!=0)
  {
  document.write("Error in XML<br><br>Line " + xml.parseError.line + ": " + xml.parseError.reason);   
  alert("Error in XML\n\nLine " + xml.parseError.line + ": " + xml.parseError.reason);
  return false
  }
 // XSL:
 var xsltxt
 xsltxt=document.getElementById("xsltcode").value
 if (xsltxt=="")
  {
  alert("The XSLT is empty")
  return false
  }
 xsl=new ActiveXObject("Microsoft.XMLDOM")
 xsl.async=false
 xsl.loadXML(xsltxt)
 if (xsl.parseError.errorCode!=0)
  {
  document.write("Error in XSLT<br><br>Line " + xsl.parseError.line + ": " + xsl.parseError.reason);     
  alert("Error in XSLT\n\nLine " + xsl.parseError.line + ": " + xsl.parseError.reason);
  return false
  }

 // Transform:
 document.write(xml.transformNode(xsl));     
 }
else if (document.implementation && document.implementation.createDocument)
 {
 // Mozilla
 // XML:
 var xmltxt
 xmltxt=document.getElementById("xmlcode").value
 if (xmltxt=="")
  {
  alert("The XML is empty")
  return false
  }
 var doc=new DOMParser();
 var xml=doc.parseFromString(xmltxt,"text/xml");
 if (xml.documentElement.nodeName=="parsererror")
  {
  document.write("Error in XML<br><br>" + xml.documentElement.childNodes[0].nodeValue);
  alert("Error in XML\n\n" + xml.documentElement.childNodes[0].nodeValue);
  return false;
  }
 // XSL:
 var xsltPrs=new XSLTProcessor();
 var xsltxt
 xsltxt=document.getElementById("xsltcode").value
 if (xsltxt=="")
  {
  alert("The XSLT is empty")
  return false
  }
 xsl=doc.parseFromString(xsltxt,"text/xml");
 if (xsl.documentElement.nodeName=="parsererror")
  {
  document.write("Error in XSLT<br><br>" + xsl.documentElement.childNodes[0].nodeValue);  
  alert("Error in XSLT\n\n" + xsl.documentElement.childNodes[0].nodeValue);
  return false;
  }

 xsltPrs.importStylesheet(xsl);
  
 // Transform:
 var result=xsltPrs.transformToFragment(xml,document);
   document.getElementById("result_output").appendChild(result);
// document.replaceChild(result,window.document.childNodes[0])
 }
else
 {
 // No Browser support:
 alert("Your browser does not support this example.");
 }
}

