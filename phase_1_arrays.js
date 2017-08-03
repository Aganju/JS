

Array.prototype.first = function () {
  return this[0];
};


Array.prototype.uniq = function () {
  uniqArr = [];
  for (i = 0; i < this.length; i++) {
    if (uniqArr.includes(this[i])) {
      continue;
    }
    else{
      uniqArr.push(this[i]);
    }
  }
  return uniqArr;
};

Array.prototype.twosum = function () {
  sumArr = [];
  for (i = 0; i < this.length - 1; i++) {
      for (j = i+1; j < this.length; j++) {
        if( (this[i] + this[j]) === 0 ){
            sumArr.push( [ i, j ] );
        }
      }
  }
  return sumArr;
};


Array.prototype.transpose = function () {
  transArr = [];
    for (i = 0; i < this[0].length; i++) {
      tempArr = [];
      for (j = 0; j < this.length; j++) {
        tempArr.push(this[j][i]);
      }
      transArr.push(tempArr);
    }
    return transArr;
};
