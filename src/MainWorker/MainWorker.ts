import { Player } from "../Players/Player";
import { Machine } from "../Players/Machine";
import { Tools } from "../Enums/Tools";
import { randomTool } from "../Randomizer/Random";
import { Situation } from "../Enums/Situation";

export abstract class MainWorker {
    private static whoLose(player: Player, machin: Machine) {
        let playerHand: Tools = player.getHand();
        let machineHand:Tools = machin.getHand()
        let paper = Tools.Paper;
        let rock = Tools.Rock;
        let scissors = Tools.Scissors;

        //Player has Paper
        if (playerHand == paper) {
            //Machine has Paper
            if (machineHand == paper) return Situation.nobody;
            //Machine has Rock
            if (machineHand == rock) {
                machin.hitMe();
                return Situation.win;
            };
            //Machine has Scissors
            if (machineHand == scissors) {
                player.hitMe();
                return Situation.lose;
            };
        };

        //Player has Rock
        if (playerHand == rock) {
            //Machine has Rock
            if (machineHand == rock) return Situation.nobody;
            //Machine has Paper
            if (machineHand == paper) {
                player.hitMe();
                return Situation.lose
            };
            //Machine has Scissors
            if (machineHand == scissors) {
                machin.hitMe();
                return Situation.win;
            };
        };

        //Player has Scissors
        if (playerHand == scissors) {
            //Machine has Scissors
            if (machineHand == scissors) return Situation.nobody;
            //Machine has Paper
            if (machineHand == paper) {
                machin.hitMe();
                return Situation.win;
            };
            //Machine has Rock
            if (machineHand == rock) {
                player.hitMe();
                return Situation.lose
            };
        };
    };

    private static setToolPlayer(tool:Tools, player:Player):void{
        player.setHand(tool);
    };

    private static setToolMachine(tool:Tools, machin:Machine){
        machin.setHand(tool);
    };

    public static letsPlay(tool:Tools, player:Player, machin:Machine):void{
        MainWorker.setToolPlayer(tool, player);
        let machineTool = randomTool();
        MainWorker.setToolMachine(machineTool, machin);
        console.log(`You have ${Tools[tool]}`);
        console.log(`Machine has ${Tools[machineTool]}`)
        let str = MainWorker.whoLose(player, machin);
        if (str == Situation.nobody){
            console.log("Nobody");
            return;
        };
        console.log(`You ${str}`);
    };
};