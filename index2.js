let day1 = document.getElementById("day");
let hour1 = document.getElementById("hour");
let min1 = document.getElementById("min");
let sec1 = document.getElementById("sec");
const newyear = "07 jun 2022";
function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    const totalsec = (newyeardate - currentdate) / 1000;
    const days = Math.floor(totalsec /3600/24);
    const hour = Math.floor(totalsec / 3600) %24;
    const min = Math.floor(totalsec / 60) % 60;
    const sec = Math.floor(totalsec)%60;
    day1.innerHTML = days; 
    hour1.innerHTML = hour;
    min1.innerHTML = min;
    sec1.innerHTML = sec;

}
countdown();
setInterval(countdown,1000);
