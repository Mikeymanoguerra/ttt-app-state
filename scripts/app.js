'use strict';
/* global app $ state */
const app = (function (){
  // State modification functions
  function generateSquare(square){
    // if square.winner === true , 
    // give it the class ofwinner from ccsss


    if(square.played === 0){
      return `<div class="cell" id="${square.position}">
                <p> X </p>
                </div>`;
    }
    if(square.played === 1){
      return `<div class="cell" id="${square.position}">
                 <p> O </p>
                  </div>`;
    } 
    if(square.played === null){
      return `<div class="cell" id="${square.position}">
                <p> &nbsp; </p>
                </div>`; 
    }
  }
  
  function generateBoardString(board){
    const htmlArray = board.map(square => generateSquare(square));
    const row = '<div class="row">';
    htmlArray.splice(6,0,row);
    htmlArray.splice(3,0,row);
    htmlArray.splice(0,0,row);
    return htmlArray.join('');
  }

  function checkForWinner(){
    if( state.board[0,1,2].played === 1, or 0)
    if (state.board[0].played === state.board[1].played === state.board[2].played && state.board[2].played !== null ){
      
    }


    // [3,4,5],
    // [6,7,8],
    // [0,3,6],
    // [1,4,7],
    // [2,5,8],
    // [0,4,8],
    // [2,4,6],

  }


  function renderBoard() {
    console.log ('render ran');
    if(state.winner === true){
      // run winner state, somehow
    } 
    const board =state.board;
    const boardHtml = generateBoardString(board);
    $('.board').html(boardHtml);
  }

  function handleClickedSquare(){
    $('.board').on('click', '.cell', (event) => {
      const position = $(event.currentTarget).attr('id'); 
      state.updateSquare(position);
      renderBoard();
    });
  }
  function handleNewGame() {
    $('.controls').on('click', '#new-game', () => {
      state.resetBoard();
      renderBoard();
    });
  }

  function bindEventListeners(){
    handleClickedSquare();
    handleNewGame();

  }

  return{
    renderBoard,
    bindEventListeners,
  };


  // Event Listeners
}());