
let circle=document.getElementById("c");
let form=document.getElementById("formm");
let form1=document.getElementById("forrm");
let link=document.getElementById("link");
let btn=document.getElementById("btn");
function change() {
if(circle.textContent.trim()==="🌙")
{
    circle.textContent="☀️";
    form1.style.backgroundColor="white";
    form.style.color="white";
    form.style.backgroundColor="rgb(31, 30, 30)";
    form.style.boxShadow="2px 2px 20px 2px rgb(0, 0, 0, 0.7)";
    link.style.color="white";
}
else
{
    circle.textContent="🌙";
    form1.style.backgroundColor="rgb(31, 30, 30)";
    form.style.color="black";
    form.style.backgroundColor="white";
    form.style.boxShadow="2px 2px 20px 2px rgba(255, 255, 255, 0.3)";
    link.style.color="blue";
}
}
circle.addEventListener("click", change);