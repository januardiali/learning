//section array
const arr = [5, 2, 4, 1, 3];

//sort
//arr.sort([compareFunction])
//compareFunction = (el1, el2)
//sort by index
arr.sort(function (a, b) {
  if (a < b) {
    // urutkan index a menjadi index yang lebih kecil dari index b
    // index < 0
    return -1;
  }
  if (a > b) {
    // urutkan index b menjadi index yg lebih besar dari index a
    // index > 0
    return 1;
  }
  // urutan a dan b tetap tetapi dengan catatan diurutkan dengan semua elemen yang berbeda
  //ex: ae, al
  return 0;
});
console.log(arr, "arr sort");

//filter
//arr.filter(callback(el, index, array))
// fungsi filter membuat array baru
const newArr = arr.filter((a) => a < 3);
console.log(newArr, "arr filter");
