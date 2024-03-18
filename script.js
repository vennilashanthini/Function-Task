//Anonymous Function && IIFE Functions
// 1.Print Odd Numbers in an Array using Anonymous Function
var printodd = function (arr){
    for(i=0;i<arr.length;i++){

    if(arr[i]%2 != 0){
        console.log(arr[i]);
    }
    
}}
printodd([14,15,16,17,18,19,20]);

// 1.Print Odd Numbers in an Array using IIFE Function

(function printodd(arr){
    

    for(i=0;i<arr.length;i++){

        if(arr[i]%2 != 0){
            console.log(arr[i]);
        }
        
    }
})([14,15,16,17,18,19,20]);

//Programs in Arrow Function
//1.Print Odd Number in an Array

var printodd = (arr) => {
    for(i=0;i<arr.length;i++){

    if(arr[i]%2 != 0){
        console.log(arr[i]);
    }
    
}}
printodd([14,15,16,17,18,19,20]);

//Anonymous Function && IIFE Functions
//3 . Sum of all numbers in an array

var sumofarr = function (arr){
    var sum = 0;
    for(i=0;i<arr.length;i++)
    sum = sum+arr[i];
    console.log(sum);
}
sumofarr([14,15,16,17,18,19,20]);

(function sumofarr (arr){
    var sum = 0;
    for(i=0;i<arr.length;i++)
    sum = sum+arr[i];
    console.log(sum);
}
)([14,15,16,17,18,19,20]);

//Programs in Arrow Function
//3.Sum of all numbers in an array

var sumofarr = (arr) =>{
    var sum = 0;
    for(i=0;i<arr.length;i++)
    sum = sum+arr[i];
    console.log(sum);
}
sumofarr([14,15,16,17,18,19,20]);


//Return all the prime numbers in an Array

var findPrimeNumbers = function (arr){
    for(i=2;i<arr.length;i++){

        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
    
    
}
findPrimeNumbers([14,15,16,17,18,19,20]);

(function findPrimeNumbers (arr){
    for(i=2;i<arr.length;i++){

        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
    
    
})
findPrimeNumbers([14,15,16,17,18,19,20]);

//Arrow Functiom

 var findPrimeNumbers = (arr) => {
    for(i=2;i<arr.length;i++){

        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
    
    
}
findPrimeNumbers([14,15,16,17,18,19,20]);

//Convert all the strings to title caps in a string array
//Anonymous Function

var capitalLetters = function (string){
    var string1 = string
    console.log(string1.toUpperCase());
    
}
capitalLetters("vennilashanthini");

//Convert all the strings to title caps in a string array
//IIFE 
(function capitalLetters(string){
    var string1 = string
    console.log(string1.toUpperCase());
    
})("vennilashanthini");

//Convert all the strings to title caps in a string array
//Arrow Function

var capitalLetters = string => {
   
    console.log(string.toUpperCase());
    
}
capitalLetters("vennilashanthini");


const removeDuplicates = function (arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
            console.log(unique);
        }
        
    }
    
   
}

removeDuplicates(["vennila","shanthini","shanthini"]);

(function removeDuplicates (arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
            console.log(unique);
        }
        
    }
    
   
})(["vennila","shanthini","shanthini"]);
 

const median = function(a,b){
    let x = a.concat(b);
     x.sort((a,b) =>{
        return a-b;
     }
        )
     let len = x.length;
     return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
   
}
console.log(median([0,2,3,5,9],[1,4]));


rotate = function (a,n,k){
   
    k=k%n;
    for(let i=0;i<n;i++){
        if(i<k){
            console.log(a[n+i-k]+" ");
        }
        else{
            console.log(a[i-k]+" ");
        }
       
    }
    
}
let a = [1, 2, 3, 4, 5]; 
let n = a.length; 
let k = 3; 
 
rotate([1, 2, 3, 4, 5],n,k)