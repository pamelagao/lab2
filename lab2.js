//enums
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["Octtober"] = 9] = "Octtober";
    months[months["Novenber"] = 10] = "Novenber";
    months[months["Decenber"] = 11] = "Decenber";
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

console.log('Month enum: ');
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);
*/
//can not set value by below
//months.January = 2;
// Math.PI = 11;
//html elements
var pTodayDate = document.getElementById("p--today-date");
//Today's day
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
pTodayDate.innerHTML = "Today is " + todayDayOfWeek + ", " + todayMonth + " " + today.getDate() + ", " + today.getFullYear();

var userBirthday;
var buttonBirthday = document.getElementById("button--birthday");
var inputDatePicker = document.getElementById("input--date-picker");
var pBirthdayMessage = document.getElementById("p--birthday-message");

buttonBirthday.onclick = function () {
    userBirthday = inputDatePicker.value;
    // console.log(userBirthday);
    var userBirthdayDate = new Date(userBirthday + "GMT-0400");
    pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);
};
function constructDateString(inputDate) {
    //return 'happy birthday if the user's birthday is today
    if ((inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() === today.getDate())) {
        return "Happy Birthday!";
    }
    //return the day of the birthday of the current year
    var currentYearBirthday = new Date(today.getFullYear + "-" + inputDate.getMonth() + "-" + inputDate.getDate());
    return "Your birthday is on " + days[currentYearBirthday.getDay()] + " " + months[currentYearBirthday.getMonth()] + " " + currentYearBirthday.getDate() + ", " + currentYearBirthday.getFullYear();
}