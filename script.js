const gameBoard = document.getElementById("gameBoord");
const status = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");



let currentPlayer = "X";

const cell = document.querySelectorAll(".cell");

cell.forEach(cell=>{
    cell.addEventListener("click",()=>{ //will only apply when the cell is empty
if(cell.textContent === ""){
cell.textContent =currentPlayer;
currentPlayer= currentPlayer==="X"?"O": "X";
};
    });
});


const winningCombos=[

  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6]  // Diagonal top-right to bottom-left
];

function checkWinner(){

    for (let combo of winningCombos){

        const[ a,b,c]= combo;

        if (
            cells[a].textContent !== "" &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
          ) {
            return cells[a].textContent; // returns "X" or "O"
          }
        }
        return null; // No winner yet
    }


    cells.forEach(cell => {
        cell.addEventListener("click", () => {
          if (cell.textContent === "") {
            cell.textContent = currentPlayer;
      
            // Check for a win
            const winner = checkWinner();
            if (winner) {
              alert(winner + " wins!");
              return; // Stop the game
            }
      
            // Check for draw
            const isDraw = [...cells].every(cell => cell.textContent !== "");
            if (isDraw) {
              alert("It's a draw!");
              return;
            }
      
            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        });
      });
      