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
  /* urutan a dan b tetap tetapi dengan catatan diurutkan dengan 
  semua elemen yang berbeda*/
  //ex: ae, al
  return 0;
});
console.log(arr, "arr sort");

//filter
//arr.filter(callback(el, index, array))
// fungsi filter membuat array baru
const newArr = arr.filter((a) => a < 3);
console.log(newArr, "arr filter");

//splice
/* fungsi yg merubah kumpulan item (array) dengan cara membuang (removing) 
atau mengganti elemen yg sudah ada atau menambahkannya */
//splice removing
//array.splice(start(index), deleteCount, element)
const months = ["Jan", "March", "April", "June"];
//splice adding
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months, "arr splice adding");
//splice replacing
months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months, "arr splice replacing");
//splice removing
months.splice(4, 1);
// replaces 1 element at index 4
console.log(months, "arr splice removing");

//slice
//arr.slice(start, end)
/* fungsi dimana mengembalikan sebuah salinan dangkal dari
sebagian array ke array yang baru dipilih dari awal hingga akhir
(akhir tidak termasuk). dimana awal dan akhir mewakili index item didalam
array. Array asli tidak akan dimodifikasi. */
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = animals.slice(2);
console.log(newAnimals, "slice array dari index 2 hingga panjang array");
const newAnimals2 = animals.slice(2, 4);
console.log(newAnimals2, "slice array dari index 2 hingga 4");
console.log(animals, "array asli tidak berubah");
