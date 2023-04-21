// document.body.append(mydiv)
// mydiv.style.border="1px solid black";

// var para1 = document.createElement("p");
// para1.textContent="am child of div";
// mydiv.appendChild(para1);

// mydiv.setAttribute("id", "mydiv");
// mydiv.setAttribute("class", "division");
// mydiv.style.textAlign = "center"
// para1.setAttribute(
//     "style", 'background-color: red; border: 1px solid black;'
// );
// console.log(mydiv);

// var le = prompt("Enter Your Name : ")
document.getElementById("demo").innerHTML = prompt("Enter Your Name :")

var ename = prompt("enter Name");
var city = prompt("Enter City");
var mydiv = document.createElement("div");
document.body.append(mydiv);
var h1 = document.createElement("h1")
h1.textContent= 'Name: ${city.toUpperCase}';
mydiv.appendChild(h1)
mydiv.style.backgroundColor= black;
mydiv.style.color = white;


var name1 = prompt("A")
var name2 = prompt("b")