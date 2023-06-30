const btn = document.getElementById("button");
const parent = document.getElementById("Cal");

parent.addEventListener("click", (event) => {
  let target = event.target.innerHTML;
  const audio = new Audio("mouse.mp3");
  audio.play();
  if (target === "AC") {
    btn.value = "";
  } else if (target === "C") {
    btn.value = btn.value.slice(0, -1);
  } else if (event.target.classList.contains("number")) {
    btn.value += target;
  } else if (event.target.classList.contains("oprator")) {
    const arr = ["+", "-", "*", "/", "%", "."];
    let last = btn.value[btn.value.length - 1];
    if (arr.includes(last)) {
      btn.value = btn.value.slice(0, -1) + target;
      return;
    }
    btn.value += target;
  } else if (target === "=") {
    if (btn.value.length != 0) {
      try {
        btn.value = eval(btn.value);
      } catch {
        btn.value = "This is wrong expression!";
      }
    } else {
      btn.value = "";
    }
  }
});

document.body.addEventListener("keypress", (event) => {
  const audio = new Audio("mouse.mp3");
  audio.play();
  let target = event.key;
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operatorsArray = ["+", "-", "*", "/", "%"];
  if (target === "C") {
    btn.value = "";
  }
  else if (target === "c") {
    btn.value = btn.value.slice(0, -1);
  } 
  else if (numbersArray.includes(target)) {
    btn.value += target;
  } 
  else if (operatorsArray.includes(target)) {
    let lastChar = btn.value[btn.value.length - 1];
    if (operatorsArray.includes(lastChar)) {
      btn.value = btn.value.slice(0, -1) + target;
      return;
    } 
    btn.value += target;
  } 
  else if (target === "=") {
    if (btn.value.length !== 0) {
      try {
        btn.value = eval(btn.value);
      } catch (error) {
        btn.value = "Syntax Error!";
      }
    } else btn.value = "";
  } else {
    alert("Wrong key pressed!");
  }
});
