var liste = [];
var concepts = sessionStorage.getItem("concepts");
var index = window.location.href.indexOf("?");
var concept = window.location.href.substr(index+1);
var texte = "";
var selecteur = document.querySelector("#parcours");

liste = JSON.parse(concepts);
liste.push(concept);
liste.forEach(function(e){
    texte+=e+"<br/>";
});
selecteur.innerHTML=texte;
