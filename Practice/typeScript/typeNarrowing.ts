

function fun1(X : string | number){
    if(typeof X === "string"){
        console.log(X.length);
    }
    console.log(X);
}

fun1("Nishnat");
fun1(10);

