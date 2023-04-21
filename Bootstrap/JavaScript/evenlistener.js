// function alert_user(){
//     alert("Hii");
// }

// function fun(){
//     var text_user = prompt("enter string")
//     var head = document.getElementById("head_tag")
//     head.textContent = text_user;
// }

// function animal(){
//     var count = Number(prompt("how many need"))
//     var arr = new Array(count)
//     var ul = document.createElement("ul")
//     for (i=0; i<arr.length;i++){
//         var li = document.createElement("li")
//         li.textContent=prompt('enter animal name $(i+1):')
//         arr[i]=li.textContent
//         ul.appendChild(li)
//         arr.textContent=li
//     }
// }
// var btn = document.getElementById("btn")
// btn.addEventListener("click", function(){
//     let div = document.createElement("div");
//     div.style.background = "grey";
//     let h3 = document.createElement("h3");
//     h3.textContent = "Name:Sathish";
//     h3.className = "h3style";
//     let h3a = document.createElement("h3");
//     h3a.textContent = "city:Bangalore";
//     div.appendChild(h3);
//     div.appendChild(h3a);
//     document.body.append(div);
// });

// let btn = document.getElementById("add");
// btn.addEventListener("click", function(){
//     var num1 = getElementById("num1").value;
//     var num2 = getElementById("num2").value;
//     var p = document.getElementById("p")
//     document.body.append(p)
//     p.textContent = num1+num2;
// });


function select_city(){
    var select = document.getElementById("a").value
    console.log(select)
    var as = document.getElementById(as)
    as.textContent ='your selected ${select}'
}

