export class Paper {
    protected name: string;
    protected damage: number;

    constructor(){

    };
    
    public toString(): string {
        return `${this.name}, ${this.damage}`;
    };

    getDamage(): number {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        throw new Error("Method not implemented.");
    }
}