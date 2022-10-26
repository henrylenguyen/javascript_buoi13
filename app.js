// bài 1

function sumSalary(number1=0,number2=0){
  return number1*number2;
}

  // if(checkNull(".inputSalary")){
  //   console.log("Có dữ liệu rỗng!");
  // }
//hàm lấy dữ liệu
function getValue(value){
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
  for(let i=0;i<arrValue.length;i++){
     //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
       if (isNaN(arrValue[i]) || arrValue[i]=="") {
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

function addStyle(name,string){
   document.querySelector(name).value = 'dữ liệu không hợp lệ';
   document.querySelector(name).style.border = ' 1px solid red';
   document.querySelector(name).style.color = ' red';
}

function resultSalary() {
  if (!checkNull(".inputSalary")) {
    let arr = getValue(".inputSalary");
        // console.log(arr);
    let result = 0;
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i]);

      if (parseFloat(arr[i]) < 1000 || parseFloat(arr[i]+1)<1) {

           document.querySelector('#resultSalary').value = 'dữ liệu không hợp lệ';
           document.querySelector('#resultSalary').style.border = ' 1px solid red';
           document.querySelector('#resultSalary').style.color = ' red';
          
      }
      else{
        // tính số tiền công
        result = parseFloat(arr[i]) * parseFloat(arr[i+1]);
        // console.log(arr[i]);
        result = new Intl.NumberFormat('it-IT', {
          style: 'currency',
          currency: 'VND'
        }).format(result);
        document.querySelector('#resultSalary').value = result;
        document.querySelector('#resultSalary').style.border = ' 1px solid transparent';
        document.querySelector('#resultSalary').style.color = ' #000';
      }
      break;
 
    }
  } else {
    document.querySelector('#resultSalary').value = 'Làm ơn nhập đầy đủ dữ liệu!!!';
    document.querySelector('#resultSalary').style.border = ' 1px solid red';
    document.querySelector('#resultSalary').style.color = ' red';
  }



}


//bài 2


//nếu người dùng nhập 2 số?
/**
 * trường hợp 1: gán cứng cho mỗi giá trị khởi tạo là 0
 * trường hợp 2: kiểm tra dữ liệu nhập vào >=0 mới tính
 * trường hợp 3: chuyển dữ liệu người dùng nhập vào thành 1 mảng, nếu mảng đó mà độ dài <5 là trả về false
 */

//hàm tính trung bình cộng
function average(number){
  let result=0;
  let length=0;
  number.forEach(element=>{
    result +=element;
    length++;
  })
  return number/length;
}


// function checkBool(a,b,c,d,e){
//   if(a==0 || b==0 || c==0 || d==0 || e==0){
//     return false;
//   }
//   return true;
// }

//   let arr = new Array();
// // arr.push("thái","lê");
// // console.log(arr);
//   let number = document.querySelectorAll('.number');
//   number.forEach(element => {
//   // console.log(element.value);
//   arr.push(element.value);
//   console.log(arr);
// });
// if(arr.includes("")){
//   console.log("Sai");
// }
// else{
//   console.log("đúng");
// }


function resultAverage(){
  
} 