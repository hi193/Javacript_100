 const star =document.querySelectorAll(".fa-star") ;
 const emoji =document.querySelectorAll(".fa-regular") ;
 const color = ["red", "orange", "blue", "lightgreen", "green"];
 updateRating(0);
 
 star.forEach((star, index) => {star.addEventListener("click",()=> {
    updateRating(index);
 });
 });



function updateRating(index){
    star.forEach((star, idx) => {
      if (idx < index + 1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });

emoji.forEach (emoji => {
    emoji.style.transform = `translateX(-${index * 32}px)`;
    emoji.style.color = color[index];
});

}



 


 
