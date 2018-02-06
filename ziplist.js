function zipList(list1, list2) {
  let sum = list1.length + list2.length;
  let concat = [sum];
  let l1Mark = 0;
  let l2Mark = 0;
  for (let i = 0; i < sum; i++) {
    if(i % 2 == 0) {
      concat[i] = list1[l1Mark];
      l1Mark++;
    } else {
      concat[i] = list2[l2Mark];
      l2Mark++;
    }
  }
  return concat;
}

console.log(zipList([1,2], ["a","b"]));

function zipListTheSimpleWay(list1, list2) {
  let zipped = _.zip(list1, list2);
  return _.flatten(zipped);
}

console.log(zipListTheSimpleWay([1,2], ["a","b"]));
