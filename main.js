const noteList = document.getElementById('noteList');
const delete_button = "icons8-delete.svg"
const save_button ="загрузка.png"
const change_button = "icons8-редактировать.svg"
noteList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('edit-button')) {
        const note = target.closest('.note');
        const noteText = note.querySelector('.note-text');
        const editInput = note.querySelector('.edit-input');
        noteText.classList.toggle('hidden');
        editInput.classList.toggle('hidden');
        if (!noteText.classList.contains('hidden')) {
            editInput.value = noteText.textContent;
            editInput.focus();
        }
    } else if (target.classList.contains('save-button')) {
        const note = target.closest('.note');
        const noteText = note.querySelector('.note-text');
        const editInput = note.querySelector('.edit-input');
        noteText.textContent = editInput.value;
        noteText.classList.remove('hidden');
        editInput.classList.add('hidden');
        

        const noteContent = editInput.value;
        localStorage.setItem('note_' + Date.now(), noteContent);
    } else if (target.classList.contains('delete-button')) {
        let note = target.parentElement
        console.log(note)
        note.remove()
    }
    }
);

noteList.addEventListener('keypress', function(event) {
    const target = event.target;
    if (event.key === 'Enter' && target.classList.contains('edit-input')) {
        const note = target.closest('.note');
        const saveButton = note.querySelector('.save-button');
        saveButton.click(); 
    }
});

area.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); 

        let nowText = area.value.trim();
        if(nowText) {
            const div = document.createElement('div');
            div.className = 'note';
            div.innerHTML = `
                <button type="button" class="edit-button"></button>
                <button type="button" class="hidden-button save-button"></button>
                <button type="button" class="hidden-button delete-button"></button>
                <div class="note-content">
                    <span class="note-text">${nowText}</span>
                    <input type="text" class="edit-input hidden" value="${nowText}">
                </div>`;
            noteList.append(div);
            localStorage.setItem('note_' + Date.now(), nowText);
            area.value = '';
        } else {
            alert('Введите заметку!');
        }
    }
});

window.addEventListener('load', function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('note_')) {
            const noteContent = localStorage.getItem(key);
            const div = document.createElement('div');
            div.className = 'note';
            div.innerHTML = `
                    <button type="button" class="edit-button"></button>
                    <button type="button" class="hidden-button save-button"></button>
                    <button type="button" class="hidden-button delete-button"></button>
            <div class="note-content">
                <span class="note-text">${noteContent}</span>
                <input type="text" class="edit-input hidden" value="${noteContent}">
            </div>`;
            noteList.append(div);
        }
    }
});
noteList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('edit-button')) {

    } else if (target.classList.contains('save-button')) {

    } else if (target.classList.contains('delete-button')) {
        let note = target.closest('.note');
        note.remove();

        const noteContent = note.querySelector('.note-text').textContent;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('note_') && localStorage.getItem(key) === noteContent) {
                localStorage.removeItem(key);
                break; 
            }
        }
    }
});

document.getElementById('saveButton').addEventListener('click', function(event) {
    let nowText = area.value.trim();
    if(nowText) {
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `
                    <button type="button" class="edit-button"></button>
                    <button type="button" class="hidden-button save-button"></button>
                    <button type="button" class="hidden-button delete-button"></button>
        <div class="note-content">
            <span class="note-text">${nowText}</span>
            <input type="text" class="edit-input hidden" value="${nowText}">
        </div>`;
        noteList.append(div);
        localStorage.setItem('note_' + Date.now(), nowText);
    } else {
        alert('Введите заметку!');
    }
});

window.onload = function() {
    var textElement = document.getElementById('text');
    var inputElement = document.getElementById('input');
    inputElement.style.width = length(nowText) + 'px'; }