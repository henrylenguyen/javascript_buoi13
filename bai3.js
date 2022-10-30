
function resultMoney() {
  let selected = document.querySelector(".money").value;
  let parse = parseFloat(selected);
  if (selected == "" || isNaN(selected)) {
    document.querySelector('#resultMoney').value = "Làm ơn nhập đầy đủ dữ liệu!!!";
    document.querySelector('#resultMoney').style.border = "1px solid red";
    document.querySelector('#resultMoney').style.color = "red";
  }
  else{
    if (selected == 0) {
      document.querySelector('#resultMoney').value = "Dữ liệu không hợp lệ!";
      document.querySelector('#resultMoney').style.border = "1px solid red";
      document.querySelector('#resultMoney').style.color = "red";
    } else {
      document.querySelector('#resultMoney').value = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND'
      }).format(parse * 23500);
      document.querySelector('#resultMoney').style.border = "1px solid transparent";
      document.querySelector('#resultMoney').style.color = "#000";
  
    }

  }

}