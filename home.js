let myForm=document.querySelector(".form");
let myInput=document.querySelector(".input");
let myButtn=document.querySelector("button");
let mycomp=document.querySelector(".complet");
let mywarn=document.querySelector(".warn");
let myresert=document.querySelector(".resert");





myForm.addEventListener("submit",function(e){
    e.preventDefault();
    if(myInput.value==""){
        warnMsg();
    }else
    addTask();
})


function warnMsg() {
    mywarn.style.display="block"
    myInput.style.border="1px solid red"
}

function addTask() {
    let li=document.createElement("li");
    let butt=document.createElement("button");
    let label=document.createElement("label");

    
    label.innerHTML=myInput.value;
    butt.innerHTML="Delet"; 

    li.appendChild(butt);
    li.appendChild(label);
    myresert.appendChild(li);

    
    li.classList.add("task");
    butt.classList.add("clear");
    label.classList.add("task-content");

    
    butt.addEventListener("click",function(){
        let parent = this.parentNode;
        parent.remove();
       })

}

myInput.addEventListener("keypress",function(){
    mywarn.style.display="none" ;
   myInput.style.border="1px solid white ";
})
