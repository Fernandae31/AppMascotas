let currentDateTime = new Date();
let year = currentDateTime.getFullYear();
let month = (currentDateTime.getMonth() + 1);
let date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

let dateTomorrow = year + "-" + month + "-" + date;
let checkinElem = document.querySelector("#checkin-date");
let checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}