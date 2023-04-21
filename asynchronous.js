// console.log("start");
// console.log("a");
// setTimeout(function(){
//     console.log("b");
// }, 2000);
// console.log("c");
// console.log("end");

// var str = "Hii"
// console.log(str)
// setTimeout(fun,)
// function(){
// alert("Hooooiiii");
// console.log("Hayeee")
// }

// console.log("a")
// var sum=0;
// function start(){
// var set_intrl=setInterval(function(){
//     console.log("b")
//     sum++;
//     var para = document.getElementById("para")
//     para.textContent = sum
// }, 1000)

// function stop_exe(){
//     clearInterval(set_intrl)
// }

// }
// console.log("c")
// console.log("end")


setInterval(showtime,1000)
function showtime(){
    var date1 = new Date();
    // var hour = 00;
    var hour = date1.getHours();
    var min = date1.getMinutes();
    var sec = date1.getSeconds();   
    var am_pm = "AM";

if(hour>=12){
hour = hour -12;
am_pm= "PM";
}
if(hour==0){
    hour =12;
}
var hours = hour < 10 ? "0" + hour : hour;
var mins  = min < 10 ? "0"+ min : min;
var secs  = sec < 10 ? "0"+ sec : sec;
var para  = document.getElementById("para");
para.textContent=`${hours}:${mins}:${secs}:${am_pm}`;
}



var month = new Date();
var month1= month.getMonth()
console.log(month1)
var mon =["jan", "feb", "april", "may"]
console.log(mon[month1]);


var year = new Date();
var year1= month.getFullYear()
console.log(year1)
var ye =["2021", "2022", "2023", "2024"]
console.log(ye[year1]);

var dts = new Date();
var dts1= month.getDate()
console.log(dts1)
var mon =["19", "20", "21", "22"]
console.log(mon[dts1]);