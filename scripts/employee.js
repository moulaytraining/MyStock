function loadFiles() {
    var files = ["https://moulaytraining.github.io/MyStock/css/Read%20XML%20file.css", "https://moulaytraining.github.io/MyStock/xmls/employee.xml"];
    document.getElementById("post-style").innerHTML = loadXMLDoc(files[0]);
    var xmlDoc = loadXMLDoc(files[1]);
    empDetails(xmlDoc);
}
function loadXMLDoc(filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        // Request finished and response
        // is ready and Status is "OK"
        if (this.readyState == 4 && this.status == 200) {
            return (this.responseXML);
        }
    };
    xmlhttp.open("GET", filePath, true);
    xmlhttp.send();
}

function empDetails(xmlDoc) {
    var i;
    // var xmlDoc = xml.responseXML;
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
