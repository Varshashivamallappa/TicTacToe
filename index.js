
const cellDivs = document.querySelectorAll('.cell');


var player1Score = 0;
var player2Score = 0;


document.getElementById("p1score").innerHTML = player1Score;
document.getElementById("p2score").innerHTML = player2Score;

document.getElementById('p2arrow').style.display = 'none';


const token1 = '×';
const token2 = '○';


let gameIsLive = true;
let xIsNext = true;



const letterToSymbol = (letter) => letter === 'x' ? token1 : token2;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {

    player1Score++;
    document.getElementById("p1score").innerHTML = player1Score;
     handleReset();
     handleCellClick();
  } else {

    player2Score++;
    document.getElementById("p2score").innerHTML = player2Score;
     handleReset();
     handleCellClick();
  }

};


const gameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

 
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    handleReset();
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      document.getElementById('p1arrow').style.display = 'inline';
      document.getElementById('p2arrow').style.display = 'none';
    } else {
      document.getElementById('p1arrow').style.display = 'none';
      document.getElementById('p2arrow').style.display = 'inline';
    }
  }
};


function handleReset(){
  xIsNext = true;

  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
   }
  gameIsLive = true;
}


const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    gameStatus();
  } else {
    classList.add('o');
    gameStatus();
  }
};



for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}



// Timer
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            

            if(player1Score>player2Score){
    			if(!alert('The Result of your Game\nPlayer1 Score: '+player1Score+'\nPlayer2 Score: '+player2Score+'\nPlayer 1 is the Winner!!')){window.location.reload();}
    		  }
    		  else if(player1Score<player2Score) {
    			  if(!alert('The Result of your Game\nPlayer1 Score: '+player1Score+'\nPlayer2 Score: '+player2Score+'\nPlayer 2 is the Winner!!')){window.location.reload();}
    		  }
    		  else if(player1Score == player2Score) {
    			  if(!alert('The Result of your Game\nPlayer1 Score: '+player1Score+'\nPlayer2 Score: '+player2Score+'\nIts a Draw!!')){window.location.reload();}
    		  }
       }
        else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown( "three-countdown", 3, 0);
