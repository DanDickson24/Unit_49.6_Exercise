/** Boggle word check.

Given a 5x5 boggle board, see if you can find a given word in it.

In Boggle, you can start with any letter, then move in any NEWS direction.
You can continue to change directions, but you cannot use the exact same
tile twice.

So, for example::

    N C A N E
    O U I O P
    Z Q Z O N
    F A D P L
    E D E A Z

In this grid, you could find `NOON* (start at the `N` in the top
row, head south, and turn east in the third row). You cannot find
the word `CANON` --- while you can find `CANO` by starting at the
top-left `C`, you can 't re-use the exact same `N` tile on the
front row, and there's no other `N` you can reach.

*/

function makeBoard(boardString) {
  /** Make a board from a string.

    For example::

        board = makeBoard(`N C A N E
                           O U I O P
                           Z Q Z O N
                           F A D P L
                           E D E A Z`);

        board.length   // 5
        board[0]       // ['N', 'C', 'A', 'N', 'E']
    */

  const letters = boardString.split(/\s+/);

  const board = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return board;
}

function find(board, word) {
  function explore(x, y, index) {
    if (index === word.length) {
      return true;
    }
    if (
      x < 0 ||
      y < 0 ||
      x >= board.length ||
      y >= board[0].length ||
      board[x][y] !== word[index]
    ) {
      return false;
    }

    const temp = board[x][y];
    board[x][y] = '*';

    const found =
      explore(x + 1, y, index + 1) ||
      explore(x - 1, y, index + 1) ||
      explore(x, y + 1, index + 1) ||
      explore(x, y - 1, index + 1);

    board[x][y] = temp;

    return found;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && explore(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}


const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);

console.log(find(board, "NOON"));  
console.log(find(board, "NOPE"));  
console.log(find(board, "CANON")); 
console.log(find(board, "QUINE")); 
console.log(find(board, "FADED")); 

const board2 = makeBoard(`E D O S Z
                          N S O N R
                          O U O O P
                          Z Q Z O R
                          F A D P L`);

console.log(find(board2, "NOOOOS")); 
