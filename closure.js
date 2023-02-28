/**
 * Closure in JavaScript: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
 
 */



function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServer = kitchen()
console.log(firstServer());



function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const watch = stopWatch()
console.log(watch())