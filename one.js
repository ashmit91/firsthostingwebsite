var a=document.querySelector(".one")
var b=document.querySelector("button")
var flag=0;
b.addEventListener("click",function()
{ if(flag==0){
    a.style.backgroundColor="yellow"
    flag=1;
}
else
{
    if(flag==1)
    {
        a.style.backgroundColor="white";
        flag=0;
    }
}
})
