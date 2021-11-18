
let play = document.getElementById("play");


play.addEventListener("click", function(){

    document.querySelector(".container").innerHTML = "";

    const select = parseInt(document.getElementById("select").value);
    // console.log(select);

    let celleTot;
    let righe;

    switch (select){
        case 1:
            celleTot = 100;
            break;
        case 2:
            celleTot = 81;
            break;
        case 3:
            celleTot = 49;
    }

    righe = Math.sqrt(celleTot);
    // console.log(righe);


    selezionaCelle();

    
    function selezionaCelle(){
        
        const box = document.querySelector('.container');

        const arraySelected = [];

        for(let i = 1; i<= celleTot; i++){
            const grid = generaCelle(i);
            

            grid.addEventListener('click', function() {
                this.classList.add('selected');
                
                arraySelected.push(grid.innerHTML);

                for(let i = 0; i < arraySelected.length; i++){
                    for(let j = 0; j < mine.length; j++){
                        if (mine[j] = arraySelected[i]){
                            console.log("aaaa"); 
                        }else{
                            console.log("bbbb");
                        }
                    }
          
                }
                
                

                

                

            });

            box.appendChild(grid);
        }
              
    }



    
                

    function generaCelle(num) {

        const cell = document.createElement('div');
        
        cell.classList.add('square');

        const size = `calc(100% / ${righe})`;

        cell.style.width = size;
        cell.style.height = size;

        cell.innerHTML = num;

        return cell;
    }
   

    const mine = generaMine();

    // console.log(mine);

    function generaMine (){

        const numeroMine = 16;

        const arrayMine = [];

        while(arrayMine.length < numeroMine){

            const random = numeriRandom(1,celleTot);

            if(!arrayMine.includes(random)) {
                arrayMine.push(random);
            }
        }
        return arrayMine;
    }
    

    function numeriRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


  

})


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.

// In seguito l'utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. 

// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.