const todosMain = document.querySelector('.todos-main')
const todosDiv = document.querySelectorAll('.todos-div')
const divButton = document.querySelector('.add-todo')
const todosInput = document.querySelector('.todos-input')
const back = document.querySelector('.back')

back.addEventListener('click', () => {
    home.style.cssText = 'display: block'
    todos.style.cssText = 'display: none'
})
divButton.addEventListener('click', () => {
    if (todosInput.value === '') {
        div.addAttribute('disabled')
    }
    const newNav = document.createElement('nav')
    const todo = document.createElement('div')
    const done = document.createElement('button')
    const listInput = document.createElement('input')
    const expand = document.createElement('button')

    done.textContent = '*'
    expand.textContent = '^'
    newNav.classList.add('new-nav', `${todosSpan.textContent}`)

    todo.classList.add('todo')
    todo.append(done, listInput, expand)
    listInput.value = todosInput.value
    todosInput.value = ''

    const details = document.createElement('div')
    const left = document.createElement('section')
    const descriptionLabel = document.createElement('label')
    const description = document.createElement('textarea')
    const right = document.createElement('section')
    const dateLabel = document.createElement('label')
    const date = document.createElement('input')
    const priorityLabel = document.createElement('label')
    const priority = document.createElement('select')
    const none = document.createElement('option')
    const low = document.createElement('option')
    const medium = document.createElement('option')
    const high = document.createElement('option')
    const remove = document.createElement('button')

    details.classList.add('details')
    descriptionLabel.textContent = 'Notes'
    dateLabel.textContent = 'Due Date'
    date.type = 'date'
    priorityLabel.textContent = 'Priority'
    none.setAttribute('value', 'None')
    none.textContent = 'None'
    low.setAttribute('value', 'Low')
    low.textContent = 'Low'
    medium.setAttribute('value', 'Medium')
    medium.textContent = 'Medium'
    high.setAttribute('value', 'High')
    high.textContent = 'High'

    remove.textContent = 'Delete'
    priority.append(none, low, medium, high)
    left.append(descriptionLabel, description)
    right.append(dateLabel, date, priorityLabel, priority, remove)
    details.append(left, right)

    newNav.append(todo, details)
    todosMain.prepend(newNav)
    done.addEventListener('click', () => {
        todosMain.removeChild(newNav)
    })
    expand.addEventListener('click', () => {
        details.classList.toggle('active')
        details.classList.toggle('details')
    })
    remove.addEventListener('click', () => {
        todosMain.removeChild(newNav)
    })
    localStorage.setItem('todosMain')
})
