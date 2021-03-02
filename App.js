var log = require('log-update');
module.exports = (str,speed) => {
if(!(str&&speed)) throw Error('Please enter the message and the speed correctly')
var i = 0,
fin = '',
interval = setInterval(() => {
if(i==str.length) clearInterval(interval)
else {
fin = fin+str.charAt(i)
log(fin)
i++
}},speed);
}
