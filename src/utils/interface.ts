export interface formatInterface{
    slackUsername?: string;
    backend : boolean;
    age? : number;
    bio? : string;
} 

export enum operation{
    addition = "addition",
    multiplication = "multiplication",
    subtraction = "subtraction"
}
export interface postInterface{
    operation_type : operation;
    x: number,
    y: number
}
export interface PostAnswers{
    slackUsername?: string;
    operation_type : operation;
    answer? : number
}