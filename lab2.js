//enums
var months;
(function (months) {
    months[months["January"] = 1] = "January";
    months[months["February"] = 2] = "February";
    months[months["March"] = 3] = "March";
    months[months["April"] = 4] = "April";
    months[months["May"] = 5] = "May";
    months[months["June"] = 6] = "June";
    months[months["July"] = 7] = "July";
    months[months["August"] = 8] = "August";
    months[months["September"] = 9] = "September";
    months[months["Octtober"] = 10] = "Octtober";
    months[months["Novenber"] = 11] = "Novenber";
    months[months["Decenber"] = 12] = "Decenber";
})(months || (months = {}));
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuseday"] = 2] = "Tuseday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Staturday"] = 6] = "Staturday";
})(days || (days = {}));
// in french
// enum days {
//     lundi,
//     mardi,
//     mercredi,
//     jeudi,
//     vendredi,
//     samedi,
//     dimanche
// }
console.log('Month enum: ');
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);
//can not set value by below
//months.January = 2;
// Math.PI = 11;
//html elements
var pTodayDate = document.getElementById("p--today-date");
//Today's day
// let today = Date.now();
var today = new Date();
console.log(today);
//Today's Month
console.log('Today\'s Month: ' + today.getMonth());
var todayMonth = months[today.getMonth()];
//Today's day of week
console.log('Today\'s day of week: ' + today.getDay());
var todayDayOfWeek = days[today.getDay()];
//Today's day of month
console.log('Today\'s day of month: ' + today.getDate());
//Today's year
console.log('Today\'s day of year: ' + today.getFullYear());
//display today's date to page
//inside {} is js, and outside {} is array
pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();
