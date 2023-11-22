// Cache the DOM
var button = document.getElementById("button");
var nume = document.getElementById("nume");
var Prenume = document.getElementById("Prenume");
var Email = document.getElementById("Email");

// Add eventListener
button.addEventListener("click", AltaPagina);

function AltaPagina() {
    nume.innerHTML = "Functie: Senior Java Developer";
    Prenume.innerHTML = "Locul de munca: Praga";
    // Nu există referire la 'asteptari' în HTML, deci eliminăm această linie
}