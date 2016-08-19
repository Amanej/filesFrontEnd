
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
    //console.log("File: "+filesArray[i].name);
    var _f = filesArray[i];
    currentfiles.push(_f);
    var _newLiNode = document.createElement("LI");
    var _nameNode = document.createTextNode(_f.name);
    _newLiNode.appendChild(_nameNode);
    filesList.appendChild(_newLiNode);
  }
};

LogFiles.addEventListener("click", function(event) {
  console.log("List current files");
  console.dir(currentfiles);
});
