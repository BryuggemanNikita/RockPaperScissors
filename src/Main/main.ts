import { Player } from "../Players/Player";
import { Machine } from "../Players/Machine";
import { MainWorker } from "../MainWorker/MainWorker";
import { Tools } from "../Enums/Tools";


let player = new Player("Akaki");
let machine = new Machine("Petya");

let paper = Tools.Paper;
let rock = Tools.Rock;
let scissors = Tools.Scissors;

MainWorker.letsPlay(paper, player, machine);