let btn = document.querySelector(".btn1");
let body= document.querySelector("body");
let btn1="ujed";

btn.addEventListener('click',()=>{

    if (btn1==="ujed")
        {
    btn1="aandhr";
    body.classList.add("dark");
    body.classList.remove("light");
        }
    else{
    btn1="ujed";
    body.classList.add("light");
    body.classList.remove("dark");
    }
});