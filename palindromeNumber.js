// primitive solution
function palindrome(num) {
 const str = num.toString();
 if (str.split('').reverse().join('') === str) {
  return true
 } else {
  return false
 }
}

// great solution
function palindrome(num) {
  let reversed = 0;
  let copy = num;

  while (copy > 0) {
    const digit = copy % 10;
    reversed = reversed * 10 + digit;
    copy = Math.floor(copy/10)
  }

  return reversed === num;
 }