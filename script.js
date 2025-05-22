const gameBoard = document.getElementById("gameBoard");
const state = document.getElementById("state");
const resetBtn = document.getElementById("resetBtn");



let currentPlayer = "X";
let gameActive = true;


const cells = document.querySelectorAll(".cell");

cells.forEach(cell=>{
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
                state.textContent = `${winner} wins!`; // ✅ Shows winner here
              let gameActive = false;
              return; // Stop the game
            }
      
            // Check for draw
            const isDraw = [...cells].every(cell => cell.textContent !== "");
             if (isDraw) {
                state.textContent = "It's a draw!";
              let gameActive = false;
              return;
            }
      
            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            state.textContent = `Player ${currentPlayer}'s turn`;
        }
        });
      });

      function resetGame() {
        cells.forEach(cell => {
          cell.textContent = "";
        });
        currentPlayer = "X";
        let gameActive = true;
        state.textContent= "Player X's turn";
        
      }
     
      resetBtn.addEventListener("click", resetGame);
