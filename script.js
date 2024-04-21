function firstNonRepeatedChar(str) {
 // Write your code here
	//let str = prompt("Enter a String");

let i =0;
let j =0;

while(i < str.length){
  if(str[i] === str[j]){
    i++;
  }
  else{
    if(i-j <= 1){
      console.log(str[j]);
      break;
    }
    j=i;
    i++;
  }
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
