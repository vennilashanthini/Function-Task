//Programs in Arrow Function
//1.Print Odd Number in an Array

var printodd = (arr) => {
    for(i=0;i<arr.length;i++){

    if(arr[i]%2 != 0){
        console.log(arr[i]);
    }
    
}}
printodd([14,15,16,17,18,19,20]);

//2.Convert all the strings to title caps in a string array

var capitalLetters = string => {
   
    console.log(string.toUpperCase());
    
}
capitalLetters("vennilashanthini");

//Programs in Arrow Function
//3.Sum of all numbers in an array

var sumofarr = (arr) =>{
    var sum = 0;
    for(i=0;i<arr.length;i++)
    sum = sum+arr[i];
    console.log(sum);
}
sumofarr([14,15,16,17,18,19,20]);

//4.Find Primenumbers using Arrow Functiom

var findPrimeNumbers = (arr) => {
    for(i=2;i<arr.length;i++){

        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
    
    
}
findPrimeNumbers([14,15,16,17,18,19,20]);
