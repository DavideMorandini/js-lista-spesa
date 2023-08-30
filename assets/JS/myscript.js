/*  Consegna:
    Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while

    -   Crea una lista della spesa (array con stringhe)

    -   Stampa in pagina la scritta usando il ciclo while e i vari metodi per la manipolazione del DOM
*/

let shoppingList = ["latte", "pane", "zucchero", "caffè", "pasta", "uova"];

let ulEl = document.getElementById("my_list");

let i = 0;
while(i < shoppingList.length){

    let element = shoppingList[i];
    console.log(element);

    let markup = `<li>${element}</li>`;
    ulEl.innerHTML += markup;
    
    i++; 
}



