
//Chapter 38 -42
//FUNCTIONS, SWITCHSTATEMENTS, WHILE, DO-WHILELOOPS



//q1.
function power(a,b){
return a**b
}
var result =power(2,4);
console.log(result);

//q2.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true; 
    } else {
      return false;     }
  }
  
  let year = parseInt(prompt("Enter a year:")); 
  if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
  
//q3.
function calculateS(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);
  
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  
    return area;
  }
  
  let a = parseFloat(prompt("Enter length of side a:"));
  let b = parseFloat(prompt("Enter length of side b:"));
  let c = parseFloat(prompt("Enter length of side c:"));
  
  let area = calculateArea(a, b, c);
  console.log("The area of the triangle is: " + area);
  



//Chapter 43-48
//EVENTS

//q1.
function showAlert(){
    alert("You click the link")
}                    

//q2.
function phone(){
    alert("Thanks for purchasing a phone");
}                    
