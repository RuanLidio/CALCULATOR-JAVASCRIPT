
let num1 = null;
let operator = null;

const input = document.getElementById("box");

const backspaceBtn = document.getElementById("return");

let timer = null;
let holding = false;
let clicking = false;

backspaceBtn.addEventListener("mousedown", () => {
  clicking = true;
  holding = false;

  timer = setTimeout(() => {
    input.value = "";
    holding = true;
  }, 500);
});

document.addEventListener("mouseup", () => {
  if (!clicking) return;

  clearTimeout(timer);

  if (!holding) {
    input.value = input.value.slice(0, -1);
  }

  clicking = false;
});

backspaceBtn.addEventListener("mouseleave", () => {
  clearTimeout(timer);
});

input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9 "."]/g, "");
        });
    


function enter(value) {
        if (input.value === "0" && value === "0") {
            return;
            }
        if (input.value === "0") {
        input.value = value;
        return;
        }
        input.value += value;   
    }
function setOperator(op) {
    num1 = Number(input.value);
    operator = op;
    input.value = "";
}

function finalResult(){
    let num2 = Number(input.value);
    let total = 0;
    if (operator === "+") {
        total = num1 + num2;
    }
    if (operator === "-") {  
        total = num1 - num2;
    }
    if (operator === "x") {
        total = num1 * num2;
    }   
    if (operator === "/") {
        
        total = num1 / num2;
    }
    if (!Number.isInteger(total)) {
    total = total.toFixed(3); // limita pra 2 casas decimais
  }
    
    input.value = total;
}
