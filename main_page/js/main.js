import {getEventList, sortEvent} from "./functions.js";
import {team, sort, remove} from "./constants.js";

sort.addEventListener('change', sortEvent);

for(let value of team){
    const option = document.createElement('option');
    option.innerText = value;
    const sort = document.getElementById('menu-team');
    sort.appendChild(option);
}

for(let i=0; i<remove.length; i++){
   console.log(remove[i])
}

getEventList();

