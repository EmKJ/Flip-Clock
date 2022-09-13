
function setTime() {
let timeNow = new Date();
let minute = timeNow.getSeconds();
let hour = timeNow.getHours();
let amPm = "AM"

if (hour>12){
    hour -=12;
    amPm = "PM";
};
if (hour<10) {
    hour = `0${hour}`
};
if (minute<10) {
    minute = `0${minute}`
};

updateClock(hour, minute, amPm);
}

setInterval(setTime,500); 

function updateClock(htmlHour,htmlMinute,htmlAmPm) {
    const staticTopHour = document.querySelector(".hours-top-static");
    const cardTopHour= document.querySelector(".hours-top-card");
    const staticTopMinute= document.querySelector(".minutes-top-static");
    const cardTopMinute = document.querySelector(".minutes-top-card");
    const staticTopAmpm= document.querySelector(".amPm-top-static");
    const cardTopAmpm= document.querySelector(".amPm-top-card");

    const staticBottomHour= document.querySelector('.hours-bottom-static');
    const cardBottomHour= document.querySelector(".hours-bottom-card");
    const staticBttomMinute= document.querySelector(".minutes-bottom-static");
    const cardBottomMinute= document.querySelector(".minutes-bottom-card");
    const staticBottomAmpm = document.querySelector(".amPm-bottom-static");
    const cardBottomAmpm= document.querySelector(".amPm-bottom-card");

    staticTopHour.innerText = htmlHour;
    cardTopHour.innerText = htmlHour;
    staticTopMinute.innerText = htmlMinute;
    cardTopMinute.innerText = htmlMinute;
    staticTopAmpm.innerText = htmlAmPm;
    cardTopAmpm.innerText = htmlAmPm;
    staticBottomHour.innerText = htmlHour;
    cardBottomHour.innerText = htmlHour;
    staticBttomMinute.innerText = htmlMinute;
    cardBottomMinute.innerText = htmlMinute;
    staticBottomAmpm.innerText = htmlAmPm;
    cardBottomAmpm.innerText = htmlAmPm;
}
