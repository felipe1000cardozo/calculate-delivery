function calcular() {
  var dist = parseFloat(document.querySelector("#dist").value);
  if (dist <= 0 || dist == NaN) return alert("distância invalida");

  var val = 0.52 * dist;
  val = Math.round(val);
  if (val < 3) val = 3;
  setValue(val.toFixed(2));
}

const setValue = (val) => {
  var res = document.querySelector("#res");
  res.innerHTML = `<h3>Valor  R$${val} </h3>`;
};
//dis * 2 / 25 * 4.29
