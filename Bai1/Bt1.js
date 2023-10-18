//kiểm tra số nguyên tố
function ktSoNT(so) {
  if (so < 2) return false;
  for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) return false;
  }
  return true;
}

function tongSoNguyenTo() {
  const A = parseInt(document.getElementById("soA").value);
  const B = parseInt(document.getElementById("soB").value);
  let sum = 0;

  if (A >= B) {
    alert("Vui lòng nhập số a < b.");
    return;
  }

  let daySoNT = [];
  for (let i = A + 1; i < B; i++) {
    if (ktSoNT(i)) {
      daySoNT.push(i);
    }
  }

  for (let i = 0; i < daySoNT.length; i++) {
    sum += daySoNT[i];
  }

  const resultElement = document.getElementById("result");
  resultElement.innerText = `Các số nguyên tố trong khoảng từ ${A} đến ${B} là: ${daySoNT.join(
    "; "
  )}\nTổng các số nguyên tố là: ${sum}`;
}
