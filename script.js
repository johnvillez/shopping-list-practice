const ul = document.getElementById("list");
const input = document.getElementById("user-input")
const addItemBtn = document.getElementById("add-item")
const clearItemBtn = document.getElementById("clear-items");

function inputLength() {
	return input.value.length
}


// Adding Item
function addItem() { 
	const li = document.createElement("li");
	li.classList.add("list-item");
	li.append(document.createTextNode(input.value));
	li.addEventListener("click", toggleDone)
	ul.appendChild(li);
	input.value = "";

	Creating delete button and append to li
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add('delete-item');
	deleteBtn.append(document.createTextNode('Delete'));
	deleteBtn.addEventListener("click", deleteItem);
	li.append(deleteBtn);

	// toggle strikethrough
	function toggleDone() {
		li.classList.toggle("done");
	}

	// delete item
	function deleteItem() {
		li.remove();

	}
}

// Adding Item by button 
function addItemByButton() {
	if (inputLength() > 0) {
		addItem();
	}
}

// Adding Item by Enter Key
function addItemByKey(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addItem();
	}
}




// Clearing the list (working)
function clearList() {
	ul.innerHTML = "";
}


// Clear item button (working)
clearItemBtn.addEventListener("click", clearList);

// Add item button (working)
addItemBtn.addEventListener("click", addItemByButton);

// Add item by enter Key
input.addEventListener("keypress", addItemByKey);