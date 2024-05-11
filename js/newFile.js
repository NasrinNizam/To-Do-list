todoButton.addEventListener('click', () => {
    if (todoInput.value == '') {
        alert('give a title');
    } else {
        // ===creating tags===== //
        let singleTodo = document.createElement('div');
        let singleInput =
            // =====append child====//
            todoResult.appendChild(singleTodo);




        // ==== class list=====//
        singleTodo.classList.add('singleTodo');
    }
});
