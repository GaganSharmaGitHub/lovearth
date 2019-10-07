function search(){
    document.getElementById('searchbar').style.width="200px";
    document.getElementById('searchbar').style.border="3px solid black";
    document.getElementById('butse').innerHTML="&#128269;";
    document.getElementById('sercol').style.display="inline-block";
}
function searchcol(){
    document.getElementById('searchbar').style.width="0px";
    document.getElementById('searchbar').style.border="0px solid black";
    document.getElementById('butse').innerHTML="&#128269; Search";
    document.getElementById('sercol').style.display="none";
}
function closemenu()
{
    document.getElementById('body').style.height="1000px";
document.getElementById('sidebar').style.width="0px";
document.getElementById('close').style.display="none";
document.getElementById('menu').style.display="block";
document.getElementById('climcon').style.width="60%"
document.getElementById('content').style.width="90%"
document.getElementById('projcon').style.height="260px"
document.getElementById('projects').style.width="100%"
}
 function openmenu()
 { 
    document.getElementById('body').style.height="1500px";
    document.getElementById('menu').style.display="none";
 document.getElementById('sidebar').style.width="400px";
 document.getElementById('close').style.display="block";
 document.getElementById('climcon').style.width="30%"
 document.getElementById('projects').style.width="1000px"
 document.getElementById('projcon').style.height="500px"
}
