function veTamGiac(n) {
  const tam_giac = document.getElementById("tamGiac");
  tam_giac.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    const rowElement = document.createElement("div");
    rowElement.textContent = row;
    tam_giac.appendChild(rowElement);
  }
}
const h = prompt("Nhập chiều cao của tam giác: ");
veTamGiac(h);
