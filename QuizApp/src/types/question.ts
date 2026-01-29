
export interface Question{
    id : number,
    question : string,
    options : string[],
    correctAnswerIndex: number
}

export interface answer{
    questionIndex : number,
    userAnswerIndex : number
}