// bài 1

function sumSalary(number1=0,number2=0){
  return number1*number2;
}

// func gọi nút tính lương
function resultSalary(){
  //lấy giá trị của lương 1 ngày
  let inputSalary = parseFloat(document.querySelector('#inputSalary').value);
  //lấy giá trị của số ngày công
  let inputWorkingDay = parseFloat(document.querySelector('#inputWorkingDay').value);
  
  if(inputSalary<=1000 || inputWorkingDay<=1){
    document.querySelector('#resultSalary').value = 'dữ liệu không hợp lệ';

  }
  else{
     // tính số tiền công
  let result = sumSalary(inputSalary,inputWorkingDay);
      result = new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'VND'
    }).format(result);
  document.querySelector('#resultSalary').value = result;
}
 
}


//bài 2


//nếu người dùng nhập 2 số?
/**
 * trường hợp 1: gán cứng cho mỗi giá trị khởi tạo là 0
 * trường hợp 2: kiểm tra dữ liệu nhập vào >=0 mới tính
 * trường hợp 3: chuyển dữ liệu người dùng nhập vào thành 1 mảng, nếu mảng đó mà độ dài <5 là trả về false
 */

function average(a=0,b=0,c=0,d=0,e=0){
  return (a+b+c+d+e)/5
}
function checkBool(a,b,c,d,e){
  if(a==0 || b==0 || c==0 || d==0 || e==0){
    return false;
  }
  return true;
}
  let arr = new Array();
// arr.push("thái","lê");
// console.log(arr);
  let number = document.querySelectorAll('.number');
  number.forEach(element => {
  // console.log(element.value);
  arr.push(element.value);
  console.log(arr);
});