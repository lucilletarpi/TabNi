export const table = document.getElementById("myTable");
export let colonnes = 0;
export let isTableRemoved = false;
export function ajouterColonne() {
    colonnes++;
  
    const colonne = table.rows;
  
    for (let i = 0; i < colonne.length; i++) {
      const row = colonne[i];
      const cells = row.cells;
  
      // Vérifier si la colonne existe déjà dans cette ligne
      if (cells.length < colonnes) {
        const newColonne = row.insertCell();
        newColonne.innerHTML = "Nouvelle cellule";
        newColonne.classList.add(`col-${colonnes}`, `row-${i}`);
        newColonne.contentEditable = true;
      }
    }
  
    const headerRow = table.querySelector("thead tr");
    const headerCells = headerRow.cells;
  
    // Vérifier si la colonne existe déjà dans l'en-tête
    if (headerCells.length < colonnes) {
      const newHeaderCell = document.createElement("th");
      newHeaderCell.innerHTML = `Colonne ${colonnes}`;
      
      // Récupérer la classe de la première cellule de ligne correspondante
      const firstRowCell = rows[0].cells[headerCells.length];
      const cellClasses = firstRowCell.classList;
  
      // Ajouter les classes de la cellule de ligne à la cellule d'en-tête
      cellClasses.forEach((className) => {
        newHeaderCell.classList.add(className);
      });
  
      headerRow.appendChild(newHeaderCell);
    }

  }