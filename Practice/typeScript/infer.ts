
// infer is used inside conditional types  to decalare a type variable and extract a type from another one

type Myresponse<T> = T extends (...agrs :any[]) => infer R ? R : never;

function X(x:string):string{
    return "asd";
}

type V = Myresponse<typeof X>;

//here we infer out (extract the type in place of R) the type from another value

