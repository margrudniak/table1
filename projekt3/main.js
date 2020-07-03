/*
Przeglądarka nie umożliwia funkcji wczytania bezpośrednio pliku lokalnego
ze względu na restrykcyjne bezpieczeństwa. Natomiast umożliwia wybór
bezpośrednio wybranego pliku.
*/
function comps() {
  var input = document.getElementById("loadFile");
  // do wybrania danego pliku, typ danych Blob do wyczytwania dużych ilości danych
  var file = input.files[0];
  var fr = new FileReader();
  fr.onload = function() {
    var text = fr.result;
    // \s bialy znak, * dla wszystkiego
    var re = /\s*;\s*/;
    var l = text.split(re);

    table = document.getElementById("table");
    var c = 0;
    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = l[c];
        c++;
      }
    }
  };
  fr.readAsText(file, "UTF-8");
}

function save() {
  var theFirstChilds = document.querySelectorAll("table tr td"),
    text,
    i;

  text = "";
  let c = 1;
  for (let i = 0; i < theFirstChilds.length; ++i) {
    text = text + theFirstChilds[i].innerText;
    text += ";";
    if (c % 15 === 0) text += "\n";
    c++;
  }
  var link = document.createElement("a");
  link.download = "data.txt";
  var blob = new Blob([text], { type: "text/plain" });
  link.href = window.URL.createObjectURL(blob);
  link.click();
}

var firebaseConfig = {
  apiKey: "AIzaSyCL4gEQVSstwfDIliSNz5vsCa-67RX7mGc",
  authDomain: "komputer-d5621.firebaseapp.com",
  databaseURL: "https://komputer-d5621.firebaseio.com",
  projectId: "komputer-d5621",
  storageBucket: "komputer-d5621.appspot.com",
  messagingSenderId: "829085081225",
  appId: "1:829085081225:web:b10c8e585f09e6e83ab058"
};

firebase.initializeApp(firebaseConfig);

function read() {
  $("#tbody tr").remove();
  var database = firebase.database();
  database.ref().once("value", function(snapshot) {
    if (snapshot.exists()) {
      var content = "";
      snapshot.forEach(function(data) {
        var val = data.val();
        content += "<tr>";
        content += '<td contenteditable="true">' + val.producent + "</td>";
        content += '<td contenteditable="true">' + val.wielkosc + "</td>";
        content += '<td contenteditable="true">' + val.rozdzielczosc + "</td>";
        content += '<td contenteditable="true">' + val.typM + "</td>";
        content += '<td contenteditable="true">' + val.kocha + "</td>";
        content += '<td contenteditable="true">' + val.procesor + "</td>";
        content += '<td contenteditable="true">' + val.liczba + "</td>";
        content += '<td contenteditable="true">' + val.taktowanie + "</td>";
        content += '<td contenteditable="true">' + val.ram + "</td>";
        content += '<td contenteditable="true">' + val.pojemnosc + "</td>";
        content += '<td contenteditable="true">' + val.typD + "</td>";
        content += '<td contenteditable="true">' + val.karta + "</td>";
        content += '<td contenteditable="true">' + val.pamiec + "</td>";
        content += '<td contenteditable="true">' + val.system + "</td>";
        content += '<td contenteditable="true">' + val.naped + "</td>";
        content += "</tr>";
        console.log(content);
      });
      $("#table").append(content);
    }
  });
}

function readFromXML() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "katalog.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  let y;
  let xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("laptop")[0];
  y =
    "<tr><td contenteditable='true'>" +
    x.getElementsByTagName("manufacturer")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("size")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("resolution")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("type")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("touchscreen")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("physical_cores")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("clock_speed")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("ram")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("storage")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("typed")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("named")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("memory")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("os")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("disc_reader")[0].childNodes[0].nodeValue +
    "</td></tr>";
  var x = xmlDoc.getElementsByTagName("laptop")[1];
  y +=
    "<tr><td contenteditable='true'>" +
    x.getElementsByTagName("manufacturer")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("size")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("resolution")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("type")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("touchscreen")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("physical_cores")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("clock_speed")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("ram")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("storage")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("typed")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("named")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("memory")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("os")[0].childNodes[0].nodeValue +
    "</td>" +
    "<td contenteditable='true'>" +
    x.getElementsByTagName("disc_reader")[0].childNodes[0].nodeValue +
    "</td></tr>";
  document.getElementById("tbody").innerHTML = y;
}

function saveToXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this);
      myFunction2(this);
    }
  };
  xhttp.open("GET", "katalog.xml", true);
  xhttp.send();
}

function myFunction1(xml) {
  let x, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("physical_cores")[0].childNodes[0];
  txt = "Przed zmianą: " + x.nodeValue + '\n';
  x.nodeValue=$('#table').find('tr').eq(1).find('td').eq(6).text();
  txt += "Po zmianie: " + x.nodeValue;
  console.log(txt);
}

function myFunction2(xml) {
  let x, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("ram")[1].childNodes[0];
  txt = "Przed zmianą: " + x.nodeValue + '\n';
  x.nodeValue=$('#table').find('tr').eq(2).find('td').eq(8).text();
  txt += "Po zmianie: " + x.nodeValue;
  console.log(txt);
}
