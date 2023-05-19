filterEntries(document.querySelector('.active-entry'))
   filterEntries(document.querySelector('.active-entry'))
function filterEntries(element) {
  var x, i,j=element.getAttribute("data-categ");
  x = document.getElementsByClassName("column");
  if (j == "all") j = "";
  for (i = 0; i < x.length; i++) {
    mouRemoveClass(x[i], "show_entry");
    if (x[i].dataset.categ.indexOf(j) > -1) mouAddClass(x[i], "show_entry");
  }
}

function mouAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function mouRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
