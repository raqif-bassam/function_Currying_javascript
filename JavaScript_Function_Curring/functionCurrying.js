//By Bind method
let multiply =  function(x,y){
    console.log(x*y);
};

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByFive = multiply.bind(this,5);
multiplyByFive(5);


//By Closures
let multiply2 = function(x){
    return function(y)
    {
        console.log(x*y);
    }
}

let multiply2ByTwo = multiply2(2);
multiply2ByTwo(6);

let multiply2yByFive = multiply2(5);
multiply2yByFive(7);
