import {dayEvent, nameEvent, teamEvent, timeEvent} from "./create_constants.js";

export function createNewEvent(e){
    e.preventDefault();

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