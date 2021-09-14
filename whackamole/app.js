const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score =document.querySelector('#score')

let result=0
let hitPosition
let currentTime=30
let timerID=null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition)
        {
            result++
            score.textContent = result
            hitPosition= null
        }
    })
})


function moveMole(){
    timerID=setInterval(randomSquare,400)
}


//use a button
moveMole()
function countDown(){
    currentTime--
    timeLeft.textContent=currentTime

    if (currentTime==0){
        clearInterval(countDownTimerID)
        clearInterval(timerID)
        alert('Game over, your final score is '+ result)
    }
}

let countDownTimerID = setInterval(countDown,1000)