# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-ojxd2ups?file=1-colorChanger%2Fchaiaurcode.js)


# Solution code

## Project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
  })
})
```
## Project 2

```javascript
const form = document.querySelector('form')

// gives you empty value
// const height = parseInt(document.querySelector('#height'.value))

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
const results  = document.querySelector('#results')

if(height === '' || height<0 || isNaN(height))
  results.innerHTML = `${height}`

else if(weight === '' || weight<0 || isNaN(weight))
  results.innerHTML = `${weight}`
else{
  const bmi =  (weight / ((height * height)/10000)).toFixed(2)
  //show the result
  results.innerHTML = `<span>${bmi}</span>`
  }
})



```

## Project 3

```javascript
const clock =document.querySelector('#clock')

let now = new Date()
let time = now.toLocaleTimeString()

setInterval(function(){
let now = new Date()
clock.innerHTML = now.toLocaleTimeString()
},1000)

```

## Project 2

```javascript
let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];

let numGuess = 1;
let playGame = true;

if(playGame){

  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
    if(isNaN(guess)){
      alert('Enter a valid number')
    }
    else if(guess<1){
      alert('Enter a number greater than 1')
    }
    else if(guess>100){
      alert('Enter a number smaller than 100')
    }
    else{
      prevGuess.push(guess)
      if(numGuess===11){
        cleanUpGuess(guess)
        displayMessage(`Game Over , the random number was ${randomNumber}`)
        endGame()
      }
      else{
        cleanUpGuess(guess)
        checkGuess(guess)
        
      }
    }
}


function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage('YOU WON')
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage('Your guess is low')
  }
  else if(guess > randomNumber){
    displayMessage('Your guess is high')
  }
}

function cleanUpGuess(guess){
  userInput.value =''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){

  userInput.value=''
  userInput.setAttribute('disabled' , '')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()

 
 
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  })


  
}


```