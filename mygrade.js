let x = 100;
let marks = prompt("Enter Marks");
alert(marks);
if (x > 0 && x < 101)
{
    if(x > 70)
    {
        alert("A");
        console.log("Value when A");
    }
    else if(x > 70 && x < 60 )
    {
        alert("B"); 

    }
    else if(x > 60 && x < 50)
    {
        alert("C"); 

    }
    else if(x > 50 && x < 40)
    {
        alert("D"); 

    }
    else if(x > 30)
    {
        alert("E"); 

    }
}
else
{
    alert("false")
    console.log("Value when false");
}
