const sortNumbers = (messyNumbers) => {
  if ((!Array.isArray(messyNumbers)) || (messyNumbers.length === 0)){
    return null
  }
  const numbersInAscendingOrder = messyNumbers.slice().sort((a, b) => a - b); 
  const numbersInDescendingOrder = messyNumbers.slice().sort((a, b) => b - a);
  return [numbersInAscendingOrder , numbersInDescendingOrder] 
}

const ready = () => {
  // const $ = document.getElementById;
  const tableBody = document.getElementById("table-body");
  const btnOrder = document.getElementById("btn-order");
  const firstN = document.getElementById("firstN");
  const secondN = document.getElementById("secondN");
  const thirdN = document.getElementById("thirdN");
  const arrayOfInputs = [firstN, secondN, thirdN]

  const isNumber = (v) => (typeof v === "number" && v - v === 0) || (typeof v === "string" && Number.isFinite(+v) && v.trim() !== "");

  btnOrder.addEventListener("click", () => {
    // buttonMenuToggle.classList.toggle("icon-x");
    const n1 = parseFloat(firstN.value);
    const n2 = parseFloat(secondN.value);
    const n3 = parseFloat(thirdN.value);
    if ( isNumber(n1) && isNumber(n2) && isNumber(n3) ){
      const messyNumbers = [n1, n2, n3]
      console.log(messyNumbers);
      let [ascendingOrder, descendingOrder] = sortNumbers(messyNumbers);
      console.log(ascendingOrder);
      console.log(descendingOrder);
      ascendingOrder = ascendingOrder.map(number => `<td>${number}</td>`);
      descendingOrder = descendingOrder.map(number => `<td>${number}</td>`);
      let contentOfTableBody = ""
      for (let i = 0; i < ascendingOrder.length; i++){
        contentOfTableBody += `<tr>${ascendingOrder[i]}${descendingOrder[i]}</tr>`;
      }
      tableBody.innerHTML = contentOfTableBody;
    }
    else{
      arrayOfInputs.forEach(input => {
        if (input.value === ""){
          input.classList.add("error");
          input.placeholder = "Debe poner un número";
        }
      })
    }
  })

  arrayOfInputs.forEach(input => input.addEventListener("focus", (event) => {
    event.target.classList.remove("error");
    event.target.placeholder = "";
  }))
}

document.addEventListener("DOMContentLoaded", ready);