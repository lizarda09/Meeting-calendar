import {getEventList, sortEvent} from "./functions.js";
import {team, sort, tdTag} from "./constants.js";

for(let value of team){
    const option = document.createElement('option');
    option.innerText = value;
    const sort = document.getElementById('menu-team');
    sort.appendChild(option);
}

sort.addEventListener('change', sortEvent);

getEventList();

