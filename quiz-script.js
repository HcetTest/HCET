var numbers =[]
const data = [{
  "question":"What is the full form of CPU?",
  "id":"1",
  "name":'Q1',
  "options":["Computer Processing Unit","Computer Principle Unit","Central Processing Unit","Control Processing Unit"]
},
{
  "question":"Which of the following is the smallest unit of data in a computer?",
  "id":"2",
  "name":'Q2',
  "options":["Byte","Nibble","KB","Bit"]
},
{
  "question":"Which of the following can access the server?",
  "id":"3",
  "name":'Q3',
  "options":["Web Server","Web Browser","User","Web Client"]
},
{
  "question":"Which of the following is a type of technique in which dumb terminals are connected to a central computer system?",
  "id":"4",
  "name":'Q4',
  "options":["Time Sharing","Message passing","Batch environment","User environment"]
},
{
  "question":"The value of base in a decimal number system is ____",
  "id":"5",
  "name":'Q5',
  "options":["8","2","10","16"]
},
{
  "question":"Another name for base is ____",
  "id":"6",
  "name":'Q6',
  "options":["root","radix","entity","median"]
},
{
  "question":"Another name for base is ____",
  "id":"7",
  "name":'Q7',
  "options":["root","radix","entity","median"]
},
{
  "question":"What is Software Engineering?",
  "id":"8",
  "name":'Q8',
  "options":["Testing a software","Application of engineering principles to the design a software","Designing a software","None of the above"]
},
{
  "question":"What does SDLC stands for?",
  "id":"9",
  "name":'Q9',
  "options":["System Design Life Cycle","Software Design Life Cycle","Software Development Life Cycle","System Development Life cycle"]
},{
  "question":"Software patch is defined as ______",
  "id":"10",
  "name":'Q10',
  "options":["Daily or routine Fix","Required or Critical Fix","Emergency Fix","None of the mentioned"]
},
];
window.onload = ()=>{
  if(localStorage.getItem("submit")==null){
    console.log("requesting server");
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    input.id ="UserId";
    input.type = "text";
    input2.id ="UserName";
    input2.type = "text";
    input.name = "UserName"
    input2.name = "Team ID"
    input.value = `Name :${localStorage.getItem("UserId")}`|| "noname";
    input2.value = `Team ID :${localStorage.getItem("teamNo")}`|| "Tester";
    input.disabled=true;  
    input2.disabled=true;  
    // var formDiv = document.createElement("div");
    // formDiv.appendChild(input);
    // formDiv.appendChild(input2);
    form.insertBefore(input,node)
    form.insertBefore(input2 ,node)
    numbers = localStorage.getItem('questionBank').split(",");
  }
  else{
    var submitMessage = document.createElement("h2");
    var submitMessage2 = document.createElement("p");
    submitMessage.innerText = "You Have submitted the Quiz."
    submitMessage2.innerText =" if you have ecountered any issues then contact the host"

    var formDiv = document.createElement("div");
    formDiv.appendChild(submitMessage);
    formDiv.appendChild(submitMessage2);
    formDiv.setAttribute("class","submitCompolete")
    form.insertBefore(formDiv,node)
  }
}


window.onbeforeunload = (e) => {
  e.preventDefault();
  return '';
};

var timerInterval = null;
const doc = document.documentElement;
const requestFullscreen = doc.requestFullScreen || doc.webkitRequestFullScreen || doc.mozRequestFullScreen;
const myDialog = document.getElementById('myDialog');


const form = document.getElementById("quizForm");
const node = form.lastElementChild;
const submitDialog = document.getElementById("SubmitDialog");

doc.addEventListener("webkitfullscreenchange", function() {
  if (!document.fullscreenElement) {
    myDialog.show();
    document.getElementById("quizForm").classList.toggle('blur');
    document.getElementById("full").style.display= "flex";
    }
  
});

doc.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  var right = document.getElementById("rightClickMenu");
  right.style.left = event.pageX + "px"; 
  right.style.display = 'block'; 
  right.style.top = event.pageY + "px";
  setTimeout(()=> {
    right.style.display = 'none';
  }, 1000); 
});

function checkSubmit(e){
  console.log('Submited',e);
  document.getElementById("SubmitButton").disabled =true 
  if(localStorage.getItem("submit") !== null){
    alert("Already submited")
  }
  else{
    submitDialog.show()
  } 
}

function SubmitForm(){
localStorage.setItem("submit","Submited")
document.getElementById("UserName").disabled =false;
document.getElementById("UserId").disabled =false;
localStorage.setItem("submit","Submited")
form.submit();
window.onbeforeunload = null;
document.getElementById("SubmitButton").disabled =true 
navigator.keyboard.unlock();
}

function loadForm(e){
  if(localStorage.getItem("submit") !== null){
    alert("Already submited");
    return;
  }
  if(!document.fullscreenElement){
    myDialog.show();
    return;
  }

  for(var i=0;i<numbers.length;i++){
    j= numbers[i];
    var formDiv = document.createElement("div");
    formDiv.setAttribute("class","formDiv");
    var p = document.createElement("p");
    p.innerText = `${i+1}) ${data[j].question}`;
    formDiv.appendChild(p);
  data[j].options.forEach((value,index1)=> {
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.id = `${data[j].id}-${index1}`;
    label.htmlFor =`${data[j].id}-${index1}`;
    input.name=data[j].name
    input.type = "radio";
    input.value = value;
    label.innerText= value
    formDiv.appendChild(input);
    formDiv.appendChild(label);
    formDiv.insertAdjacentHTML("beforeend", `<br>`);
  });
  formDiv.insertAdjacentHTML("beforeend", ` <hr style="height:2px;border-width:0;background-color:gray; margin-top:18px">`);
  form.insertBefore(formDiv,node)
  }
document.getElementById("SubmitButton").style.display="inline-block";
startTimer(e);
}

function closeDialog(){
  submitDialog.close();
  document.getElementById("SubmitButton").disabled =false
}

function startTimer(e) {
  e.style.display = "none";
  const display = document.getElementById("timer")
  var duration = 60 * 0.5;
  var timer = duration;
  var minutes, seconds;
  timerInterval = setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          stopTimer();
      }
  }, 1000);
}

function stopTimer(){
  clearInterval(timerInterval);
  document.getElementById("timer").style.color="red"
  SubmitForm();
}

function HideToolbar(e) {
if (!document.fullscreenElement) {
  requestFullscreen.call(doc);
  navigator.keyboard.lock();
  e.style.display = "none";
  document.getElementById("quizForm").classList.remove('blur');
  }
  else{
    navigator.keyboard.unlock();
  }
}