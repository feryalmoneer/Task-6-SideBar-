const ButtonCliclk =document.querySelector(".nav .ButtonCliclk");
 console.log(ButtonCliclk);
 ButtonCliclk.onclick = function() 
{
document.querySelector(".container").classList.remove("d-none");
document.querySelector(".row").classList.add("overlay");
document.querySelector(".ButtonCliclk").classList.add("d-none");

}


const ButtonCliclkRemove =document.querySelector(".blockButo .ButtonCliclkRemove");
 console.log(ButtonCliclkRemove);
 ButtonCliclkRemove.onclick = function() 
{
document.querySelector(".container").classList.add("d-none");
document.querySelector(".row").classList.remove("overlay");


}

