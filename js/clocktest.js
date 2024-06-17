const digitalClock =()=>{
const Now = new Date();

    let year= Now.getFullYear();
    let month= Now.getMonth();
    let date= Now.getDate();
    let hours= Now.getHours();
    let min= Now.getMinutes();
    let sec= Now.getSeconds();
    let pmm= "am";

if (hours > 12) {
    hours = hours - 12;
    pmm= "pm";
}

if (hours < 10) {
    hours = `0${hours}`;
}
if (hours == 0) {
    hours = `12`;
}
if (min < 10) {
    min = `0${min}`;
}
if (sec < 10) {
    sec = `0${sec}`;
}
    const clock =`<div class="time">${hours}:${min}:${sec}<div class="spanclock"> ${pmm}</div></div><div class="data">${year}:${month + 1}:${date}</div>`;
    let cont=document.getElementById("clock")
    cont.innerHTML=clock;
};
digitalClock()
setInterval(digitalClock ,1000);