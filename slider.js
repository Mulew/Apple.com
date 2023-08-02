let image = document.querySelector(".im");
let images = ["images//card.jpg","images/meti.jpg",
"images/vi.jpg","Home/Home/emoji.jpg"];
let index = 0;

function change() {
  image.src = images[index];
}

function increment() {
  index = (index + 1) % images.length; 
  // Increment the index and wrap around to 0 if it exceeds the array length
  change();
}
function decrement() {
    index = (index - 1);
    if(index<0){
        index=3;
    }
    // Increment the index and wrap around to 0 if it exceeds the array length
    change();
  }
change();
/*
let next=document.querySelector(".next-btn");
let prev=document.querySelector(".prev-btn");
next.addEventListener("click",increment);
prev.addEventListener("click",decrement);*/
//make images clickable
let card=document.querySelector(".card");
card.addEventListener("mouseover",function(){
image.src=document.querySelector(".card").src;
index=0;
});

let mac=document.querySelector(".mac");
mac.addEventListener("mouseover",()=>{
image.src=document.querySelector(".mac").src;});
index=1;

let vision=document.querySelector(".vision");
vision.addEventListener("mouseover",function(){
image.src=document.querySelector(".vision").src;
index=2;
});

let arcade=document.querySelector(".arcade");
arcade.addEventListener("mouseover",()=>{
image.src=document.querySelector(".arcade").src;
index=3;

});




window.addEventListener("load", function() {
  setInterval(increment, 5000); // Call the increment function every 6 seconds
});