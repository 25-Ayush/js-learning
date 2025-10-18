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