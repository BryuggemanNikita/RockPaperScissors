import { Tools } from "../Enums/Tools";

export class Player {
    private name: string;
    private health = 3;
    private hand: number;

    constructor(name: string = "Machin", health: number = 3) {
        this.name = name;
        this.health = health;
    };

    public hitMe(hit: number = 1): void {
        this.health -= hit;
    };

    public setHand(tool: Tools): void {
        this.hand = tool;
    };

    public getName(): string {
        return this.name;
    };
    public getHealth(): number {
        return this.health;
    };
    public getHand(): Tools {
        return this.hand;
    };
};