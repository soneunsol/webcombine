let computernumber = 0
let playbutton = document.getElementById('play_button')
// console.log(playbutton)
playbutton.addEventListener('click',play)
// addEventListener('이벤트 이름', 이벤트시 실행시킬 함수)
let userInput = document.getElementById('user_input')
userInput.addEventListener('focus',function(){
    userInput.value = ""
})
// console.log(userInput)
let resultArea = document.getElementById('result_area')
// console.log(resultArea)
let resetButton = document.getElementById('reset_button')
resetButton.addEventListener('click', reset)
let chances = 7
let gameOver = false
let chanceArea = document.getElementById('chance_area')
let userValueList = []




function pickRandomNumber(){
    computernumber = Math.floor(Math.random() * 100) + 1
    console.log(computernumber)
} 
pickRandomNumber()

function play(){
    const USER_VALUE = userInput.value 
    console.log(USER_VALUE)
    if(USER_VALUE < computernumber){
        resultArea.textContent = "UP!"
    } else if(USER_VALUE > computernumber){
        resultArea.textContent = "DOWN!"
    } else{
        resultArea.textContent = "딩동댕♪"
        gameOver == true
    }
    if(USER_VALUE < 1 || USER_VALUE > 100){
        resultArea.textContent = "1부터 100사이의 숫자를 입력해주세요"
        return
    }
    if(userValueList.includes(USER_VALUE)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 넣어주세요."
        return
    }
    userInput.value = ''
    chances--
    userValueList.push(USER_VALUE)
    chanceArea.textContent = `남은 기회 : ${chances}번`
    if(chances == 0){
        gameOver = true
    }
    if(gameOver == true){
    playbutton.disabled = true
    }
}



function reset(){
    pickRandomNumber()
    userInput.value = ''
    resultArea.textContent = "결과창"
    chances = 7
    chanceArea.textContent = `남은 기회 : ${chances}번`
    userValueList = []

    
}



