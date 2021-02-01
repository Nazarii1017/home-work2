//task 1

let x = 1;
let y = 2;
let res1 = "1" + "2";
console.log(res1); 
console.log(typeof res1);console.log(res1); 

let x = 1;
let y = 2;
let res2 = "true" + "2";
console.log(res2);
console.log(typeof res2);

let x = 1;
let y = 2;
let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let x = 1;
let y = 2;
let res4 = "x" * "y";
console.log(res4);
console.log(typeof res4);
//task 2

//1
let number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
//2
function test(number) 
{
  if ( number % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test(number));



// task 3
 // 1-4
 let arr = [5, "Andrew", true, null];
 //5
 console.log(arr.length);

 //6
 let anyValue = prompt('Type in any value');
 let arr = [5, "Andrew", true, null];
 arr[4] = 10;
 //7
 console.log(arr[4]);
 //8
 arr.shift(5);
 console.log(arr);
 
//task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join('*'));

//task 5
let isAdult = prompt("What is you age?");
if (isAdult >=18) {
    alert("Ви досягли повнолітнього віку");
    
} else if (isAdult < 18) {
    alert("Ви ще надто молоді");
}
//task 6
    let firstSide = prompt("first side");
    let secondSide = prompt("second side");
    let thirdSide = prompt("third side");
    let a = Number(firstSide);
    let b = Number(secondSide);
    let c = Number(thirdSide);
    let p = (a + b + c)/ 2;
    let triangleSquare = p*(p-a)*(p-b)*(p-c);
    Math.sqrt(triangleSquare);
    alert(Math.sqrt(triangleSquare));
    console.log(triangleSquare);
    
    /*task7
   не вийшло, пізніше попробую розібратись з цим
   */
   

    let currDay = new Date();
    let dayTime = currDay.getTime();
if (dayTime >23 && dayTime <=5){
    alert("Доброго ночі")
}
if (dayTime >5 && dayTime <=11){
    alert("Доброго ранку")
}
if (dayTime >11 && dayTime <=17){
    alert("Доброго дня")
}
if (dayTime >17 && dayTime <=23){
    alert("Доброго вечора")
}
