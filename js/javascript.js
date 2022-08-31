function changeColor(elem)
{
    if(elem.id=="im1")
    {
    document.getElementById("div1").style.color="rgb(105, 107, 107)";
    }
    else if(elem.id=="im2")
    {
        document.getElementById("div2").style.color="rgb(105, 107, 107)";
    }
}

function resetColor()
{
 
    document.getElementById("div1").style.color="rgb(153, 158, 160)";
    document.getElementById("div2").style.color="rgb(153, 158, 160)";
    
}

function navColor()
{
    let cur=document.location;
    let arr=document.getElementsByTagName("a");
    for(let i=0;i<arr.length;i++){
    if(arr[i].href==cur)
    {
      arr[i].style.color="rgb(83, 154, 182)";
    }
}
}

