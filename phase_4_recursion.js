function range(start, end) {
  if (start === end)
  {
    return [end];
  }
  const upperRange = range(start + 1, end);
  upperRange.unshift(start);
  return upperRange;
}

function sumRec(arr) {
  if (arr.length === 1)
  {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp === 0) { return 1; }
  return base * exponent(base, (exp - 1));
}

function exponent2(base, exp) {
  if (exp === 0) { return 1; }
  if (exp === 1) { return base; }

  // if ((exp % 2) === 0) { return exponent2(base, (exp / 2))**2; }
  // return base * exponent2(base, ((exp -1)  / 2)) ** 2 ;
}

function fib(n) {
  if (n === 1) { return [0]; }
  if (n === 2) { return [0,1]; }

  const lowerFibs = fib(n-1);
  lowerFibs.push(lowerFibs.slice(-2)[0] + lowerFibs.slice(-1)[0]);
  return lowerFibs;
}



function bsearch(arr, target) {

  const mid = Math.floor(arr.length / 2);
  if (target === arr[mid]) {
    return mid;
  }

  if (arr.length <= 1) { return -1; }

  if (target < arr[mid]) { return bsearch(arr.slice(0, mid), target); }

  if (target > arr[mid]) {
    let top_index = bsearch(arr.slice(mid + 1, arr.length), target);

    if (top_index >= 0) { top_index += (mid + 1) ; }

    return top_index;

  }
}

function mergeSort(arr){
  if (arr.length <= 1){ return arr; }

  const mid = Math.floor(arr.length / 2);

  return arrMerge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function arrMerge(arr1, arr2){
  mergedArr = [];
  while(arr1.length != 0 && arr2.length != 0){
    mergedArr.push((arr1[0] <= arr2[0]) ? arr1.shift() : arr2.shift() );
  }

  return mergedArr.concat(arr1, arr2);

}

function subSets(arr){
  if (arr.length === 0) {return [[]]; }
  lowerSets = subSets(arr.slice(1));

  newSets = lowerSets.map( function (e){
    e.unshift(arr[0]);
    return e;
  });

  return lowerSets.concat(newSets);
}
