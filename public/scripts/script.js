// grabing html elements
const restartButton = document.querySelector(".restart-button")
const playBoxes = document.querySelectorAll(".box")

// function to clear board and restart

function restart(){
    for(i=0;i<=playBoxes.length-1; i++){
        playBoxes[i].innerHTML=""
        turn ="X"
    }
}



//Check for win 

function winCheck(){
    // array stores the content of each cell
    var boxContent = []
    for(i=0;i<=playBoxes.length-1; i++){
        boxContent[i] = playBoxes[i].innerHTML
    }
    

    // check for winning combinations

    if((boxContent[0]==boxContent[1] && boxContent[0] == boxContent[2] && boxContent[0]!==''||
        boxContent[3]==boxContent[4] && boxContent[3] == boxContent[5]&& boxContent[3]!==''||
        boxContent[6]==boxContent[7] && boxContent[6] == boxContent[8]&& boxContent[6]!==''||
        boxContent[0]==boxContent[3] && boxContent[0] == boxContent[6]&& boxContent[0]!==''||
        boxContent[1]==boxContent[4] && boxContent[1] == boxContent[7]&& boxContent[1]!==''||
        boxContent[2]==boxContent[5] && boxContent[2] == boxContent[8]&& boxContent[2]!==''||
        boxContent[0]==boxContent[4] && boxContent[0] == boxContent[8]&& boxContent[0]!==''||
        boxContent[2]==boxContent[4] && boxContent[2] == boxContent[6]&& boxContent[2]!=='') ){
            alert(`Player ${turn} won please restart`)
    }
    
}




// gameplay 

var win = false

var turn = "X"
//function to change cell content and check for win 

function play (){
    this.innerHTML = this.innerHTML == "" ? turn : this.innerHTML
    
    win = winCheck()

    //switch turns
    turn = turn == "X"? "O":"X"

    document.querySelector(".turn-display").innerHTML = `<h3>Player ${turn} turn to play</h3>`
    
}
// add eventlistener to every cell on board

for(i=0; i<=playBoxes.length-1; i++){
    playBoxes[i].addEventListener("click",play)
}



// display winner
function displayWinner(){
    if(winCheck()){
        alert(`Player ${turn} won please restart`)
    }
}
