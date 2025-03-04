const isNumber = (v) => (typeof v === "number" && v - v === 0) || (typeof v === "string" && Number.isFinite(+v) && v.trim() !== "");

const isInRange = (min, max, n1) => {
  if (!(isNumber(min) && isNumber(min) && isNumber(n1) && min < max)){
    return null;
  }
  if (n1 >= min && n1 <= max ) return true;
  else return false;
}

const celsiusToFarenheit = (celsius) => {
  if (!(isNumber(celsius))){
    return null;
  }
  return (celsius * 9/5) + 32;
}

const celsiusToKelvin = (celsius) => {
  if (!(isNumber(celsius))){
    return null;
  }
  return celsius + 273;
}

const ready = () => {
  // const $ = document.getElementById;
  const tableBody = document.getElementById("table-body");
  const btnOrder = document.getElementById("btn-order");
  const firstN = document.getElementById("firstN");


  btnOrder.addEventListener("click", () => {
    // buttonMenuToggle.classList.toggle("icon-x");
    const n1 = parseFloat(firstN.value);
    if ( isNumber(n1) && isInRange(-273, 1300, n1) ){
      const farenheit = celsiusToFarenheit(n1);
      const kelvin = celsiusToKelvin(n1);
      // let contentOfTableBody = `<tr><td>${farenheit}°F<td/><td>${kelvin}K<td/></tr>`;
      let contentOfTableBody = `<tr>
							<td>${farenheit} °F</td>
							<td>${kelvin} K</td>
						</tr>`;
      tableBody.innerHTML = contentOfTableBody;
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