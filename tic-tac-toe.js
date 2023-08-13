const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.js-result');
let myTurn = 0;

chooseSpot();

let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function chooseSpot() {
  for (let i = 0; i < 9; i++) {
    const cell = cells.item(i);
    cell.addEventListener('click', () => {
      putAnObject(cell);
      checkTheResult();
    })
  }
};

function putAnObject(cell) {
  if (myTurn === 0 && cell.innerHTML === '') {
    cell.innerHTML = `<img class="imageX" src="images/x.png">`
    myTurn = 1;
    document.querySelector('.turn').innerHTML = "O's turn";
  }
  else if (myTurn === 1 && cell.innerHTML === '') {
    cell.innerHTML = `<img class="imageO" src="images/o.png">`
    myTurn = 0;
    document.querySelector('.turn').innerHTML = "X's turn";
  };
};

function checkTheResult() {
  for (let comb of winningCombination) {
    if (
      cells[comb[0]].innerHTML === cells[comb[1]].innerHTML
      && 
      cells[comb[1]].innerHTML === cells[comb[2]].innerHTML
      &&
      cells[comb[0]].innerHTML !== ''
    ) {
      if (myTurn === 1) {
        result.innerHTML = "X's won"
      }
      else {
        result.innerHTML = "O's won"
      }
      return true;
    }
  }
  return false;
}

