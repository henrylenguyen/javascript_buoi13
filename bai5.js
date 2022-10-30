function divide(number){ //123
  let sum = 0,temp=0;
  while(number>0){ //true
     temp = number%10; //3
     sum += temp; // 0 +3
    number  = Math.floor(number/10); //12
  }
  return sum;
}

function ResultsumNumber() {

  let selected = document.querySelector(".sumNumber").value;
  let parse = parseInt(selected);
  if (selected == "" || isNaN(selected)) {
    document.querySelector('#ResultsumNumber').value = "Làm ơn nhập đầy đủ dữ liệu!!!";
    document.querySelector('#ResultsumNumber').style.border = "1px solid red";
    document.querySelector('#ResultsumNumber').style.color = "red";
  } else {
    if (selected <10) {
      document.querySelector('#ResultsumNumber').value = "Dữ liệu không hợp lệ!";
      document.querySelector('#ResultsumNumber').style.border = "1px solid red";
      document.querySelector('#ResultsumNumber').style.color = "red";
    } else {
      document.querySelector('#ResultsumNumber').value = `Tổng của ${parse} là: ${divide(parse)}`
      document.querySelector('#ResultsumNumber').style.border = "1px solid transparent";
      document.querySelector('#ResultsumNumber').style.color = "#000";

    }

  }

}