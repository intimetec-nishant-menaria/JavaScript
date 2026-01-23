
// generator are special functions that pause its execution and remember its state 
// and generate its iterator automatically

function* fun(){
    console.log("hello");

    yield "first break";
    yield "second break";
    yield "third break";
}

const x = fun();

console.log(x.next());
console.log(x.next());
console.log(x.next());