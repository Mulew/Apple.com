document.addEventListener('DOMContentLoaded', function() {
    let menu=document.querySelector("#menu");
    let close=document.querySelector(".close");
    function show(){
        document.querySelector(".navigation").style.visibility="visible";
        document.querySelector(".close").style.visibility="visible";
    }
    function hide(){
        document.querySelector(".navigation").style.visibility="hidden";
        document.querySelector(".close").style.visibility="hidden"; 
        location.reload();
    }
    
    menu.addEventListener("click",show);
    close.addEventListener("click",hide);
});