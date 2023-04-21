var mydiv=document.createElement("div")
mydiv.textContent=("heading")
mydiv.style.border="1px solid black"
mydiv.style.textAlign="center"
mydiv.style.padding="20px"
mydiv.style.backgroundColor="skyblue"
document.body.append(mydiv)

var div=document.createElement("div")
div.style.border="1px soild black"
div.style.backgroundColor="pink"
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
article1.setAttribute("style","background-image: url(a.jpg);background-repeat: no-repeat")
// const video = document.createElement('video')
// video.src = './A.mp4';
// const im = document.getElementById('im');

var video = document.createElement("video")
artical2.append(video)

video.src="./A.mp4";
video.height = 400;
video.width = 600;
video.autoplay= false;
video.controls=true;

// obj = document.createElement('video');
// source=document.createElement('source');
// $(source).attr('type','video/mp4');
// $(source).attr('src','https://www.pexels.com/video/girl-writing-on-her-notebook-2086113/')
// $("#content").append(obj);
// $(obj).append(source);


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
foot.style.backgroundColor="purple"
foot.style.textAlign="center"
document.body.append(foot)
