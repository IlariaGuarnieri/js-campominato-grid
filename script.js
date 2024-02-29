
const gridContainer = document.querySelector('.grid-container')

reset();

for (let i = 1; i <=100 ; i++){
  const square = getSquare(i);
  console.log(square);
  gridContainer.append(square)
}

// FUNCTIONS/////

function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
// cosi stampo i numeri
// sq.innerHTML = numero;    
  sq._sqID = numero;

  sq.addEventListener('click', function(){
// this restituisce l'elemento contenitore
    console.log(this);

    // in questo caso uso la proprietà dataset
    // const numero = this.dataset.squid;

    // in questo caso uso proprietà custom che è più versatile
    const numero =this._sqID;

    this.innerHTML = (!this.classList.contains('clicked')) 
                      ? this.innerHTML = numero
                      : this.innerHTML = '';

    this.classList.toggle('clicked');
    this.classList.toggle(getOddEvenClass( numero ));
  })

  return sq;
}


function reset(){
  console.log(this);
  gridContainer.innerHTML = '';
}

function getOddEvenClass(n){
  if(n % 2 === 0){
    return 'even';
  } 
  return 'odd';
}




























// const gridContainer = document.querySelector('.grid-container')
// const btnStart = document.querySelector('.btn-start')

// btnStart.addEventListener('click', init);


// function init(){
//   reset();
//   for(let i = 1; i<=100; i++){
//     const square = getSquare(i);
//     gridContainer.append(square)
//   }
// }

// function getSquare(indice){
//   const sq = document.createElement('div');
//   sq.className = 'square';
//   // creo una proprietà custom dell'elemento html e la chiamo _sqID
//   sq.sqID = indice;


//   // aggiungo il numero nel data attribute
//   sq.dataset.sqid = indice

//   sq.addEventListener('click' function(){
//     const numero = this.sq_ID;
//     this.innerHTML = (!this.classList.contains('clicked'))
//                       ? this.innerHTML = numero     
//                       : this.innerHTML = '';

//     this.classList.toggle('clicked');
//     this.classList.toggle(getOddEvenClass(numero));
//     if(isEndGame()){
//       reset();
//       gridContainer.append(getBtnRestart());
//     }
//   })
//   return sq;
// }

// function getBtnRestart(){
//   // il gioco finisce se gli square con la classe clicked sono 100

//   const clickedElements = document.querySelectorAll('clicked');
//   return clickedElements === 64
// }

// function reset(){
//   gridContainer.innerHTML = '';
// }

// function getOddEvenClass(n){
//   if(n % 2 === 0){
//     return 'even';
//   }
//   return 'odd';
// }