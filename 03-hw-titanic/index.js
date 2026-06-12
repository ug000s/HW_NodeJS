import {Titanic} from "./model/Titanic.js";

const stats = new Titanic('./files/train.csv', /,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
stats.showStats();