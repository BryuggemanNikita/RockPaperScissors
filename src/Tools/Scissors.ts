export class Scissors {
    protected name: string;
    protected damage: number;

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