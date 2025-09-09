/* Question No.01: Sigup Form Data Display */
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    var display = document.getElementById("display");
    display.innerHTML = `<h3>Form Data</h3>
                        <p><strong>Name:</strong> ${username}</p>
                        <p><strong>Email:</strong> ${email}</p>
    `
})


/* Question No.02: Read More Content */
var button = document.getElementById("btn");

button.addEventListener("click", function () {
    var more = document.getElementById("more");

    if (more.style.display === "none") {
        more.style.display = "inline";
        button.innerText = "Read Less"
    } else {
        more.style.display = "none";
        button.innerText = "Read More"
    }
})


/* Question No.03: Student Form */
function add(){
  if(!n.value||!e.value||!a.value){alert("Fill all fields");return;}
  let r=t.insertRow();
  r.innerHTML=`<td>${n.value}</td><td>${e.value}</td><td>${a.value}</td>
               <td><button onclick="edit(this)">Edit</button>
                   <button onclick="this.parentNode.parentNode.remove()">Del</button></td>`;
  n.value=e.value=a.value="";
}
function edit(b){
  let r=b.parentNode.parentNode;
  r.cells[0].innerText=prompt("Name",r.cells[0].innerText);
  r.cells[1].innerText=prompt("Email",r.cells[1].innerText);
  r.cells[2].innerText=prompt("Age",r.cells[2].innerText);
}
