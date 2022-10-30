
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
  // if(checkNull(".inputSalary")){
  //   console.log("Có dữ liệu rỗng!");
  // }
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


// func style 

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}


//bài 2


//nếu người dùng nhập 2 số?
/**
 * trường hợp 1: gán cứng cho mỗi giá trị khởi tạo là 0
 * trường hợp 2: kiểm tra dữ liệu nhập vào >=0 mới tính
 * trường hợp 3: chuyển dữ liệu người dùng nhập vào thành 1 mảng, nếu mảng đó mà độ dài <5 là trả về false
 * trường hợp 4: viết hàm check rỗng, lặp qua hết các phần tử của mảng nếu có rỗng thì báo liền
 */

//hàm tính trung bình cộng
function average(number) {
  // console.log(number);
  let result = 0;
  let length = 0;
  number.forEach(element => {
    result += element;
    // console.log(result);
    length++;
  })
  return result / length;
}

function resultAverage() {
if (!checkNull(".number")) {
  let arr = getValue(".number");
  let arrParse = new Array();
  arr.forEach(element => {
    arrParse.push(parseFloat(element));
  })
  let result = average(arrParse);
  addStyle("#resultAverage", [`Tổng trung bình là: ${result}`, ' 1px solid #000', '#000']);

  
}
else {
 addStyle("#resultAverage", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);

}
}
