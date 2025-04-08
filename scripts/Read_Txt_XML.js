function loadTextFiles(){
	var file="https://moulaytraining.github.io/MyStock/scripts/employee.js"; 
    textHttpRequest(file,getTextData);  
}
function getTextData(xml){
	var i;
			var xmlDoc = xml.responseXML;
	console.log(xmlDoc):
			var table =
				`<tr><th>Firstname</th><th>Lastname</th>
					<th>Title</th><th>Division</th>
					<th>Building</th><th>Room</th>
				</tr>`;
			var x = xmlDoc.getElementsByTagName("employee");

			// Start to fetch the data by using TagName
			for (i = 0; i < x.length; i++) {
				table += "<tr><td>" +
					x[i].getElementsByTagName("firstname")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("lastname")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("title")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("division")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("building")[0]
					.childNodes[0].nodeValue + "</td><td>" +
					x[i].getElementsByTagName("room")[0]
					.childNodes[0].nodeValue + "</td></tr>";
			}

			// Print the xml data in table form
			document.getElementById("id").innerHTML = table;
}
