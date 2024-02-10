let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2004, 6, 5) //in this month, january is 00 and february is 01
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date("05-07-2004")
console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000)) //in this method answer is in milli seconds, now if we want to convert it into seconds, then we will devide the number by 1000

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
