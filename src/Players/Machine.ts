import { Tools } from "../Enums/Tools";

export class Machine {
    private name: string;
    private health: number;
    private hand: Tools;

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