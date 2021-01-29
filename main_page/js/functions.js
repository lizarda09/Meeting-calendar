import {spanTag, tdTag} from './constants.js'

function drawEvent(obj){
    const span = document.createElement('span');;
    span.innerText = obj.name;
    const tabelItem = document.querySelector(`[class="${obj.day} ${obj.time}"]`);
    tabelItem.appendChild(span);
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-times');
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('item-id', obj.id)
    tabelItem.appendChild(icon);
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
            if(this.value === item.team){
               item && drawEvent(item);
            }
        }
    }
}

export function clearCalendar(){
    /*console.log(spanTeg)
    for(let key = 0; key < spanTeg.length; key++){
        spanTeg[key].innerText = '';
    } */
    for(let i=0; i<tdTag.length; i++){
        while (tdTag[i].firstChild){
            tdTag[i].removeChild(tdTag[i].firstChild);
        }
    }
}

