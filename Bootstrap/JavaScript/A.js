var add = (a,b)=>{
	return a+b;

};
console.log(add(10,20));

var add1 = a =>{
	return a+10;

};
console.log(add1(10));




function outer (a,b) {
	function c(x){
		return x+x;
	}
		return math.add(add(a)+add(b));
	}

	function sec(){
		var result;
		result = outer(1,2);
		document.write(result);
	}
	var x1 = ["java","sql","webtech"]
	console.log(x1[0])
	x1[0] = "manual"
	x1[3] = "intro"
	console.log(x1)

	var y2=x1;
	y2[1] ="mock"
	console.log(y2)
	console.log(x1)


var string = 0
var num = 0
var begint = 0

	 var x1 = ["java",1,1n,null,undefined, function() {

	 },{ 
	 	ename:"smith"
	 }]

	 console.log(typeof function(){})

	for(var element of x1){
		if (typeof element == "begint"){
			begint++
		}
		else if(typeof element == "undefined"){
			undefined++
		}
		else{

		}
	}
	console.log(begint)
	console.log(undefined)

var backpay = 1000;
var expenseofEmp = [200,300,400,500]
var total = expenseofEmp.reduce(function(backpay,expenseofEmp){
return expenseofEmp+=backpay;
},1000)
console.log(total)

var x1 = [1,2,3,4,2,3,5,1,6,0]
var x2 = x1.reduce(function(acc,elem){
	if(!acc[elem]){
		acc[elem]=1;

	}
	else{
		acc[elem]++
	}
	return acc;
	
},{})
console.log(x2);


var str =["chicken", "cats", "dogs", "cats", "chicken", "Dolphine"]
var str1 = str.reduce(function(a,b){
	if(!a[b]){
		a[b]=1;
	}
	else{
		a[b]++
	}
	return a;
},{})
console.log(str1);


var person = {


ename:"sathish",
};
console.log(person);
person.empNo= 500;
console.log(person);

person["gender"]= "male";
console.log(person);
delete person.ename
console.log(person);

var student_1 = {
	name: "sathish",
	grade:"A+",
}

var student_2 ={
	name : "vicky",
	grade: "A",
}
var class_1={
	s1:student_1,
	s2:student_2,

}
console.log(class_1.s1);

var person ={
	ename: "Sathish",
	behaviour :function(){
		console.log("he is a dubakur "+this.ename)
	}
}

console.log(person.ename)
person.behaviour();


var book={
	java: ["intr","a","b","c"]

}


console.log(book.java[0])




	// if (java==0) {
	// 	console.log("Javavaahajh")
	// }
	// else{
	// 	book++;
	// }
var book1={
	java:[
		{
			intr:"A"
		},
			{a:"B"},
			{b:"C"},
			{c:"D"},
	],
	java: ["intr","a","b","c"]
}
console.log(book1.java[0])

var student =[
	{name:"Quincy", grade: "A+"},
	{name:"Marry", grade: "A+"},
	{name:"Queen", grade: "A+"},
	{name:"nancy", grade: "A+"},
	{name:"pinky", grade: "A+"},
	];
console.log("student details");
console.log(student);
	console.log("grade");
	var maping =student.map(function(mapped){
return '${mapped.name}==> ${(mapped.grade+=5)}';
	});
console.log(maping);
console.log("student filter grade");
var filtermark = student.filter(function(mapped){
	if (mapped.grade>=100) {
		return'${mapped.name}==>${mapped.grade}';
	}
});
console.log(filtermark);
console.log("student grand total");
var studentgrandtotal1 = student.reduce(function(acc,val){
	return(acc+=val.grade);
},0);
console.log(studentgrandtotal1);


var obj = new Object()
obj.firstname ="Sathish"
obj.lastname = "9"
console.log(obj);

function Person(name, age, color){
	this.name1= name;
	this.age= age;
	this.color=color;
}
console.log(Person.compaanyname="ty")
console.log(Person.prototype)

var ob = new Person("Sathish", 50, "white");
console.log(ob.name1);
console.log(ob.compaanyname)

const obj1 ={
	name:"sheela",
	age: 22,
	profession:"software engineer",
};
let source ={
	living: "bangalore",
	company: "test yantra",
};

console.log(source);
console.log(Object.assign(obj1,source));
console.log(obj1.living);
console.log(Object.keys(obj1))

console.log(Object.seal(obj1));
obj1.age=23;
obj1.name="sathish"
console.log(obj1)


String.prototype.heyhi = function (a){
	for (i=0; i<a.length; i++){
		console.log(a.charAt(i))
	}
	}



	function Student (name, age){
		this.name=name;
		this.age=age;

	}
	function Student_id(s_no){
		this.s_no=s_no;
	}
	var student_1 = new Student("smith",29)
	var exam_id = new Student_id(80)

	student_1.__proto__=exam_id;
	console.log(student_1.s_no)


	console.log(document)
	console.log(document.all[0])


var main_div = document.getElementById("main_content")
console.log(main_div)
main_div.style.backgroundColor="red"
