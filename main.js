// Bài 5
document.getElementById("btntinhfast").onclick = function () {
  // đầu vào
  var day = +document.getElementById("day").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;

  // Xử lý

  var songay = "";
  if (day == 1) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: {
        songay = "31";
        break;
      }
      case 4:
      case 6:
      case 9:
      case 11: {
        songay = "30";
        break;
      }
      default: {
        songay = "28";
      }
    }
    if (month == 1) {
      month == 12;
    } else {
      month--;
    }
  } else {
    day--;
  }

  document.getElementById("showIntoday").innerHTML =
    "Ngày: " + day + "Tháng: " + month + "Năm: " + year;
};
// Ngày Hôm Qua

document.getElementById("btntinhfure").onclick = function () {
  // Đầu vào
  var day = +document.getElementById("day").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;

  // Xử Lý

  var songay = "";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      songay = "31";
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      songay = "30";
      break;
    }
    default: {
      songay = "28";
    }
  }

  // Ngày mai
  ngaymai = (day % songay) + 1;
  if (day == 1) {
    month = (month % 12) + 1;
  }
  // Đầu ra
  document.getElementById("showIntoday").innerHTML =
    "Ngày: " + ngaymai + "Tháng: " + month + "Năm: " + year;
};

// Bài 6

document.getElementById("btntinhyear").onclick = function () {
  // Đầu vào
  var thang = +document.getElementById("thang").value;
  var year2 = +document.getElementById("year2").value;

  // Xử Lý

  var ngay = "";

  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      ngay = "31";
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      ngay = "30";
      break;
    }
    default: {
      if ((year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0) {
        ngay = "29";
      } else ngay = "28";
    }
  }
  // Đầu ra
  document.getElementById("showInyear").innerHTML =
    "Tháng: " + thang + " Năm: " + year2 + " Có: " + ngay + " Ngày";
};

// Bài 7

document.getElementById("btntinhread").onclick = function () {
  // Đầu vào
  var number = +document.getElementById("number").value;

  // Xử lý

  var donvi = number % 10;
  var hangchuc = Math.floor((number % 100) / 10);
  var hangtram = Math.floor(number / 100);

  switch (hangtram) {
    case 1:
      hangtram = "Một Trăm ";
      break;
    case 2:
      hangtram = "Hai Trăm";
      break;
    case 3:
      hangtram = "Ba Trăm";
      break;
    case 4:
      hangtram = "Bốn Trăm";
      break;
    case 5:
      hangtram = "Năm Trăm";
      break;
    case 6:
      hangtram = "Sáu Trăm";
      break;
    case 7:
      hangtram = "Bảy Trăm";
      break;
    case 8:
      hangtram = "Tám Trăm";
      break;
    case 9:
      hangtram = "Chín Trăm";
      break;
    default:
      hangtram = "Không Xác Định";
  }

  switch (hangchuc) {
    case 1:
      hangchuc = "Mươi";
      break;
    case 2:
      hangchuc = "Hai Mươi";
      break;
    case 3:
      hangchuc = "Ba Mươi";
      break;
    case 4:
      hangchuc = "Bốn Mươi";
      break;
    case 5:
      hangchuc = "Năm Mươi";
      break;
    case 6:
      hangchuc = "Sáu Mươi";
      break;
    case 7:
      hangchuc = "Bảy Mươi";
      break;
    case 8:
      hangchuc = "Tám Mươi";
      break;
    case 9:
      hangchuc = "Chín Mươi";
      break;
    default:
      hangchuc = "";
      alert("Hàng Chục Không Xác Định: " + hangchuc);
  }

  switch (donvi) {
    case 1:
      donvi = "Một";
      break;
    case 2:
      donvi = "Hai";
      break;
    case 3:
      donvi = "Ba";
      break;
    case 4:
      donvi = "Bốn";
      break;
    case 5:
      donvi = "Năm";
      break;
    case 6:
      donvi = "Sáu";
      break;
    case 7:
      donvi = "Bảy";
      break;
    case 8:
      donvi = "Tám";
      break;
    case 9:
      donvi = "Chín";
      break;
    default:
      donvi = "";
      alert("Hàng Đơn Vị Không Xác Định:" + donvi);
  }
  // Đầu ra
  document.getElementById("showInread").innerHTML = hangtram + hangchuc + donvi;
};

// Bài 8

document.getElementById("btntinhlost").onclick = function () {
  // Đầu vào
  // Tọa độ và tên sinh viên 1
  var name1 = document.getElementById("name1").value;
  var x1 = +document.getElementById("x1").value;
  var y1 = +document.getElementById("y1").value;

  // Tọa độ và tên sinh viên 2
  var name2 = document.getElementById("name2").value;
  var x2 = +document.getElementById("x2").value;
  var y2 = +document.getElementById("y2").value;

  // Tọa độ và tên sinh viên 3
  var name3 = document.getElementById("name3").value;
  var x3 = +document.getElementById("x3").value;
  var y3 = +document.getElementById("y3").value;

  // Tọa Độ của Trường Học
  var x4 = +document.getElementById("x4").value;
  var y4 = +document.getElementById("y4").value;

  // Xử Lý
  // Tính Khoản cách sinh viên
  var sv1 = 0;
  var sv2 = 0;
  var sv3 = 0;
  var toado = "";

  // Công thức tính
  /* Sinh viên 1 (sv1) */
  sv1 = Math.floor((x4 - x1) * (x4 - x1) + (y4 - y1) * (y4 - y1));
  /* Sinh viên 2 (sv2) */
  sv2 = Math.floor((x4 - x2) * (x4 - x2) + (y4 - y2) * (y4 - y2));
  /* Sinh viên 3 (sv3) */
  sv3 = Math.floor((x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3));

  // so sánh độ dài đoạn thẳng của 3 sinh viên tới trường
  if (sv1 > sv2 && sv1 > sv3) {
    toado = "Sinh viên Xa trường nhất: " + name1;
  } else if (sv2 > sv3 && sv2 > sv1) {
    toado = "Sinh viên Xa trường nhất: " + name2;
  } else {
    toado = "Sinh viên Xa trường nhất: " + name3;
  }

  // Đầu ra
  document.getElementById("showInlost").innerHTML = toado;
};
