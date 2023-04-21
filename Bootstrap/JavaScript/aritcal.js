var mydiv=document.createElement("div")
mydiv.textContent=("heading")
mydiv.style.border="1px solid black"
mydiv.style.textAlign="center"
mydiv.style.padding="20px"
mydiv.style.backgroundColor="green"
document.body.append(mydiv)

var div=document.createElement("div")
div.style.border="1px soild black"
div.style.backgroundColor="red"
div.style.padding="10px"
var nav=document.createElement("nav")
var a=document.createElement("a")
a.textContent=("home search register About")
a.style.wordSpacing="300px"
a.style.padding="40px"

document.body.append(div)
div.append(nav)
nav.append(a)

var content=document.createElement("div")
var article1=document.createElement("div")
var artical2=document.createElement("div")
article1.setAttribute("style","background-image: url(../../Img/308e052399a8d3e2b43f4b49b5fcd597.jpg);background-repeat: no-repeat")
artical2.setAttribute("video","source-src=")

content.style.display="flex"

article1.style.border="1px solid black"
article1.style.height="400px"
article1.style.width="700px"

artical2.style.border="1px solid black"
artical2.style.height="400px"
artical2.style.width="700px"
document.body.append(content)
content.append(article1)
content.append(artical2)


var foot=document.createElement("footer")
foot.style.border="1px solid black"
foot.textContent="footer"
foot.style.padding="20px"
foot.style.backgroundColor="yellow"
foot.style.textAlign="center"
document.body.append(foot)
