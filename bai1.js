// bài 1

function sumSalary(number1 = 0, number2 = 0) {
  return number1 * number2;
}

// if(checkNull(".inputSalary")){
//   console.log("Có dữ liệu rỗng!");
// }
//hàm lấy dữ liệu
function getValue(value) {
  let number = document.querySelectorAll(value);
  let arr = new Array();
  number.forEach(element => {
    // mỗi lần lập sẽ đẩy dữ liệu vào mảng 
    arr.push(element.value);
  });
  return arr;
}
// let a = getValue(".inputSalary");
// console.log(a);
// hàm check có giá trị rỗng (người dùng không nhập) hay không
function checkNull(checked) {
  let arrValue = getValue(checked);
  for (let i = 0; i < arrValue.length; i++) {
    //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
    if (isNaN(arrValue[i]) || arrValue[i] == "") {
      return true;
    }
  }
  // ========================== foreach sẽ lập tới cùng của mảng nên không thể break vòng lặp được 

  // arrValue.forEach((element,index) => {
  //   console.log(element);
  //   //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
  //   if (isNaN(element[index] || element[index]=="")) {
  //     return true;   
  //   }

  // });

  return false;
}
// if(checkNull(".inputSalary")){
//   console.log("Có rỗng");
// }
// else{
//   console.log("Không rỗng");
// }
// checkNull(".inputSalary");


// func gọi nút tính lương

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}

function resultSalary() {
  if (!checkNull(".inputSalary")) {
    let arr = getValue(".inputSalary");
    // console.log(arr);
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);

      if (parseFloat(arr[i]) < 1000 || parseFloat(arr[i] + 1) < 1) {
        addStyle("#resultSalary", ["dữ liệu không hợp lệ", ' 1px solid red', 'red']);

      } else {
        // tính số tiền công
        result = parseFloat(arr[i]) * parseFloat(arr[i + 1]);
        // console.log(arr[i]);
        result = new Intl.NumberFormat('it-IT', {
          style: 'currency',
          currency: 'VND'
        }).format(result);
        addStyle('#resultSalary', [result, ' 1px solid transparent', '#000']);

      }
      break;

    }
  } else {
    addStyle("#resultSalary", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);
  }



}