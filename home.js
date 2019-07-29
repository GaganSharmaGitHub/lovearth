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
{document.getElementById('sidebar').style.width="0px";
document.getElementById('sidebar').style.display="none";
document.getElementById('close').style.display="none";
document.getElementById('menu').style.display="block";

document.getElementById('climcon').style.width="700px"
document.getElementById('content').style.width="90%"


}
 function openmenu()
 {document.getElementById('sidebar').style.display="block";
 document.getElementById('menu').style.display="none";
 document.getElementById('sidebar').style.width="25%"
 document.getElementById('close').style.display="block";
 
 document.getElementById('climcon').style.width="400px"
 

}