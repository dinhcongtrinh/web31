
let phong = {
    name: "dinh cong trinh",
    age: 32,
    gender:"male",
    tall: 1.65,
    dad: {
        name: dinh van truong,
        age:58,
    },
    eat(food) {
        console.log("an",food);
        console.log("rua tay xa phong");
        

    }, 
};

// khai bao may tinh //

let computer = {
    win: 10,
    side: 13,
    with: 0.03,
    

}
// try cap thong tin
// dot nocation - cu phap dau cham
// ten doi tuong . ten thuoc tinh,
// egg

phong.name;
phong.tall;
phong.age;
phong.eat (com);
console.log(phong);
console.log(co.log);

// them
empty.name = "trinh";
empty.age = 31;
empty.ishandsome = true;
// sua
empty.name = "beo";
empty.age = 32;
// duyet qua cac thuoc tinh
for ( let key in empty) {
    value = empty[key];
    console.log(key,value);
}
console.log("name" in empty); // true
console.log("xyz" in empty);// false

let coordinates = {
    a: {
        x: 1,
        y: 2,
    },
    b: {
        x: 5,
        y: 8,
    },
};

// Tính khoảng cách giữa 2 điem a va b.
// can bac hai cua ( xb - xa)**2 + (yb - ya) ** 2
function calcDistance(coordinates) {
    function calDistance() {
  let distance = Math.sqrt(
    (coordinates.b.x - coordinates.a.x) * 2 +
      (coordinates.b.y - coordinates.a.y) * 2
  );
  return distance;
}

console.log(calDistance());

}

//c2
function calcDistance(coordinates) {
    const
    // this chinhla doi tuong dang thuc hien hanh vi
   this = person;
   this = clone;


toString() {
    return this.name;

 },
 ///
 function cat1 (name,color,age,weight) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.weight = weight;
 }
 const cat1 = new cat("lisa", "while", 4, 2);
 const cat2 = new cat("bisa", "3 mau", 3, 2);
 
 


















