console.log('I am here!')
let containerEl = document.createElement('div')
containerEl.classList.add('container')
let innerDiv = document.createElement('div')
innerDiv.classList.add('inner-div')
let main = document.querySelector('main')
let pressButton=document.createElement('button')
pressButton.classList.add('press-button')
const yesButton = document.querySelector('button')
const modal = document.querySelector('.modal')
let points = 0
let level = 1


const toggleModal = ()=> {  
  document.querySelector('.modal').classList.toggle('hidden')
}
const removeEls = ()=> {  
  document.querySelector('main').removeChild(yesButton)
  document.querySelector('main').removeChild(document.querySelector('h1'))
}
const addGameEls = ()=>{
  console.log('adding game els')
  main.appendChild(containerEl)
  containerEl.appendChild(innerDiv)
  main.appendChild(pressButton)
}
const checkThere = ()=> {
  if (level === 1) {
    if (points === 200) {
      console.log('you made it')
      // disable button
      pressButton.removeEventListener('click', buttonPress)
    }
  }
}




yesButton.addEventListener('click', ()=>{
  removeEls()
  toggleModal()
})

modal.addEventListener('click', ()=> {
  toggleModal()
  addGameEls()
})
const buttonPress = ()=> {
  points += 10
  innerDiv.style.height = `${points}px`
  checkThere()
}
pressButton.addEventListener('click', buttonPress)

