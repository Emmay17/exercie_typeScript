
// 3. Vérification de Nombre Pair
function isEven (nombre : number){
if(nombre % 2 == 0){
    return true;
}
else {
    return false ;
}
}

console.log(isEven(4));

//6. Récupérer le Premier Élément d'un Tableau

function getFirstElement (tab : number[]) : number{
    
    return tab[0];
}
console.log(getFirstElement([1,2,3]));

// toUpperCaseFunction
const phrase : string = "emmanuel mayele";

console.log(phrase.toLocaleUpperCase());


