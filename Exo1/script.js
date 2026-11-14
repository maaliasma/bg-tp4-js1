"use strict"; // Mode strict (slide 52)

// Variables et constantes, types primitifs (slides 38 et 52)
const nom = 'John';      
const prenom = 'DOE';   
let age = 30; 
let note = 15; 
const pi = 3.14;

// Fonctions déclarées (slide 46) appelées au clic (slides 18-19)
// Affichage avec console.log uniquement (slide 34)

// f1: affiche le nom
function f1() {
    console.log(nom);
}

// f2 : affiche le prénom
function f2() {
    console.log(prenom);
}

// f3 : affiche nom et prénom, concaténation de chaînes (slide 38)
function f3() {
    console.log(nom + "-" + prenom);
}

// f4: affiche l'âge
function f4() {
    console.log(age);
}

// f5: affiche la note
function f5() {
    console.log(note);
}

// f6: affiche Pi
function f6() {
    console.log(pi);
}