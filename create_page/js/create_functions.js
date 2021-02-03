import {dayEvent, nameEvent, teamInput, timeEvent} from "./create_constants.js";

export function createNewEvent(e){
    e.preventDefault();

    console.log($('#team').val());

    if(nameEvent.value === "") {
        alert('You cannot create the event without name!');
        return;
    }

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
        team: $('#team').val(),
        day: dayEvent.value,
        time: timeEvent.value
    };
    console.log(event);
    localStorage.setItem(event.id, JSON.stringify(event));
    window.location.href = "../main_page/index.html";

}
