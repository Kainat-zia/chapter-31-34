// Q1
// let update = new Date
// document.write(update)

// Q2
// let monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// let currentDate = new Date();
// let currentMonthIndex = currentDate.getMonth();
// let currentMonthName = monthNames[currentMonthIndex];
// alert(currentMonthName);

// Q3
// let weeknames = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
// let currentday = new Date();
// let currentdayindex = currentday.getDay();
// let currentweekname = weeknames[currentdayindex];
// alert(currentweekname.slice(0,3));

// Q4
// let weekdays = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"]
// let currentday = new Date();
// let currentdayindex = currentday.getDay();
// let currentweekname = weekdays[currentdayindex];

// if(currentweekname === "satuurday" || currentweekname === "sunday"){
//     alert("Its Fun day")
// }

// Q5
// let firstdays = new Date();
// let days = firstdays.getDate();

// if(days < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }





// Q7
// let weather = new Date();
// let time = weather.getHours();

// if(time < 12){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

// Q8
// var laterdate = new Date(2020,11,31);
// document.write("Later date : "+ laterdate)

// Q9

// const now = new Date();
// const startOf2015 = new Date('January 1, 2015 00:00:00');
// const differenceInMilliseconds = now - startOf2015;
// const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

// document.write(`Seconds elapsed since the beginning of 2015: ${differenceInSeconds}`);

// Q11
// var time = new Date();
// document.write("Current date: " +""+ time + "<br>");

// var Time = new Date();
// var now = Time.getHours();
// Time.setHours(now - 1)
// document.write("1 hour ago,it was " + Time)

// // Q12
// var newtime = new Date();

// let now = new Date();
// now.setFullYear(now.getFullYear() - 100);
// alert("Current date: " +""+ newtime  + "        "+ "100 years back it was " + now.toDateString());

// Q13

// var age = +prompt("Please enter your age:")
// var currentyear = new Date().getFullYear();
// var birthyear = currentyear - age
// alert("Your Birth year is: "+ " "+birthyear)


// Q14
let customerName = prompt("Please enter your name:");
let currentMonth = prompt("Please enter the current month:");
let numberOfUnits = parseFloat(prompt("Please enter the number of units consumed:"));
let chargesPerUnit = parseFloat(prompt("Please enter the charges per unit:"));
let latePaymentSurcharge = parseFloat(prompt("Please enter the late payment surcharge:"));

// Calculate the net amount payable within due date
let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// Calculate the gross amount payable after due date
let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// Display the results
alert(  "Customer Name: " + customerName + "\n" +
    "Current Month: " + currentMonth + "\n" +
    "Number of Units: " + numberOfUnits.toFixed(2) + "\n" +
    "Charges per Unit: " + chargesPerUnit.toFixed(2) + "\n" +
    "Net Amount Payable (within Due Date): " + netAmountPayable + "\n" +
    "Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "\n" +
    "Gross Amount Payable (after Due Date): " + grossAmountPayable);