function validate()
{

var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var father=document.getElementById("father").value;
var mother=document.getElementById("mother").value;
var dob=document.getElementById("dob").value;

var gender="";

var g=document.getElementsByName("gender");

for(var i=0;i<g.length;i++)
{
    if(g[i].checked)
    {
        gender=g[i].value;
    }
}

var photo=document.getElementById("photo").value;

if(fname=="")
{
    alert("Enter First Name");
    return;
}

if(lname=="")
{
    alert("Enter Last Name");
    return;
}

if(gender=="")
{
    alert("Select Gender");
    return;
}

if(photo=="")
{
    alert("Upload Photo");
    return;
}

alert("Registration Successful");

document.getElementById("result").innerHTML=

"<b>First Name :</b> "+fname+"<br><br>"+

"<b>Last Name :</b> "+lname+"<br><br>"+

"<b>Father's Name :</b> "+father+"<br><br>"+

"<b>Mother's Name :</b> "+mother+"<br><br>"+

"<b>Date of Birth :</b> "+dob+"<br><br>"+

"<b>Gender :</b> "+gender+"<br><br>"+

"<h3>Educational Qualification</h3>"+

"<table border='1'>"+

"<tr><th>Qualification</th><th>Board</th><th>Year</th><th>Percentage</th></tr>"+

"<tr><td>SSC</td><td>"+document.getElementById("ssc").value+"</td><td>"+document.getElementById("sscyear").value+"</td><td>"+document.getElementById("sscper").value+"</td></tr>"+

"<tr><td>Intermediate</td><td>"+document.getElementById("inter").value+"</td><td>"+document.getElementById("interyear").value+"</td><td>"+document.getElementById("interper").value+"</td></tr>"+

"<tr><td>Graduation</td><td>"+document.getElementById("degree").value+"</td><td>"+document.getElementById("degreeyear").value+"</td><td>"+document.getElementById("degreeper").value+"</td></tr>"+

"</table>";

}