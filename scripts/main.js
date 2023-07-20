function loadElement(element,file) { 
  fetch(file)
    .then(response => response.text())
    .then(html => {
      element.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });
}  
