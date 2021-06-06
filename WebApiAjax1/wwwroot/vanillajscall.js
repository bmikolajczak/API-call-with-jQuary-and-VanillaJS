function loadDoc() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let url = `/api/math?x=${x}&y=${y}`;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 ) {
            if (this.status == 200) {
                let newObj = JSON.parse(this.responseText);
                document.getElementById("sum").innerHTML = newObj.sum;
                document.getElementById("difference").innerHTML = newObj.difference;
                document.getElementById("product").innerHTML = newObj.product;
                document.getElementById("quotient").innerHTML = newObj.quotient;
            }

           
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}