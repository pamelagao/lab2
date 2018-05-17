//enums
enum months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    Octtober,
    Novenber,
    Decenber
}

enum days {
    Sunday,
    Monday,
    Tuseday,
    Wednesday,
    Thursday,
    Friday,
    Staturday
}

console.log('Month enum: ');
console.log(months);
console.log('January: ' + months.January);
console.log('Month 1: ' + months[1]);

//can not set value by below
//months.January = 2;
// Math.PI = 11;

//html elements
let pTodayDate = document.getElementById("p--today-date");

//Today's day
let today : Date = new Date();
console.log(today);

//Today's Month
console.log('Today\'s Month: ' + today.getMonth());
let todayMonth : string = months[today.getMonth()];

//Today's day of week
console.log('Today\'s day of week: ' + today.getDay());
let todayDayOfWeek : string = days[today.getDay()];

//Today's day of month
console.log('Today\'s day of month: ' + today.getDate());

//Today's year
console.log('Today\'s day of year: ' + today.getFullYear());

//display today's date to page
pTodayDate.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate()}, ${ today.getFullYear()}`;


// Lee's method
let userBirthday : string;

let buttonBirthday = document.getElementById("button--birthday");
let inputDatePicker = document.getElementById("input--date-picker");
let pBirthdayMessage = document.getElementById("p--birthday-message");

buttonBirthday.onclick = function () {
    userBirthday = inputDatePicker.value;
    // console.log(userBirthday);
    let userBirthdayDate : Date = new Date(userBirthday + "GMT-0400");
    pBirthdayMessage.innerHTML = constructDateString(userBirthdayDate);
};

function constructDateString (inputDate : Date) : string {
    //return 'happy birthday if the user's birthday is today
    if ( (inputDate.getMonth() === today.getMonth()) && (inputDate.getDate() === today.getDate()) ) {
        return `Happy Birthday!`;
    }
    //return the day of the birthday of the current year
    let currentYearBirthday : Date = new Date(`${ today.getFullYear }-${ inputDate.getMonth() }-${ inputDate.getDate() }`);

    return `Your birthday is on ${ days[currentYearBirthday.getDay()] } ${ months[currentYearBirthday.getMonth()] } ${ currentYearBirthday.getDate() }, ${ currentYearBirthday.getFullYear() }`;
}