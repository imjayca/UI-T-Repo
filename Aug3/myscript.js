// HomeWork:
// 1. Display a live clock in PM/AM fromat
// 2. Get a date from user & check if its leapyear or not
// 3. Write a program that finds 1st January is a Sunday or Not from 2015-2030
// 4. Make a program that takes two inputs, do multiplicaiton & division and displays output


document.write(Date() + "</br>");

// Display today's day:
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
document.write(daylist[day] + "<br/>");

//Dispaly Hours:
var d = new Date();
document.write(d.getHours() + "<br/>");

// Display Date:
document.write(d.getDate() + "<br/>");

// Display Month:Date:Year
document.write(d.getMonth() + ":" + d.getDate() + ":" + d.getFullYear() + "<br/>");
document.write(d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear() + "<br/>");