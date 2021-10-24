// var  name ="uzma <br>";
// var age = 17;
// var information = name + age;
// document.write(information)



// var a = 12 +5  * 21; 
// var b = 32+4/3;
// var d = a + b;
// alert(d)


// var a = (20-54) / (8*3)
// var b = (20*5 +2) -23;
// var c = (34-34) *0;
// var d = a*b*c;
// alert(d)


// var num1 =50;
// var num2 = 33;
// var add = num1 -num2;
// document.write("UzmaUzzi, <br>age:"+add )


// var totalMark= 600
// var obtainedMark = 313
// var percantage = obtainedMark/totalMark*100;
// alert( percantage);


// var a = 22;
// var b = 49;
// var d = a++ + a + a++ + a - ++a + ++a + a++ - a;
// alert(d)


// var c = 34;
// var e =  2;
// var f = c++ - --e + ++c + e +c + ++c - ++e - c +e;    
// alert(f)

// var g = -2;
// var h = 4;
// var l = ++g - h + h++ + ++g + --g + ++h - --g + --h + ++g
// alert(l);


// legal way


// var first_name= "uzma";
// var firstname12= "uzma";
// var $firstname= "uzma";
// var firstName= "uzma";


// ilegal way


// var second name = "uzzi";
// var second-name = "uzzi";
// var 12secondname = "uzzi";
// var ?secondname = "uzzi";
// var second@name = "uzzi";



////MARk SHEEt //// 






var name = prompt("Enter Your Name", "Name:");
var school = prompt("Enter Your School Name ", "School Name");
var Class = prompt("Enter Your  class", "Class");
var math = Number(prompt("Math"));
var urdu = Number(prompt("Urdu "));
var bio = Number(prompt("Biology "));
var Science = Number(prompt("Scirnce "));
var english = Number(prompt("English "));
var totalMark = 500;
var obtainMarks = math + urdu + bio + Science + english;
var percentage = obtainMarks / totalMark * 100;


document.write("<h1>Mark Sheet</h1>" + "<b>Name:</b>&nbsp" + name + "<br> <b>School:</b>&nbsp" + school + "<br><b>Class:</b>&nbsp" + Class + "<br> <h2>Subject Numbers</h2>" + "<b>Math:</b>  &nbsp" + math + "<br><b> Urdu:</b> &nbsp " + urdu + "<br><b> Biology:</b>&nbsp" + bio + "<br><b>Science</b>: &nbsp" + Science + "<br><b>English</b>: &nbsp" + english);
document.write("<h2>ObtainMarks</h2>", +obtainMarks);
document.write("<h2>Total Marks</h2> " + totalMark);
document.write("<h2>Percentage</h2>" + percentage + "%");



