
let theDay;
document.getElementById('today').textContent = new Date().toLocaleString('en-us', {  weekday: 'long' });
document.getElementById('utc').textContent = new Date();

console.log(theDay)