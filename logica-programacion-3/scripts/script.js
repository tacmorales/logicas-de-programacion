const isNumber = (n) => (typeof n === "number" && n - n === 0) || (typeof n === "string" && Number.isFinite(+n) && n.trim() !== "");

const generateDetailsOfFactorialOf = (n) => {
  let details = ""
  for (let i = 1; i <= n; i++) {
      details += `${i} x `
  }
  return details.slice(0, details.length - 3);
}

const calcFactorial = (n) => {
  let result = 1
  for (let i = 1; i <= n; i++) {
      result *= i
  }
  return result;
}

const ready = () => {
  // const $ = document.getElementById;
  const elResult = document.getElementById("result");
  const elDetails = document.getElementById("details");
  const btnOrder = document.getElementById("btn-order");
  const firstN = document.getElementById("firstN");


  btnOrder.addEventListener("click", () => {
    // buttonMenuToggle.classList.toggle("icon-x");
    const n1 = parseFloat(firstN.value);
    if ( isNumber(n1) && n1 >= 0 &&  Number.isInteger(n1)){
      let esCero = (n1 === 0);
      let sobreCien = (n1 > 100);
      let textDetails = "";
      if (esCero){
        textDetails = "Para cumplir con la convención del producto vacío";
      } else if (!sobreCien) {
        textDetails = generateDetailsOfFactorialOf(n1)
      }
      textDetails = `${n1}! =&gt; <br> ${textDetails} =&gt; <br> `;
      let textResult = `${n1}! = ${calcFactorial(n1)}`;
      elDetails.innerHTML = textDetails;
      elResult.innerHTML = textResult
    }
    else{
      if (firstN.value === ""){
        firstN.classList.add("error");
        firstN.placeholder = "Debe poner un número";
      } else if (!isInRange(-273, 1300, n1)) {
        firstN.classList.add("error");
        firstN.value = "";
        firstN.placeholder = "Entre -273 y 1300";
      }
    }
  })

  firstN.addEventListener("focus", (event) => {
    event.target.classList.remove("error");
    event.target.placeholder = "";
  })
}

document.addEventListener("DOMContentLoaded", ready);