let color = 'black'

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btnPopup = document.querySelector('#popup');
    btnPopup.addEventListener('click', function(){
        let size= getSize();
        createBoard(size);
    })
    
    
})

function createBoard(size){
    const board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for(let i = 0; i<numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover",colorDiv)
        board.insertAdjacentElement('beforeend',div);
    }

}

function getSize(){
    let choice = prompt("Enter drawing board Size: ");
    let message = document.querySelector('#message')
    if(choice ==''){
        message.textContent = 'Please provide a number';
    }
    else if(choice < 1 || choice >100){
        message.textContent="Provide a number between 1 and 100";
    } else{
        message.textContent = "You can play"
        return choice;
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else{
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}
