function search() {
    document.getElementById('searchbar').style.width = "200px";
    document.getElementById('searchbar').style.border = "3px solid black";
    document.getElementById('butse').innerHTML = "&#128269;";
    document.getElementById('sercol').style.display = "inline-block";
}

function searchcol() {
    document.getElementById('searchbar').style.width = "0px";
    document.getElementById('searchbar').style.border = "0px solid black";
    document.getElementById('butse').innerHTML = "&#128269; Search";
    document.getElementById('sercol').style.display = "none";
}

function closemenu() {
    document.getElementById('sidebar').style.width = "0px";
    document.getElementById('close').style.display = "none";
    document.getElementById('menu').style.display = "block";
}

function openmenu() {
    document.getElementById('menu').style.display = "none";
    document.getElementById('sidebar').style.width = "400px";
    document.getElementById('close').style.display = "block";
}