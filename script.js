const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
    document.getElementById("result").style.color = "magenta";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
    document.getElementById("result").style.color = "green";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
    document.getElementById("result").style.color = "red";
  }
  if (BMI >= 30) {
    status = "Obese";
    document.getElementById("result").style.color = "maroon";
  }

  document.querySelector(
    ".comment"
  ).innerHTML = `<span id="comment">${status}</span>`;
});
