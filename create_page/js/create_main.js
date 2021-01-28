import {btn_create, day, dayEvent, team, teamEvent, time, timeEvent} from "./create_constants.js";
import {createNewEvent} from "./create_functions.js";

for(let value of day){
    const option = document.createElement('option');
    option.innerText = value;
    dayEvent.appendChild(option);
}

for(let value of team){
    const option = document.createElement('option');
    option.innerText = value;
    teamEvent.appendChild(option);
}

for(let value of time){
    const option = document.createElement('option');
    option.innerText = value;
    timeEvent.appendChild(option);
}

btn_create.addEventListener('click', createNewEvent);