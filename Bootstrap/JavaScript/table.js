var myTable=document.createElement("table")

var tablehead=document.createElement("thead")
var tablehrow=document.createElement("tr")
var th1=document.createElement("th")
var th2=document.createElement("th")
var th3=document.createElement("th")

th1.textContent="S.NO"
th2.textContent="Name"
th3.textContent="Location"

document.body.append(myTable)
myTable.append(tablehead)
tablehead.append(tablehrow)
tablehrow.append(th1)
tablehrow.append(th2)
tablehrow.append(th3)

var tablebody=document.createElement("tbody")
var tablerow1=document.createElement("tr")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")

td1.textContent="1"
td2.textContent="Smith"
td3.textContent="Chennai"

myTable.append(tablebody)
tablebody.append(tablerow1)
tablerow1.append(td1)
tablerow1.append(td2)
tablerow1.append(td3)


var  tablerow2=document.createElement("tr")
var td4=document.createElement("td")
var td5=document.createElement("td")
var td6=document.createElement("td")

td4.textContent="2"
td5.textContent="Naruto"
td6.textContent="Leafvillage"

tablebody.append(tablerow2)
tablerow2.append(td4)
tablerow2.append(td5)
tablerow2.append(td6)


var  tablerow3=document.createElement("tr")
var td7=document.createElement("td")
var td8=document.createElement("td")
var td9=document.createElement("td")

td7.textContent="3"
td8.textContent="ITACHI"
td9.textContent="Uchiya"
tablebody.append(tablerow3)
tablerow3.appendChild(td7)
tablerow3.appendChild(td8)
tablerow3.appendChild(td9)

myTable.setAttribute("style",`border:"1px solid black";border-collapse:collapse`)
th1.style.border="1px solid black"
th2.style.border="1px solid black"
th3.style.border="1px solid black"
td1.style.border="1px solid black"
td2.style.border="1px solid black"
td3.style.border="1px solid black"
td4.style.border="1px solid black"
td5.style.border="1px solid black"
td6.style.border="1px solid black"
td7.style.border="1px solid black"
td8.style.border="1px solid black"
td9.style.border="1px solid black"


















