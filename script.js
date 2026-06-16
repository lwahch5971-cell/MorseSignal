const playBtn = document.getElementById("playBtn");
const signalAudio = document.getElementById("signalAudio");

const guideBtn = document.getElementById("guideBtn");
const guideBox = document.getElementById("guideBox");

const dotBtn = document.getElementById("dotBtn");
const dashBtn = document.getElementById("dashBtn");
const letterBtn = document.getElementById("letterBtn");
const clearBtn = document.getElementById("clearBtn");

const currentInput = document.getElementById("currentInput");

const decodeBtn = document.getElementById("decodeBtn");

const successScreen =
document.getElementById("successScreen");

const statusText =
document.getElementById("statusText");

/* الرسالة الصحيحة */

const CORRECT_MESSAGE =
".... / . / .-.. / .--.";

/* التخزين */

let message = "";

/* تشغيل الإشارة */

playBtn.addEventListener("click", () => {

signalAudio.currentTime = 0;

signalAudio.play();

statusText.textContent =
"جاري استقبال البث";

playBtn.textContent =
"◼ إيقاف الإشارة";

});

/* دليل مورس */

guideBtn.addEventListener("click", () => {

guideBox.classList.toggle("hidden");

if(guideBox.classList.contains("hidden")){

guideBtn.textContent =
"دليل مورس";

}else{

guideBtn.textContent =
"إخفاء الدليل";

}

});

/* إضافة نقطة */

dotBtn.addEventListener("click", () => {

message += ".";

updateDisplay();

});

/* إضافة شرطة */

dashBtn.addEventListener("click", () => {

message += "-";

updateDisplay();

});

/* حرف جديد */

letterBtn.addEventListener("click", () => {

if(message.length > 0){

message += " / ";

updateDisplay();

}

});

/* مسح */

clearBtn.addEventListener("click", () => {

message = "";

successScreen.classList.add("hidden");

statusText.textContent =
"قيد التحليل";

updateDisplay();

});

/* تحديث الشاشة */

function updateDisplay(){

if(message === ""){

currentInput.textContent =
"...";

}else{

currentInput.textContent =
message;

}

}

/* تحليل الرسالة */

decodeBtn.addEventListener("click", () => {

const cleanInput =
message.trim();

if(cleanInput === CORRECT_MESSAGE){

success();

}else{

failure();

}

});

/* نجاح */

function success(){

statusText.textContent =
"تم التعرف على الإشارة";

successScreen.classList.remove("hidden");

successScreen.innerHTML = `

<div class="success-box">

تم فك الإشارة بنجاح.

</div>

`;

signalAudio.pause();

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

/* فشل */

function failure(){

successScreen.classList.remove("hidden");

successScreen.innerHTML = `

<div class="success-box"
style="
border-color:#ff4444;
color:#ff4444;
">

فشل تحليل الإشارة.

</div>

`;

}

/* إذا انتهى الصوت */

signalAudio.addEventListener("ended", () => {

statusText.textContent =
"في انتظار إعادة التشغيل";

playBtn.textContent =
"▶ تشغيل الإشارة";

});