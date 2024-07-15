document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const addTodoBtn = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        const todoDueDate = todoDate.value;
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <input type="checkbox" class="todo-checkbox">
                <span class="todo-text">${todoText}</span>
                <span class="todo-date">${todoDueDate}</span>
                <button class="edit">&#9998;</button>
                <button class="delete">&#10005;</button>
                <div class="comment-container" style="display: none;">
                    <input type="text" class="comment-input" placeholder="댓글을 입력하세요">
                    <button class="add-comment">댓글 추가</button>
                    <ul class="comment-list"></ul>
                </div>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';
            todoDate.value = '';

            const addCommentBtn = todoItem.querySelector('.add-comment');
            const commentContainer = todoItem.querySelector('.comment-container');

            addCommentBtn.addEventListener('click', function() {
                commentContainer.style.display = 'block';
            });

            const commentInput = todoItem.querySelector('.comment-input');
            const commentList = todoItem.querySelector('.comment-list');

            commentInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    const commentText = commentInput.value.trim();
                    if (commentText !== '') {
                        const commentItem = document.createElement('li');
                        commentItem.textContent = commentText;
                        commentList.appendChild(commentItem);
                        commentInput.value = '';
                    }
                }
            });
        }
    });

    todoList.addEventListener('click', function(event) {
        const target = event.target;
        const todoItem = target.parentElement;

        if (target.classList.contains('delete')) {
            todoItem.remove();
        } else if (target.classList.contains('todo-checkbox')) {
            todoItem.classList.toggle('completed');
        } else if (target.classList.contains('edit')) {
            const todoTextElement = todoItem.querySelector('.todo-text');
            const todoDateElement = todoItem.querySelector('.todo-date');
            const newTodoText = prompt("할 일을 수정하세요:", todoTextElement.textContent);
            const newTodoDate = prompt("마감 날짜를 수정하세요 (YYYY-MM-DD):", todoDateElement.textContent);

            if (newTodoText !== null && newTodoText.trim() !== '') {
                todoTextElement.textContent = newTodoText.trim();
            }
            if (newTodoDate !== null && newTodoDate.trim() !== '') {
                todoDateElement.textContent = newTodoDate.trim();
            }
        }
    });

    const sideBar = document.querySelector('.side_bar');
    const mainContent = document.querySelector('.main_content');
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    toggleSidebarBtn.addEventListener('click', function() {
        sideBar.classList.toggle('closed');
        mainContent.classList.toggle('expanded');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });

            targetSection.classList.add('active');
        });
    });
});
