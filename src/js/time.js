let dateObj = new Date();
let hours;
if (dateObj.getHours() > 12) {
    hours = dateObj.getHours() - 12;
} else {
    hours = dateObj.getHours();
}
date = hours.toString() + " : " + (dateObj.getMinutes()).toString() + " : " + (dateObj.getSeconds()).toString();
document.getElementById("timeText").innerText = date;
function getDate() {
    dateObj = new Date();
    if (dateObj.getHours() > 12) {
        hours = dateObj.getHours() - 12;
    } else {
        hours = dateObj.getHours();
    }
    date = hours.toString() + " : " + (dateObj.getMinutes()).toString() + " : " + (dateObj.getSeconds()).toString();
    document.getElementById("timeText").innerText = date;
}
setInterval(getDate,1000);