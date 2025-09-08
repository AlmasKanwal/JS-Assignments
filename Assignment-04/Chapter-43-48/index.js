/* Question No.03: Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted */

var buttons = document.getElementsByTagName("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}


/* Question No.05: Show a counter in browser. Counter should increase on click on increase
button and decrease on click on decrease button. And show updated counter
value in browser. */

var count = 0;
var counterDisplay = document.getElementById("counter");

document.getElementById("increase").onclick = function () {
    count++;
    counterDisplay.innerHTML = count;
}

document.getElementById("decrease").onclick = function () {
    count--;
    counterDisplay.innerHTML = count;
}