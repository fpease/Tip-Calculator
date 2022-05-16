function calculate() {
  var billAmt = document.getElementById("amount").value;
  var percentage = document.getElementById("percent").value;
  
  if (billAmt === "" || percentage == 0) {
    alert("Please enter values");
    return;
  }

  var total = (billAmt * percentage);
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
 
  document.getElementById("tip").innerHTML = "$" + total;

}

document.getElementById("calculate").onclick = function() {
  calculate();

};