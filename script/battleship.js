var game = [['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.'],
            ['.', '.', '.', '.', '.', '.', '.', '.' ,'.']
        ];

var board = document.createElement('pre');
document.body.appendChild(board);

var button = document.createElement('button');
button.onclick = fire;

var t = document.createTextNode('Fire');
document.body.appendChild(button);
button.appendChild(t);

function drawBoard() {
    'use strict';
    var boardContents = '',i,j;
    for (i=0; i<9; i++){
        for (j=0;j<9;j=j+1) {
            boardContents = boardContents + game[i][j] + '      ';
        }
        boardContents = boardContents + '<br><br><br>';
    }
    return boardContents;
}
board.innerHTML  = drawBoard();

do {
    var  x = prompt('ระบุตำแหน่งในแนวแกน X ที่คุณต้องการวางเรือ: (0-8)');
    x = Number(x);
    if (x >= 9)alert('!!ระบุตำแหน่งในแนวแกน X ที่คุณต้องการวางเรือผิดพลาดโปรดระบุใหม่อีกครั้ง');
}while (x >= 9)
   
do {
    var  y = prompt('ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการวางเรือ: (0-8)')
    y = Number(y); 
    if (y >= 9)alert('!!ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการวางเรือผิดพลาดโปรดระบุใหม่อีกครั้ง');
}while (y >= 9)

do{
    var direction = prompt ('คุณต้องการวางเรือในแนวนอน กด(h) หรือแนวตั้ง กด(v)');
    if (direction[0] != 'h'&& direction[0] != 'v')alert('!!ระบุตำแหน่งแนวการวางเรือผิดพลาดโปรดระบุใหม่อีกครั้ง');  
}while (direction[0] != 'h'&& direction[0] != 'v')


if (direction[0] == 'h'){
    var c;
    for (c = x;c < (x + 4); c++) {
         game[y][c] = '#';
    }
}
if (direction[0] == 'v') {
    var c;
    for (c = x;c < (y + 4); c++) {
         game[c][x] = '#';
    }
} 
board.innerHTML  = drawBoard();

function fire() {
    'use strict';
    
    do {
        var  fireX = prompt('ระบุตำแหน่งในแนวแกน X ที่คุณต้องการยิงเรือ: (0-8)');
        fireX = Number(fireX);
        if (fireX >= 9)alert('!!ระบุตำแหน่งในแนวแกน X ที่คุณต้องการยิงเรือผิดพลาดโปรดระบุใหม่อีกครั้ง');
    }while (fireX >= 9)
           
    do {
        var  fireY = prompt('ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการยิงเรือ: (0-8)')
        fireY = Number(fireY); 
        if (fireY >= 9)alert('!!ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการยิงเรือผิดพลาดโปรดระบุใหม่อีกครั้ง');
    }while (fireY >= 9)
    

    if (game[fireY][fireX] == '.'){
        alert('พลาดเป้า');
    }
    else if (game[fireY][fireX] == '*') {
        alert('เรือในตำแหน่งดังกล่าวถูกยิงไปแล้ว');
    } else {
        alert ('Boom!!! คุณยิงโดนเรือ');
        game[fireY][fireX] = '*';
        board.innerHTML = drawBoard();
    }
    var shipfound,i,j;
    for (i=0; i<9; i++){
        for (j=0;j<9;j++) { 
            if (game[i][j] != '.' && game[i][j] != '*'){
                shipfound = true;
            }
        } 

    } 
    if (!shipfound){
        alert('เรือทุกลำถูกจมหมดแล้ว เก่งมากกัปตัน! จบเกม');
        document.body.removeChild(button);
    }  
}