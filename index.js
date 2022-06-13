let about = document.querySelector("#about");
let aboutPort = document.querySelector("#about-port");

about.addEventListener("click", (e) =>  
{
     e.preventDefault();  
     aboutPort.scrollToview();
})