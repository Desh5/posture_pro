function updateDateTime(){

const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12;
hours = hours ? hours : 12;

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const month = months[now.getMonth()];
const date = now.getDate();

document.getElementById("dateTime").innerText =
"📅 " + month + " " + date + " | ⏰ " +
hours + ":" + minutes + ":" + seconds + " " + ampm;

}

setInterval(updateDateTime,1000);
updateDateTime();
function showSection(id){

document.querySelectorAll(".section")
.forEach(sec=>sec.classList.remove("active"))

document.getElementById(id)
.classList.add("active")

}

let notificationsEnabled=true

document
.getElementById("toggle")
.addEventListener("change",function(){

notificationsEnabled=this.checked

})

function showNotification(title,message){

if(!notificationsEnabled) return

const container=document.getElementById("notificationContainer")

const cloud=document.createElement("div")

cloud.className="cloudNotification"

cloud.innerHTML="<strong>"+title+"</strong><br>"+message

container.appendChild(cloud)

setTimeout(()=>{cloud.remove()},4000)

}

function goodPosture(){

showNotification(
"Good Posture 👍",
"Great! Keep your back straight."
)

}

function badPosture(){

showNotification(
"Bad Posture ⚠",
"You are leaning forward. Sit straight."
)

}

function calibrationSuccess(){

showNotification(
"Calibration Successful ✔",
"Sensor calibrated successfully."
)

}

function calibrationFailed(reason){

showNotification(
"Calibration Failed ❌",
"Reason: "+reason
)

}

function longSitting(){

showNotification(
"Sitting Too Long ⏰",
"You have been sitting for 1 hour."
)

}

function postureStreak(){

showNotification(
"Posture Streak 🔥",
"You maintained good posture for 20 minutes!"
)

}

/* TEST NOTIFICATIONS */

setTimeout(()=>goodPosture(),2000)

setTimeout(()=>badPosture(),5000)

setTimeout(()=>calibrationSuccess(),8000)

setTimeout(()=>calibrationFailed("Incorrect sitting position"),11000)

setTimeout(()=>postureStreak(),14000)

/* CHARTS */

new Chart(document.getElementById("lineChart"),{

type:"line",

data:{
labels:["1","2","3","4","5"],
datasets:[{
label:"Posture Score",
data:[60,70,75,82,90],
borderColor:"green",
fill:false
}]
}

})

new Chart(document.getElementById("barChart"),{

type:"bar",

data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
data:[80,75,90,70,85,88,92],
backgroundColor:"#3498db",
barThickness:30
}]
},

options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true,max:100}}
}

})
/* ------------------ NOTIFICATION SYSTEM ------------------ */

function notify(message){

const toggle = document.getElementById("toggle")

// stop if notifications disabled
if(!toggle.checked){
return
}

const box = document.createElement("div")

box.className = "notification"

box.innerText = message

document.getElementById("notificationContainer").appendChild(box)

setTimeout(()=>{
box.remove()
},4000)

}

/* detect toggle ON */

document.getElementById("toggle")
.addEventListener("change", function(){

if(this.checked){

notify("🔔 Notifications Enabled")

}

})


/* Example posture alerts (simulation) */

setInterval(()=>{

const random = Math.floor(Math.random()*3)

if(random === 0){

notify("✅ Good posture detected")

}

else if(random === 1){

notify("⚠ Bad posture detected — straighten your back")

}

else{

notify("🎯 Calibration successful")

}

},10000)
/* DARK MODE */

const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("change", function(){

document.body.classList.toggle("dark");

});
