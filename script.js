// fetching element 

let addbtn = document.querySelector("#shyam")
let removebtn =document.querySelector("#ram")
let box =document.querySelector(".box")

let check =0;    // concept

addbtn.addEventListener("click",function(){
     
    if(check == 0){
  
  
    let para = document.querySelector("h5")
  
    para.textContent="Friend"
    para.style.color="red"
    box.style.backgroundColor ="lightyellow"
    addbtn.textContent="Remove Friend"
    check=1;
   
    }

    else{
        let para = document.querySelector("h5")
  
    para.textContent="STRANGER"
    para.style.color="GREY"
    box.style.backgroundColor ="white"
    addbtn.textContent="Add Friend"

    check=0;

    }
})

