import { mainMenu } from "./functions.js";
import { addStudent } from "./functions.js";
import {calculateAverage} from "./functions.js";
import {getTopPerformers} from "./functions.js";
import {getAllAverages} from "./functions.js";
import {getSummary} from "./functions.js";
import {updateScore} from "./functions.js";
import {printAllStudents} from "./functions.js";

mainMenu();
addStudent("Mehedi Hasan", [80, 90, 100]);
calculateAverage(4);
getTopPerformers();
getAllAverages();
getSummary();
updateScore(4, 2, 24);
printAllStudents();
