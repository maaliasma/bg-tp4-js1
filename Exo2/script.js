"use strict"; // Mode strict (slide 52)

// f1 : tableau de chaînes de caractères (slide 39)
function f1() {
    // Déclaration d'un tableau avec const (slides 39 et 52)
    const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];

    // Boucle for...of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant);
    }
}

// f2: un objet (slide 40)
function f2() {
    // Déclaration d'un objet avec ses propriétés (slide 40)
    const etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };

    console.log(etudiant);
}

// f3 : tableau d'objets (slide 41)
function f3() {
    // Tableau d'objets (slide 41)
    const etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 21 },
        { nom: 'nom2', prenom: 'prenom2', age: 22 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];

    // Boucle for classique (slide 45)
    for (let i = 0; i < etudiants.length; i++) {
        // Accès aux propriétés de l'objet (slide 40)
        // Chaîne formatée avec backticks (slide 38)
        console.log(`${etudiants[i].nom}-${etudiants[i].prenom}-${etudiants[i].age}`);
    }
}
