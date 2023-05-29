import { colonnes, table } from "./colonne";

export let lignes = 0;


export function ajouterLigne() {

    lignes++;
  
    const tbody = table.querySelector("tbody");
    const ligne = tbody.insertRow();
    ligne.classList.add(`row-${lignes}`);
    ligne.id = 'row';
  
    for (let i = 0; i < colonnes; i++) {
      const newLigne = ligne.insertCell();
      newLigne.innerHTML = "Nouvelle cellule";
      newLigne.contentEditable = true;
      newLigne.classList.add(`col-${i + 1}`, `row-${lignes}`);
    }
  }