//enums
enum months {
    January = 1,    //set the first one by value, others will be automatically increase number
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
let pTodayDate = document.getElementById("p--today-date");

//Today's day
// let today = Date.now();
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
//inside {} is js, and outside {} is array
pTodayDate.innerHTML = `Today is ${ todayDayOfWeek }, ${ todayMonth } ${ today.getDate()}, ${ today.getFullYear()}`;