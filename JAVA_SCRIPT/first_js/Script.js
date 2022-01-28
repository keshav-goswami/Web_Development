// document.write("HELLO THIS IS JAVASCRIPT");
// // alert("THIS IS FIRST ALERT");
// var a = [1, 2, 3, 4, 5, "keshav", "goswami"];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// var s = "This is Keshav Goswami";
// for (let index = 0; index < s.length; index++) {
//     const element = s[index];
//     console.log(element);
// }
// const t = s.split(" ");
// console.log(t);

// var obj = {
//     keshav:1,
//     harshit:2,
//     jack:3,
//     aashi:4,
//     khera:5
// }
// console.log(obj["keshav"])

// IMPORTANT ARRAY PRINT METHOD
// var arr = ["keshav","Bloomy","Jack","Harry","Harshit"];

// arr.forEach(element => {
//     console.log(element+element);
// });

// arr.forEach(function(ele){
//     console.log(ele);
// });
// sum = (a,b)=>{
//     return a+b;
// }
// set = ()=>{
//     console.log("I am Void function");
// }
clicked = ()=>{
    console.log("click hua");
    let ele = document.getElementsByTagName("div");
    // ele[0].style.background = "red";
    console.log(ele);
    ele[3].style.background = "black";
    ele[5].style.background = "black";
};
over = ()=>{
    let oele = document.getElementsByTagName("button");
    oele[0].style.fontSize="larger";
};
out = ()=>{
    let oele = document.getElementsByTagName("button");
    oele[0].style.fontSize="medium";
};
// Time out will click on it automatically on the mentioned time only one time whereas timeinterwal will keep on clicking it after every occurance of mentioned time(milli-seconds).

// setTimeout(clicked,2000); 
// setInterval(clicked,5000);
// window.onload = function(){
//     alert("FULLY LOADED");
// }