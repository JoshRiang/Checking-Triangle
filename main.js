window.onload = () => {
  var sisiKiri = document.getElementById("sisi-kiri");
  var sisiKanan = document.getElementById("sisi-kanan");
  var sisiBawah = document.getElementById("sisi-bawah");

  sisiKiri.addEventListener("keyup", () => {
    car(sisiKiri.value, sisiKanan.value, sisiBawah.value);
  });
  sisiKanan.addEventListener("keyup", () => {
    car(sisiKiri.value, sisiKanan.value, sisiBawah.value);
  });
  sisiBawah.addEventListener("keyup", () => {
    car(sisiKiri.value, sisiKanan.value, sisiBawah.value);
  });

  function car(kiri, kanan, bawah) {
    if (kiri >= kanan + bawah || kanan >= kiri + bawah || bawah >= kiri + kanan) {
      $("#hasilnya").text("Bukan Segitiga");
    } else {
      if (kiri == kanan && kanan == bawah) {
        $("#hasilnya").text("Segitiga Sama Sisi");
      } else if (kiri == kanan || kanan == bawah || kiri == bawah) {
        $("#hasilnya").text("Segitiga Sama Kaki");
      } else {
        $("#hasilnya").text("Segitiga Sembarang");
      }
    }
  }
};
