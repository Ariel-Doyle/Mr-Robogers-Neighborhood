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

function handleFormSubmission(e) {
  e.preventDefault();
  const form = document.querySelector("form");
  const startBtn = document.getElementById("start-btn");
  const tryAgainBtn = document.getElementById("reset-btn");
  const inputDiv = document.getElementById("input-field")
  const formDiv = document.getElementById("form-div");

  document.body.addEventListener("click", function() {
    formDiv.removeAttribute("class");
    startBtn.classList.add("hidden");
  });

  form.addEventListener("submit", function() {
    let input = document.getElementById("input-box").value;
    const arrayFromInput = countToValue(input);
    const arrayWithWordsAdded = arrayFromInput.map(robogerIt);
    inputDiv.classList.add("hidden");
    document.getElementById("output").innerText = arrayWithWordsAdded.join(" ");
  });
}


window.addEventListener("load", function() {
  document.querySelector("form#form-div").addEventListener("submit", handleFormSubmission);
});
