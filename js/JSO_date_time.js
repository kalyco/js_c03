var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:42')

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright & copy;' + year + '</p>';

var difference = today.getTime() - est.getTime(); //result will be in milliseconds
difference = (difference / 31556900000); //the number of milliseconds in a year.

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
