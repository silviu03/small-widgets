let prefix = document.getElementById('prefix');
let firstName = document.getElementById('name');
let surname = document.getElementById('surname');
let namesList = document.getElementsByClassName('list-area');
let createBtn = document.getElementById('createBtn');
let updateBtn = document.getElementById('updateBtn');
let deleteBtn = document.getElementById('deleteBtn');
let listName = document.querySelector('.list-name');
let listItems = null;

let state = [];
//add text in input and push info in state array
function addState(surname, firstName) {
    let person = { surname: surname, firstName: firstName }
    state.push(person);
    renderState()
}
function updateState(updateItems) {
    let updateItemInitex = updateItems.getAttribute('data-index');
    state[updateItemInitex].firstName = firstName.value;
    state[updateItemInitex].surname = surname.value;
    renderState()
}
function deleteState(selectedItems) {
    for (i = 0; i < selectedItems.length; i++) {
        let selectedItemIndex = selectedItems[i].getAttribute('data-index');
        state.splice(selectedItemIndex, 1)
    }
    renderState()
}
function renderState(newState) {
    let internalState = state;
    if (newState !== undefined) {
        console.log(newState.length)
        if (newState.length > 0) {
            internalState = newState;
        }
    }
    listName.innerHTML = ""
    for (i = 0; i < internalState.length; i++) {
        let submitedName = document.createElement('li');
        submitedName.setAttribute('data-index', i);
        submitedName.className += " list-item";
        submitedName.innerHTML = internalState[i].surname + " , " + internalState[i].firstName;
        listName.appendChild(submitedName);
    }
    listItems = document.querySelectorAll('.list-item');
    for (j = 0; j < listItems.length; j++) {
        let item = listItems[j]
        item.addEventListener('click', function () {
            for (k = 0; k < listItems.length; k++) {
                listItems[k].classList.remove('selected')
            }
            item.classList.toggle('selected');
        })
    }
}
createBtn.addEventListener('click', function () {
    addState(surname.value, firstName.value)
})

deleteBtn.addEventListener('click', function () {
    let selectedItems = document.querySelectorAll('.selected');
    deleteState(selectedItems);
})
updateBtn.addEventListener('click', function () {
    let updateItems = document.querySelector('.selected');
    updateState(updateItems);

})


prefix.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(prefix.value)
        let newState = state.filter((person) => person.surname.startsWith(prefix.value));
        renderState(newState);
    }

});