import {spanTeg} from './constants.js'

function drawEvent(obj){
    const span = document.createElement('span');
    span.innerText = obj.name;
    const tabelItem = document.querySelector(`[class="${obj.day} ${obj.time}"]`);
    tabelItem.appendChild(span);
}

export function getEventList(){
    for(let key in localStorage) {
        if(localStorage.hasOwnProperty(key)){
            const item = JSON.parse(localStorage[key]);
            item && drawEvent(item);
        }
    }
}

export function sortEvent(){
    clearCalendar();
    if(this.value === 'All members') getEventList();
    for(let key in localStorage) {
        if(localStorage.hasOwnProperty(key)){
            const item = JSON.parse(localStorage[key]);
            if(this.value === item.team){
               item && drawEvent(item);
            }
        }
    }
}

export function clearCalendar(){
    console.log(spanTeg)
    for(let key = 0; key < spanTeg.length; key++){
        spanTeg[key].innerText = '';
    }
}