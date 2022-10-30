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

// hàm check có giá trị rỗng (người dùng không nhập) hay không
function checkNull(checked) {
  let arrValue = getValue(checked);
  for (let i = 0; i < arrValue.length; i++) {
    //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
    if (isNaN(arrValue[i]) || arrValue[i] == "") {
      return true;
    }
  }
  return false;
}

// func style 

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}

function resultRectangle(){
  if (!checkNull(".rectangle")) {
    let arr = getValue(".rectangle");
    let a = parseFloat(arr[0]);
    let b = parseFloat(arr[1]);
    if(a == 0 || b==0){
    addStyle("#resultRectangle", ['Dữ liệu không hợp lệ!!!', ' 1px solid red', 'red']);

    }
    else{
      addStyle("#resultRectangle", [`Chu vi: ${(a+b)*2} Diện tích: ${a*b}`, "1px solid transparent", "#000"]);

    }
  } else {
    addStyle("#resultRectangle", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);
  }
}