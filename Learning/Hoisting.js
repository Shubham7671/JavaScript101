// Higher order functions are functions where we can pass functions as arguments 
// or we can return function from a function

// here --> Outer is hof
function Outer(test1, test2){
    let adfvdfg = 10; 
    let bfgefgerf = 20;
    console.log(adfvdfg+bfgefgerf);
    //here test 1 and test2 are callbacks or callback functions
    test1();
    console.log('');
    test2();
}

