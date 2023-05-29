import { ajouterColonne } from "./colonne.js";
import { ajouterLigne} from "./ligne.js";
import { register } from "./register.js";

const btnCol = document.getElementById("btnCol");
const btnLigne = document.getElementById("btnLigne");
const btnRegister = document.getElementById("btnRegister");
const btnRemove = document.getElementById("remove");


btnCol.addEventListener("click", ajouterColonne);
btnLigne.addEventListener("click", ajouterLigne);
btnRegister.addEventListener("click", register);
btnRemove.addEventListener("click", tableRow);



function tableRow(){
  
  document.querySelector('#row').remove();
  
}





 
