function csvJSON(csv) {
  var lines = csv.split("\n");

  var result = [];

  for (var i = 1; i < lines.length - 1; i++) {
    var obj = {};
    var headers = lines[i].split(";");
    var currentline = lines[i].substring(11, 14).split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result); //JSON
}

window.ondrop = function (e) {
  upload(e.dataTransfer.files[0]);
}

function upload(file) {
  oFReader = new FileReader();
  oFReader.onloadend = function () {
    var json = csvJSON(this.result);
    console.log(json);
  };
  oFReader.readAsText(file);
} 

