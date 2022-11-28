function countToValue(number) {
  const newArray = [];
  if (number >= 0) {
    for (i=0; i <= number; i+=1) {
      newArray.push(i);
    }
  } else if (number <= 0) {
    for (i=0; i >= number; i-=1) {
      newArray.unshift(i);
    }
  } else if (isNaN(number)) {
    return false;
  }
  return newArray;
}

function robogerIt(number) {
  let numToString = "" + number;
  if (numToString.includes("3")) {
    return "Won't you be my neighbor?\n";
  } else if (numToString.includes("2")) {
    return "Boop!\n";
  } else if (numToString.includes("1")) {
    return "Beep!\n";
  } else {
    return (number + "\n");
  }
}

window.addEventListener("load", function() {
  const showNumbersBtn = document.getElementById("show-results-btn");
  const tryAgainBtn = document.getElementById("reset-btn");
  const inputDiv = document.getElementById("input-header");
  const resultDiv = document.getElementById("count-results");
  const formFieldDiv = document.getElementById("input-field");
  const form = document.querySelector("form");
  const formDiv = document.getElementById("form-div");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", function() {
    formDiv.removeAttribute("class");
    startBtn.classList.add("hidden");
  });

  showNumbersBtn.addEventListener("click", function() {
    inputDiv.classList.add("hidden");
    formFieldDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
  });

  tryAgainBtn.addEventListener("click", function() {
    inputDiv.classList.remove("hidden");
    formFieldDiv.classList.remove("hidden");
    resultDiv.classList.add("hidden");
  });


  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let input = document.getElementById("input-box").value;
    const arrayFromInput = countToValue(input);
    const arrayWithWordsAdded = arrayFromInput.map(robogerIt);

    inputDiv.classList.add("hidden");
    document.getElementById("output").innerText = arrayWithWordsAdded.join(" ");
  });
});