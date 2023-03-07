let x = 100;
let marks = prompt("Enter Marks");
alert(marks);
if (x > 0 && x < 101)
{
    if(x > 80)
    {
        alert("A");
        console.log("Value when A");
    }
    else if(x < 70 )
    {
        alert("B"); 

    }
    else if(x < 60)
    {
        alert("C"); 

    }
    else if(x < 50)
    {
        alert("D"); 

    }
}
else
{
    alert("false")
    console.log("Value when false");
}
