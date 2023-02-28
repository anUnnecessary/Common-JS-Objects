
// array like object
function sum(a,b,c){
    const arg = [...arguments];
    console.log(arg)
    const result = a+b+c;
    return result;
}


const total = sum(45,89,12,98,56)
console.log(total);

