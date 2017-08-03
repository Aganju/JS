Array.prototype.myEach = function (callback) {
    for (i = 0; i < this.length; i++) {
      callback(this[i]);
    }
};

Array.prototype.myMap = function (callback) {
  const mapArr = [];
  this.myEach( function (e) {
    mapArr.push(callback(e));
  });
  return mapArr;
};

Array.prototype.myReduce = function (callback, initialValue) {

  let acc = this[0];
  let i = 1;

  if (initialValue){
    acc = initialValue;
    i = 0;
  }

  this.slice(i).myEach( function (e) {
    acc = callback(acc, e);
  });
  return acc;
};
