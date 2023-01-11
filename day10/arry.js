let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];



// In arr ra console
console.log(arr);


// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length)


// In ra phần tử thứ 3 trong mảng
console.log(arr[3]);

// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);

// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length-1]);

// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[index=-1]);

// Sử dụng vòng lặp in ra từng giá trị trong arrvalue of arr
for (let value of arr) {
    console.log(value);
}


// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
for (let i = 0; i < arr.length; i++) {
    console.log('Index:')
}

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)

// Thêm "Ba"  cuối mảng sử dụng phương thức push()

// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()

// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()

// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó

// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
let arr3 = arr.shift();

// ao chép 2 phần tử đầu tiên sử dụng phương thức slice() và inS ra kết quả
arr.slice(0,2)
console.log(arr)

// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()

// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()

// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()

// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()

// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()

// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả

// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả

// Sử dụng alert() in arr, chú ý kết quả

// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console

// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả

// Đổi chỗ 2 phần tử đầu và cuối mảng

// Xóa toàn bộ phần tử trong mảng

/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum(numbers) {}

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {}