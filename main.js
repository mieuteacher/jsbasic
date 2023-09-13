/* Biến */
let nameA = "Phước" // string
// console.log("Giá trị của biến name: ", nameA)
var nameB = "Rikkei"

{
    var ageA = 5;
    let productName = "Sản Phẩm 1"
    //console.log("ageA nameB nameA productName", ageA, nameB, nameA, productName)
    //scope
}

// console.log("ageA", ageA)
// console.log("productName", productName)
// console.log("c", c)
// let c = 7;
// console.log("d", d)
// var d = 7

// let z = 5;
// let z = 6;

// console.log("z", z)


// var k = 5;
// var k = 6;

// console.log("k", k)


// const pi = 3.14;
// const pi = 5;
// console.log("pi", pi)


/* Kiểu dữ liệu */
let name = "Nguyễn Thanh Bình Phước"
let phoneNumber = "0329577177"
let age = 30
let sex = true // false: nữ, true: name

let test;
//console.log("test", test)

let student  = null;

/* Object (đối tượng) */

let product = {
    id: 1,
    price: 50000,
    name: "Sản Phẩm 1",
    status: true,
    pictures: ["abc.png", "xyz.jpg", "ii.png"]
}
//console.log("product id", product.id, product["id"], product.pictures[0])
// console.log("product Id", typeof product.id)
// console.log("type của product",typeof product)

/* Array (mãng) */
let numbers = [1,2,3,4,["a", "b"],6,7,8,{
    id: 5, 
    name: "abc"
}]
let numbersTest = {
    "0": 1,
    "1": 2
}
// console.log("phần tử thứ nhất của numbers array", numbers[0])
// console.log("test", numbersTest[0])

// Khai báo ra một lớp học gồm có các thông tin (name, classId, students), trong đó students là các học sinh của lớp đó.
// biết 1 student gồm có (studentId, name, sex, age)

// console.log("hahaha")

// alert("Xin chào các bạn!")

// console.log("alalala")


// let confirm = confirm("Bạn có muốn xóa sản phẩm này không ?");
// console.log("confirm", confirm)



// let yourName = prompt("Nhập vào tên của bạn ?", "rikkei");
// console.log("yourName", typeof yourName)


//Viết mã cho phép người dùng nhập vào tên của họ, sau đó hiện lên 2 thông báo
// thứ 1: xin chào
// thứ 2: tên họ vừa nhập

let a = "5";
let b = 10;
let d = "abc"
let c = a + b;

// console.log("test",  isNan(Number("abcbdsbn")))
console.log("test", Math.floor(10 / 3))

// Viết code nhập vào số tuổi của bạn
// Alert ra màn hình tuổi của bạn sau 10 năm.