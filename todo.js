const home = document.querySelector('#home')
const newProfile = document.querySelector('.new-profile')
const profile = document.querySelector('.profile')
const all = document.querySelector('.all')
const newPForm = document.querySelector('form')
const formInput = document.querySelector('#new-profile-input')
const cancel = document.querySelector('.cancel')
const createProfile = document.querySelector('.create')
const homeMain = document.querySelector('.home-main')
const allMain = document.querySelector('.all-main')
const addProfileDiv = document.querySelector('.add-profile-div')
const homeDiv = document.querySelector('.home-div')

const todos = document.querySelector('#todos')
const todosSpan = document.querySelector('.todos-span')

newProfile.addEventListener('click', () => {
    newPForm.style.cssText = 'display: inline'
})
cancel.addEventListener('click', (e) => {
    newPForm.style.cssText = 'display: none'
    e.preventDefault()
})
createProfile.addEventListener('click', (e) => {
    if (formInput.value === '') {
        createProfile.addAttribute('disabled')
    }
    const div = document.createElement('div')
    const span = document.createElement('span')
    const ita = document.createElement('i')
    div.classList.add('home-div')
    span.textContent = formInput.value
    ita.textContent = 'On This Computer'
    div.append(span, ita)
    homeMain.append(div)
    e.preventDefault()
    formInput.value = ''
    newPForm.style.cssText = 'display: none'
    div.addEventListener('click', () => {
        home.style.cssText = 'display: none'
        todos.style.cssText = 'display: flex'
        todosSpan.textContent = span.textContent
        for (const navs of document.querySelectorAll('.new-nav')) {
            if(navs.classList.contains(`${todosSpan.textContent}`)) {
                navs.style.display = 'flex'
            } else {
                navs.style.display = 'none'
            }}
    })
})
addProfileDiv.addEventListener('click', () => {
    newPForm.style.cssText = 'display: inline'
})
profile.addEventListener('click', () => {
    profile.classList.add('active')
    all.classList.remove('active')
    homeMain.style.cssText = 'display: flex'
    allMain.style.cssText = 'display: none'
})
all.addEventListener('click', () => {
    profile.classList.remove('active')
    all.classList.add('active')
    allMain.style.cssText = 'display: flex'
    homeMain.style.cssText = 'display: none'
    // allMain.innerHTML = todosMain.innerHTML
    console.log(34);
})