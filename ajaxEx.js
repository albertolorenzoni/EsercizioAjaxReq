function loadData() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let table = document.getElementById("table");
            let dataJson = JSON.parse(this.responseText);
            for(let i = 0; i < dataJson.data.length; i++ ) {
                let row = table.insertRow(i+1);
                let nome = row.insertCell(0);
                let cognome = row.insertCell(1);
                let eta = row.insertCell(2);
                nome.innerHTML = dataJson.data[i].nome;
                cognome.innerHTML = dataJson.data[i].cognome;
                eta.innerHTML = dataJson.data[i].eta;
            }
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.setRequestHeader("Content-type", "application/json"); 
    xhttp.send();
}