const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask(){
    if( inputbox.value ===''){
        alert("You must write a something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData()
}


// remove karne ke liye use kiya hai 

listcontainer.addEventListener("click",function(e){
    if( e.target.tagName === "LI"){
        e.target.classlist.toggle("checked");
        saveData()
        

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
      
    }
}, false);



// data ko save karne ke liye hai

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);  // imp data ko save karat ahi
}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();