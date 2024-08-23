import { Tools } from "../Enums/Tools";
export function randomTool(): Tools {
    let randomIndex = Math.round(Math.random() * 10 ^ 10) % 3;
    let tool: string = Tools[randomIndex];
    let paper = Tools[0];
    let rock = Tools[1];
    return (tool == paper) ? Tools.Paper : (tool == rock) ? Tools.Rock : Tools.Scissors;
};