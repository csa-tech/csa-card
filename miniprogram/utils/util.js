<<<<<<< HEAD
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
=======
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
>>>>>>> dd3fbad792b3f2b37ca4af6ed7f40cd9e0adfdd7

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

<<<<<<< HEAD
const formatNumber = n => {
=======
function formatNumber(n) {
>>>>>>> dd3fbad792b3f2b37ca4af6ed7f40cd9e0adfdd7
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
<<<<<<< HEAD
}
=======
}
>>>>>>> dd3fbad792b3f2b37ca4af6ed7f40cd9e0adfdd7
