let about = document.querySelector("#about");
let icon = document.querySelector("#icon");
let iconTarget = document.querySelector("#icon-target");
let aboutPort = document.querySelector("#about-port");

about.addEventListener("click", (e) =>  
{
     e.preventDefault();  
     aboutPort.scrollIntoView();
     
})
icon.addEventListener("click", () => {
     iconTarget.setAttribute("style", "display: block");
     icon.setAttribute("style", "display: none");
     console.log(iconTarget)
})