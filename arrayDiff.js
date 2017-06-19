function array_diff(a, b) {
console.log(a);
    if (a == "") {
    return [];
    }
 var newArr = a.concat(b);
 
 var empty = [];

  function check(item) {

    if (a.indexOf(item) === -1 || b.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}