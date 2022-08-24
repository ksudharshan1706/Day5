const arr = ['carecar', 12321, 'did', 'cannot','madam','malayalam',12345];
function isPalindrome(str1){
   const str = String(str1);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};

const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));