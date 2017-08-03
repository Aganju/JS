// Array.prototype.bubbleSort = function () {
//   sortArr = this.slice();
//   for (i = 0; i < sortArr.length - 1; i++) {
//       for (j = 0; j < (sortArr.length - i); j++) {
//         if( sortArr[j] > sortArr[j + 1] )
//         {
//           temp =  sortArr[j];
//           sortArr[j] = sortArr[j+1];
//           sortArr[j+1] = temp;
//         }
//       }
//   }
//   return sortArr;
// };

String.prototype.subStrings = function () {
  stringArr = this.split('');
  subsArr = [];

  for (i = 0; i < stringArr.length; i++) {
      for (j = i; j < stringArr.length; j++) {
        subsArr.push( stringArr.slice(i, j + 1).join('') );
      }
  }
  return subsArr;
};
