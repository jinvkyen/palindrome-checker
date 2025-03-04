document.getElementById("check-btn").addEventListener("click", function () {
    let input = document.getElementById("text-input").value.trim();
  
    if (!input) {
      alert("Please input a value.");
      return;
    }
  
    let sanitizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedInput = sanitizedInput.split("").reverse().join("");
  
    let resultText =
      sanitizedInput === reversedInput
        ? `${input} is a palindrome!`
        : `${input} is not a palindrome.`;
  
    document.getElementById("result").textContent = resultText;
  });