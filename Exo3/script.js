"use strict"; // Mode strict (slide 52)

// Données Students : tableau d'objets (slide 41)
// Format (id, nom, prenom, moyenne, absences)
const Students = [
    { id: 1000, nom: 'JOHN',   prenom: 'DOE',     moyenne: 14, absences: 5 },
    { id: 2000, nom: 'BOB',    prenom: 'CARLTON', moyenne: 7,  absences: 1 },
    { id: 3000, nom: 'RAYANE', prenom: 'SMITH',   moyenne: 13, absences: 3 }
];

// Fonction B : un seul paramètre (float) et retourne un booléen (slide 46)
// Condition de comparaison avec opérateur relationnel (slides 42 et 43)
function B(moyenne) {
    return moyenne >= 10;
}

// Fonction A : appelée au clic, elle appelle B (slides 18 et 46)
function A() {
    // Boucle for...of sur le tableau d'objets (slide 45)
    for (const student of Students) {
        // Appel de B (slide 46) + notation ternaire (slide 43)
        const decision = B(student.moyenne) ? "ADMIS" : "AJOURNÉ";

        // Affichage un par un avec console.log uniquement (slide 34)
        console.log(student.id + ": " + decision);
    }
}