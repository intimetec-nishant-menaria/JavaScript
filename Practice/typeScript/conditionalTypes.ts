
// conditional type choose one or another type based on a type relationship

// T extends U ? X : Y

// if T is assignable to U , use X : otherwise Y

type isString<T> = T extends string ? string : never ;

type A = isString<string> //string 
type B = isString<number> //never


// here extends mean assinable to not inheritance

//mostly utility type use this conditionaltype under the hood

type Myextract<T ,U> = T extends U ? T : never ;


type a = Myextract<'a' | 'b' | 'c' , 'a' | 'b'>;