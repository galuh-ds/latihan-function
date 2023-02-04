function luaspersegipanjang(
  a = "4.diketahui persegi panjang, panjang : 10, ",
  b = "lebar : 4. ",
  c = "<br> maka,luas perseginya adalah = "
) {
  const hasil = a + b + c;
  return hasil;
}
document.write(luaspersegipanjang());

function hitungluaspersegipanjang(a = 10, b = 4, c = 6) {
  const hasil = a + b + c;
  return hasil;
}
document.write(hitungluaspersegipanjang());
document.write("<br><br>");
//-----------------------------------

function volumedanluaspermukaanbalok(
  w = "5.diketahui sebuah balok dengan, panjang : 10, ", x = "lebar : 5, ",y = 'tinggi : 5, ',
   z = "<br> maka,hitunglah  volume dan luas permukaan balok ? "
) {
  const hasil =w + x + y + z
  return hasil;
}
document.write(volumedanluaspermukaanbalok());
document.write("<br><br>");
//------------------------------------

function hitungvolumebalok(g ='volume balok= ',a = 10, b = 5, c = 5) {
    const hasil = g+ (a + b) * c 
    return hasil;
  }
  document.write(hitungvolumebalok());
  document.write("<br><br>");
//  
//------------------------------------------------
  function hitungpermukaanbalok(g ='permukaan balok= ',a = 10, b = 5, c = 5, d = 2) {
    const hasil = g+ (a + b + c )*d
    return hasil;
  }
  document.write(hitungpermukaanbalok());
  document.write("<br><br>");
