const participentData =[
{
"name":"Raghava",
"RollNo":"31",
"TeamId":"#123"
},
{
  "name":"ravi",
  "RollNo":"25",
  "TeamId":"#123"
},
{
  "name":"Me",
  "RollNo":"31",
  "TeamId":"#321"
}]

const startDialog = document.getElementById("startDialog");
const userId = document.getElementById("userId")
const teamNo = document.getElementById("teamNo")
const userRoll = document.getElementById("userRoll")
const actualStart = document.getElementById("examStart")
actualStart.addEventListener("click",()=>{
    localStorage.setItem("UserId",userId.value)
    localStorage.setItem("UserRoll",userRoll.value)
    localStorage.setItem("teamNo",teamNo.value)
    
    console.log("Stored user data");
})
function showStart(){
    if (userId.value.trim() === "") {
        alert("Please fill in the Details");
      } else {
        startDialog.showModal();
      }
}

userId.addEventListener('focus',()=>{
document.querySelector('.dropdown-content').classList.toggle('show')
})

function filterFunction(e){
  filter = e.value.toUpperCase();
  var children = document.querySelector('.dropdown-content').children
    console.log(children)
    for (let i = 0; i < children.length; i++) {
      txtValue = children[i].textContent||children[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      children[i].style.display = "";
    } else {
      children[i].style.display = "none";
    }
   }
    
}

function placeValue(index){
  userId.value = participentData[index].name;
  userRoll.value = participentData[index].RollNo;
  teamNo.value = participentData[index].TeamId;
  console.log(participentData[index]);
  document.querySelector('.dropdown-content').classList.toggle('show')
}

window.onload =()=>{
  
    var randomArray = [];
    while (randomArray.length < 5) {
        var randomNumber = Math.floor(Math.random() * 9);
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
      }
      localStorage.setItem("questionBank",randomArray.toString())
}

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled =(winScroll/ height) * 100;
//   document.getElementsByClassName('bgLogo')[0].style.left =100- scrolled + "%";
// }


