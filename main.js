
let formEl = document.getElementById('form-fill')
let ageEl = document.getElementById('age')
let nameEl= document.getElementById('name')
let username = document.createElement('input')
let usernameBtn = document.createElement('button')
let resetEl = document.getElementById('resetBtn')
let fillEl = document.getElementById('fill-me')
let getHerosBtn = document.getElementById('getAllHeros')
let loginCounter = 0


const baseURL = 'http://localhost:4500/api/heros'

function onSubmit(event){ 
    event.preventDefault()
    let age = ageEl.value
    let name = nameEl.value
    let formInfo = document.createElement('div')
    formInfo.innerHTML=''
if(age > 18 && loginCounter === 0){
    fillEl.innerHTML=``
    formInfo.innerHTML = `Hello ${name} Welcome to our Website`
    fillEl.appendChild(formInfo)
    login()
}else if(age<18){
    let ageWait = 18 - age
    fillEl.innerHTML=``
    formInfo.innerHTML = `Hello ${name} we see that you are ${age} and do not meet our minimum age requirement.<br> You have ${ageWait} years until you are eligible to visit this website`
    fillEl.appendChild(formInfo)
    loginCounter = 0
    alert('UNDERAGE WARNING')
}else if(loginCounter>=1){
    alert('Please login or refresh the page')
}
loginCounter+=1
}

function login(){
    usernameBtn.textContent='click me'
    usernameBtn.classList.add('usernameBtn-class')
    username.placeholder='username'
    username.classList.add('usernameClass')

    
    fillEl.appendChild(username)
    fillEl.appendChild(usernameBtn)
}
function reset(event){
    event.preventDefault()
    fillEl.innerHTML = ``
    loginCounter = 0
}
function createHeroCard(hero){

    let newHeroBox = document.createElement('div')
    newHeroBox.innerHTML= `<h1>${hero.name}</h1>`
    fillEl.appendChild(newHeroBox)
console.log(hero.name)

}
const getAllHeros = ()=>{
    axios.get(`${baseURL}`)
    .then(res =>{
        console.log(res.data)
        res.data.forEach(hero => {
            createHeroCard(hero)
        })
    })
    }



formEl.addEventListener('submit', onSubmit )
resetEl.addEventListener('click', reset)
getHerosBtn.addEventListener('click', getAllHeros)
