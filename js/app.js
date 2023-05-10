const btnNewTab = document.querySelector(".btn");
btnNewTab.addEventListener("click",function(){
        console.log(btnNewTab);
  

  if (btnNewTab.className === "btn"){
        // changement du texte du bouton 
        btnNewTab.innerText = "Supprimer Votre Tableau";
        btnNewTab.className = "btnRemove";

        const tab = document.querySelector(".newTab");
        // creation tableau
                console.log("hello");
                const newTab = document.createElement("th");
                newTab.innerText = "Votre tableau";
                tab.appendChild(newTab);
                newTab.setcontenteditable = "true"; 
                newTab.setAttribute("contenteditable", "true"); 
              
                console.log(newTab);
        // création du bouton colone
                const newCol = document.createElement("button");
                newCol.innerText = "Nouvelle Colonne";
                newCol.className = "btnColonne";
                document.querySelector(".buttons").appendChild(newCol);

                newCol.addEventListener("click", function(){
                        const col = document.createElement("th");
                        col.innerText = "Nouvelle Colonne";
                        col.class = "colonne";
                        tab.appendChild(col);
                        col.setcontenteditable = "true"; 
                        col.setAttribute("contenteditable", "true"); 
                })


        // création du bouton pour ligne 
                const btnLigne = document.createElement("button");
                btnLigne.innerText = "Nouvelle Ligne";
                btnLigne.className = "btn-ligne";
                newTab.appendChild(btnLigne);
                
                btnLigne.addEventListener("click", function(){
                        console.log("hello");
                        const ligne = document.querySelector(".newLignes");
                        const newLigne = document.createElement("tr");
                        newLigne.innerText = "Nouvelle Ligne";
                        ligne.appendChild(newLigne);
                        newLigne.setcontenteditable = "true"; 
                        newLigne.setAttribute("contenteditable", "true");
                });
} 
if(btnNewTab.className === "btnRemove") {
        console.log("supprimer");
        

// if (btnNewTab.className === "btn") { 
        
}
});