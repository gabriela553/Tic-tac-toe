const cells = document.querySelectorAll('.cell');

let myTurn = 0;

chooseSpot();
checkTheResult();

function chooseSpot() {
  for (let i = 0; i < 9; i++) {
    const cell = cells.item(i);
    cell.addEventListener('click', () => {
      putAnObject(cell);
    })
  }
};

function putAnObject(cell) {
  if (myTurn === 0 && cell.innerHTML === '') {
    cell.innerHTML = `<img class="imageX" src="images/x.png">`
    myTurn = 1;
    document.querySelector('.turn').innerHTML = "O's turn";
    cell.classList.add('x');
  }
  else if (myTurn === 1 && cell.innerHTML === '') {
    cell.innerHTML = `<img class="imageO" src="images/o.png">`
    myTurn = 0;
    document.querySelector('.turn').innerHTML = "X's turn";
    cell.classList.add('o');
  };
};

function checkTheResult() {

}

