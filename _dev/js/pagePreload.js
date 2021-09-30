const preload = document.getElementById("preload"); 

window.addEventListener("load", function(){
    setTimeout(function(){
        preload.style.transition = "all 1s ease-in-out";
        preload.style.display = "none";
    }, 2000)
})