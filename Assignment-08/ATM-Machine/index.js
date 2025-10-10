let screen = document.getElementById("screen");
let cardSlot = document.getElementById("cardSlot");

let cardInserted = false;
let currentBalance = 10000;
let currentInput = "";
let currentOperation = "";

function setScreen(text) {
  screen.innerHTML = text;
}

cardSlot.addEventListener("click", function () {
  if (cardInserted === false) {
    cardInserted = true;
    cardSlot.innerText = "CARD INSERTED";
    setScreen(`
      <div style="color:#00ff00;">✓ CARD ACCEPTED</div>
      <div>Select an option:</div>
      <div>• WITHDRAW - Get cash</div>
      <div>• BALANCE - Check balance</div>
      <div>• DEPOSIT - Add money</div>
      <div>• EXIT - Remove card</div>
    `);
  }
});

// Withdraw
document.getElementById("withdrawBtn").addEventListener("click", function () {
  if (!cardInserted) return setScreen("Please insert your card first!");
  currentOperation = "withdraw";
  currentInput = "";
  setScreen("Withdraw selected.<br>Enter amount and press ENT");
});

// Deposit
document.getElementById("depositBtn").addEventListener("click", function () {
  if (!cardInserted) return setScreen("Please insert your card first!");
  currentOperation = "deposit";
  currentInput = "";
  setScreen("Deposit selected.<br>Enter amount and press ENT");
});

// Balance
document.getElementById("balanceBtn").addEventListener("click", function () {
  if (!cardInserted) return setScreen("Please insert your card first!");
  setScreen("Your current balance is:<br>$" + currentBalance);
});

// Exit
document.getElementById("exitBtn").addEventListener("click", function () {
  if (!cardInserted) return setScreen("Please insert your card first!");
  cardInserted = false;
  currentInput = "";
  currentOperation = "";
  cardSlot.innerText = "INSERT CARD";
  setScreen("Thank you for using NEXA PAY ATM.<br>Please take your card.");
});

// Keypad
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", function () {
    if (!cardInserted) return setScreen("Please insert your card first!");

    if (this.id === "clearBtn") {
      currentInput = "";
      setScreen("Input cleared");
    } else if (this.id === "enterBtn") {
      const amount = Number(currentInput);
      if (!amount || amount <= 0) return setScreen("Invalid amount. Try again.");

      if (currentOperation === "withdraw") {
        if (amount > currentBalance) {
          setScreen("Insufficient balance!");
        } else {
          currentBalance -= amount;
          setScreen("Withdrawn: $" + amount + "<br>New balance: $" + currentBalance);
        }
      } else if (currentOperation === "deposit") {
        currentBalance += amount;
        setScreen("Deposited: $" + amount + "<br>New balance: $" + currentBalance);
      }
      currentInput = "";
      currentOperation = "";
    } else {
      const val = key.getAttribute("value");
      if (val !== null) {
        currentInput += val;
        setScreen("Enter amount: " + currentInput);
      }
    }
  });
});
