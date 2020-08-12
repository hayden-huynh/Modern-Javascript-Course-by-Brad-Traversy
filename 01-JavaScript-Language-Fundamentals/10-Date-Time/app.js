let val;

const today = new Date(); // Default constructor returns today's date
let birthday = new Date('4-30-1975 11:25:00'); // Month-Date-Year Hour-Minute-Second
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today;
// val = birthday;
val = today.getMonth(); // Month counting starts from 0 i.e. Jan = 0, Feb = 1 and so on
val = today.getDate();
val = today.getDay(); // Sun = 0, Mon = 1, Tue = 2 and so on
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Number of milliseconds since 1 Jan 1970 00:00:00
console.log(val);

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1989);
birthday.setHours(13);
birthday.setMinutes(34);
birthday.setSeconds(7);
console.log(birthday);