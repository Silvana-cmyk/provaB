// JavaScript source code
function prenotazioneDone() {
    var count = true;
    let campi = document.getElementsByTagName("input");
    for (var i = 0; i < campi.length; i++) {
        if (campi[i].value.length == 0) {
            count = false;
        }
    }
    if (count == true) {
        alert("Hai prenotato correttamente");
    }
}

function menuDone() {
    var count = 0;
    let campi = document.getElementsByTagName("input");
    for (var i = 0; i < campi.length; i++) {
        if (campi[i].checked != false) {
            var x = parseFloat(campi[i].value)
            //parseFloat(campi[i].value.innerText)
            count += x;
        }
    }
    /*alert("Prezzo totale: " + count);*/
    let element = document.getElementById("empty");
    element.innerHTML = count;
    element.style.color = "black";
}

function goBack() {
    window.location = 'SitoRistorante.html';
}