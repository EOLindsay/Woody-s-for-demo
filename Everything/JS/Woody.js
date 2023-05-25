document.addEventListener('DOMContentLoaded', ()=>{
   
const frstn = document.getElementById("frstn")
const lastn = document.getElementById("lastn")
const message = document.getElementById("message")
const submitBtn =document.getElementById("submit")
const menuBtn = document.getElementById("menubtn")
const mobnav = document.getElementById("mobile-view-nav")

let userObj ={}
userObj.firstName = frstn.value
userObj.lastName = lastn.value
userObj.message = message.value



submitBtn.addEventListener("click", function(){
    console.log(userObj);
})

menuBtn.addEventListener('click',()=>{
    console.log({mobnav:  mobnav.className});
    //mobnav.style.display="none"
    if(mobnav.className.includes("hidenav")){
        mobnav.classList.remove("hidenav")
    }else{
        mobnav.classList.add("hidenav")
    }
    
})


// let lastobj ={}
// lastobj.lastName = lastn.value
// console.log(lastn.value);

// const email = document.querySelector("#email")
// let emailObj ={}
// emailObj.email = email.value
// console.log(email.value);

// const message = document.querySelector("#message")
// let messageObj ={}
// messageObj.message = message.value
// console.log(message.value);


})
// const day =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// const end = day.pop()
// console.log({end});
// const start = day.shift()
// console.log({start});
// const weekend = start.concat(end)
// console.log({weekend});
//  day.push("Funday")
// console.log({day});
