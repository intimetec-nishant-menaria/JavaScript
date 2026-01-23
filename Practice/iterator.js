
// iterator are objects that know how to give use value one at a time on demand
// an object is iterator if it has next() method 
// next returns { value : "data" , done : boolean} // true if no further data is left and false if any

function fun(limit){
    let count = 0 ;

    return {
        next(){
            if(count<limit){
                return {value : ++count , done : false}
            }else{
                return {value : undefined , done : true}
            }
        }
    };
}

const x = fun(3);

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());

// Arrays , string  , set & maps ,NodeList and generators have build in iterators

// iterator -> has next()
// iterable -> has [symbol.iterator]() that returns an iterator

let arr = [ 1 , 2, 3 ]

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());