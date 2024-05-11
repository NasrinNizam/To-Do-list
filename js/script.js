let all        = document.querySelector('.all')
let display    = document.querySelector('.display')
let text       = document.querySelector('.text')
let circle     = document.querySelector('.circle')
let todoBox    = document.querySelector('.todoBox')
let todoInput  = document.querySelector('.todoInput')
let todoButton = document.querySelector('.todoButton')
let todoResult = document.querySelector('.todoResult')
let i = 0

todoButton.addEventListener('click' , ()=>{
    if(todoInput.value == ''){
        alert('give a title')
    }else{


        // =====create tags ======//
      let singleTodo = document.createElement('div')
      let singleInput = document.createElement('input')
      let Edit = document.createElement('button')
      let Delete = document.createElement('button')

        // ==== append child ====//
        todoResult.appendChild(singleTodo)
        singleTodo.appendChild(singleInput)
        singleTodo.appendChild(Edit)
        singleTodo.appendChild(Delete)


        // ===== class list =====//
        singleTodo.classList.add('singleTodo')
        singleInput.classList.add('singleInput')
        Edit.classList.add('Edit')
        Delete.classList.add('Delete')

        // ==== add content ====//

        Edit.innerHTML = 'Edit'
        Delete.innerHTML = 'Delete'
        singleInput.value = todoInput.value
        todoInput.value = ''


        // ===== add attribute ====//
        singleInput.setAttribute('readonly' , 'readonly')

        Delete.addEventListener('click',()=>{
            singleTodo.remove()
        })
        Edit.addEventListener('click', ()=>{
            if(Edit.innerHTML == 'Edit'){
                singleInput.removeAttribute('readonly', 'readonly')
                Edit.innerHTML = 'Save'
                Edit.style = 'background: green;'
            }else{
                Edit.innerHTML = 'Edited'
                Edit.style = 'background:yellow;'
                singleInput.setAttribute('readonly', 'readonly')
            }

        })


    }
})
