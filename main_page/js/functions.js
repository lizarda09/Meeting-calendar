import {tdTag} from './constants.js'

function drawEvent(obj){
    const span = document.createElement('span');;
    span.innerText = obj.name;
    span.setAttribute('span-id', obj.id);
    const tableItem = document.querySelector(`[class="${obj.day} ${obj.time}"]`);
    tableItem.appendChild(span);
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-times');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('item-id', obj.id)
    tableItem.appendChild(icon);
    icon.addEventListener('click', addListener);
}


function addListener(){
    const id = this.getAttribute('item-id');
    const isSure = confirm('Are you sure?');
    if(isSure){
        localStorage.removeItem(id);
        clearCalendar();
        getEventList();
    }
    else return;

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
            for(let i = 0; i<item.team.length; i++){
                if(this.value === item.team[i]){
                    item && drawEvent(item);
                }
            }
        }
    }
}

export function clearCalendar(){
    for(let i=0; i<tdTag.length; i++){
        while (tdTag[i].firstChild){
            tdTag[i].removeChild(tdTag[i].firstChild);
        }
    }
}

