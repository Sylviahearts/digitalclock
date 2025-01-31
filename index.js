const timeElement = document.getElementById("time");

function updateTime(){
const date = new Date();

const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");

const timeString = `  ${hours} : ${minutes} : ${seconds}`
   timeElement.textContent = timeString;
};

setInterval(updateTime, 1000);
updateTime();

