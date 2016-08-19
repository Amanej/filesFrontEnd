
// set up dom elements
var fileUp = document.getElementById('fileUp');
var filesDiv = document.getElementById('filesInfo');
var filesList = document.getElementById('myfiles');
var LogFiles = document.getElementById('LogFiles');


var currentfiles = [];

// Listen for upload selection
fileUp.addEventListener("change", function(event) {
  console.dir(event);
  var filesInInput = fileUp.files;
  console.dir(filesInInput);
  filesDiv.innerHTML = "<h1>Number of files uploaded: "+filesInInput.length+" </h1>";
  listFiles(filesInInput);
  console.dir(currentfiles);
});

var listFiles = function(filesArray) {
  for(var i = 0;i<filesArray.length;i++) {
    console.log("List files");
    var _f = filesArray[i];
    currentfiles.push(_f);
  }
};

LogFiles.addEventListener("click", function(event) {
  console.log("List current files");
  console.dir(currentfiles);
  // Clear DOM
  filesList.innerHTML = "";

  for(var i = 0;i < currentfiles.length;i++) {
    updateDOM(currentfiles[i],i);
  };
});

/*var _removeButtons = function() {
  var removebutton = document.getElementsByClassName('removeFile');
  console.dir(removebutton);
  var addremoveListener = function(btn) {
    btn.addEventListener("click", function(event) {
      console.dir(event);
    });
  };
  removebutton.forEach(addremoveListener);
};*/

var updateDOM = function(_f,i) {
  // Create list item
  var _newLiNode = document.createElement("LI");
  // Add file name
  var _nameNode = document.createTextNode(_f.name);
  _newLiNode.appendChild(_nameNode);
  // Add delete button
  var _delButton  = document.createElement("BUTTON");
  var _delText = document.createTextNode("Remove");
  _delButton.className = "removeFile";
  _delButton.setAttribute("order",i);
  _delButton.appendChild(_delText);
  _newLiNode.appendChild(_delButton);

  //_removeButton();
  _delButton.addEventListener("click", function(event) {
    console.dir(event);
    console.log("Order: "+event.target.attributes[1].value);
    var _order = event.target.attributes[1].value;
    //console.log(typeof _order);
    var _ordI = parseInt(_order);
    // remove from currentfiles
    currentfiles.splice(_order,1);
    console.dir(currentfiles);
    // remove from DOM
    filesList.removeChild(filesList.childNodes[_ordI]);
  });

  // Add list item to ul
  filesList.appendChild(_newLiNode);
};
