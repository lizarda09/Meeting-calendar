import {dayEvent, nameEvent, teamEvent, timeEvent} from "./create_constants.js";

export function createNewEvent(e){
    e.preventDefault();

    for(let key in localStorage) {
        if(localStorage.hasOwnProperty(key)){
            const item = JSON.parse(localStorage[key]);
            if(dayEvent.value === item.day && timeEvent.value === item.time){
                alert("You cannot add event on this date!");
                return;
            }
        }
    }
    const event = {
        id: new Date().getTime(),
        name: nameEvent.value,
        team: teamEvent.value,
        day: dayEvent.value,
        time: timeEvent.value
    };
    localStorage.setItem(event.id, JSON.stringify(event));
    window.location.href = "../main_page/index.html";


}