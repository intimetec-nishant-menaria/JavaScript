
// discriminated unions are union of object type that all share a common field called discriminant
// and each variant have different literal value for that common field

type shape = 
    {kind : "circle" , radius : number} 
    | {kind : "square" , side : number}
    | {kind : "rectangle" , width:number , height:number};

    