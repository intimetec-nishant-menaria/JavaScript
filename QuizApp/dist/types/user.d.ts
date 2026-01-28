export type Role = "student" | "admin";
export interface Result {
    numberOfQuestions: number;
    correct: number;
    wrong: number;
}
export interface User {
    fullName: string;
    email: string;
    password: String;
    role: Role;
    result?: Result;
}
//# sourceMappingURL=user.d.ts.map