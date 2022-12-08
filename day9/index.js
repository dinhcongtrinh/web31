/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
function min(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < result) {
        result = arr[i];
      }
    }
    return result;
  }
  

/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
    function minmax.(arr) {

    }
}

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
    let min = (max = arr[0]);
    for (i = 1; i < arr.length; i++);

}

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
    let tem = (arr.x);
    arr[x] = arr[y];
    arr[y] = temp;
}

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
    let reslut = []
    for (let i = 0; i = arr.length; i++) {
        if(arr2.includes(arr[i])) reslut.pust(arr[i]);

    }
}
console.log(reslut);

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {}

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {}

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {}

/**
 * @typedef {object} student
 * @property {number} id - Mã định danh
 * @property {string} firstname - Họ
 * @property {string} lastname - Tên
 * @property {string} gender - Giới tính
 * @property {number} point - Điểm tổng kết
 */

/**
 * @typedef {object} studentWithFullname
 */

/**
 *
 * @param {student[]} students - Danh sách sinh viên
 *
 * @return {student[]}
 */
function fullname(students) {}
// callback 
// 1 hàm dduocj truyenf vao 1 hàm khac duoi giá trị đối số
demo; // giá trị hàm
demo(); // cuộc gọi hàm
let other = function () {
    console.log(other);
}
// khai báo rtrucj tiếp tại vị trí sử dụng
let x = 123;
dosomething(123);
dosomething(other);
// foreach
function pow(n) {
  console.log(n*2);
}
 arr = [1, 23, 4, 45, 55];
 for = (i = 0, i < arr.length; i++) {
    pow(ar[i]);
 }
  arr.array.forEach(pow);
  const arr = ["ba", "phong","tai","duc anh"];
  for (let i =0; i < arr.length; i++) {
    console.log(arr[i])
  }
  arr.forEach(console.log);
  //vc2
  arr.array.forEach(pow);
  const arr = ["ba", "phong","tai","duc anh"];
  for (let i =0; i < arr.length; i++) {
    console.log(arr[i])
  }
  arr.forEach(console.log);
  // find tim giá trị đầu tiên với điều kiện
  const arr = ["
  "] ;
  //
function isprime(n) {
    if (n <2) return false;
    for (let i = 2 ; i < n; i++ ) {
        if (n%; i ===0) return fale
    }

}



//trhtdxfh

let firstprime = arr.find(isprime);
// filter tim tất cả giá trị khớp với ddk
let arr1 = [];
for ( let i = 0; i< arr.length; i++) {
    if (isprime(arr[i])) {
        arr1.pust(arr([i]));
    }
}
let reslut = arr.filter(isprime);
console.log(reslut);
// findIndex; tim chi muc giá trị dau ten khop vơi đk ';
let Index = arr.find(isprime);
console.log(index);
// map - biên dôi phân tu trong mang thanh phân tu khac
function double (n);{
    return n * n;
} 
let a = n
for ( let i = 0; i < arr.length; i++) {
    
}
console.log(n);
//forfor
let double = arr.map(double);
console.log(doubled);
// reduce tinh tong;
let sum = 0;
 for ( let i = 0; i < arr.length; i++); {
    sum = sum +  arr[i];
 }
 console.log(sum);
 //
  function add = ( a + b) {
    return = ( a + b);
  }
 let total = arr.reduce(add,0);
 console.log(total);
 // short , sap xep ( măc đinh xắp xếp theo dang chuỗi)
 const arr = [ 12, 432, 34, 3553, 34];
 arr.short();
 confirm.log(arr);
