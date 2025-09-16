var inputBox = document.getElementById("task");
var list = document.getElementById("todoList");
var msg = document.getElementById("message");

// Add Task Function
function addTask() {
    var taskValue = inputBox.value.trim(); 

    // If empty, show message and stop
    if (taskValue === "") {
        msg.style.display = "block";
        return; 
    } else {
        msg.style.display = "none";
    }

    // Create li 
    var li = document.createElement("li");

    // span for editable and replaceable task
    var span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskValue;

    // Edit/Delete buttons parent div
    var actionDiv = document.createElement("div");
    actionDiv.className = "actions";

    // Edit Button
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";
    editBtn.onclick = function () {
        editList(li, editBtn);
    }

    // Delete Button
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";
    delBtn.onclick = function () {
        li.remove();
    }

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actionDiv);
    
    list.appendChild(li);

    inputBox.value = "";   // reset input
}

// Edit Task Function
function editList(li, editBtn) {
    if (editBtn.textContent === "Edit") {
        // Find the current span (always inside li)
        var span = li.querySelector(".task-text");

        // Create editable input
        var input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.className = "editInput";

        // Replace span with input
        li.replaceChild(input, span);

        editBtn.textContent = "Save";
    } else {
        // Find the current input
        var inputBox = li.querySelector(".editInput");

        // Create span again with updated text
        var newSpan = document.createElement("span");
        newSpan.className = "task-text";
        newSpan.textContent = inputBox.value;

        // Replace input with span
        li.replaceChild(newSpan, inputBox);

        editBtn.textContent = "Edit";
    }
}

// Delete All Task
function deleteAll() {
    list.innerHTML = "";
}

