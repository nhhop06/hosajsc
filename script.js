/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
function maxOfThree(a, b, c) {
  if (a >= c && a >= b) {
    return a;
  } else if (c >= b && c >= a) {
    return c;
  } else if (b >= c && b >= a) {
    return b;
  }
}

console.log(maxOfThree(4, 2, 1));
console.log(maxOfThree(1, 3, 6));
console.log(maxOfThree(6, 6, 6));

console.log("_________________________");
/**
 * Tìm mùa tương ứng với tháng
 *
 * - Winter (mùa đông): 12, 1, 2
 * - Spring (mùa xuân): 3, 4, 5
 * - Summer (mùa hạ): 6, 7, 8
 * - Fall (mùa thu): 9, 10, 11
 *
 * @param {number} month Tháng trong năm
 *
 * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
 */
//function findSeason(month) {}

function findSeason(month) {
  switch (month) {
    case "12, 1, 2":
      return "Mùa Xuân";
    case "3, 4, 5":
      return "Mùa Hạ";
    case "6, 7, 8":
      return "Mùa Thu";
    case "9, 10, 11":
      return "Mùa Đông";
  }
}

console.log(findSeason("12, 1, 2"));
console.log(findSeason("3, 4, 5"));
console.log(findSeason("6, 7, 8"));
console.log(findSeason("9, 10, 11"));

console.log("_________________________");
/**
 * Kiểm tra xem một năm có phải năm nhuận hay không
 *
 * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không
 * chia hết cho `100`,
 * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận
 * nếu nó cũng chia hết cho `400`
 *
 * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
 * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
 * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
 *
 * @param {number} year Năm bất kỳ
 *
 * @return {boolean} Năm này có phải năm nhuận hay không
 */
function isLeafYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return "Đây Là Năm Nhuận";
  } else if (year % 100 == 0 && year % 400 == 0) return "Đây Là Năm Nhuận";
  else {
    return "Đây Không Phải Là Năm Nhuận";
  }
}
console.log(isLeafYear(2000));
console.log(isLeafYear(2001));
console.log(isLeafYear(2400));
console.log(isLeafYear(2022));

console.log("_________________________");
/**
 * Tìm số ngày trong tháng
 *
 * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
 * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
 * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
 *
 * @param {number} month Tháng bất kỳ
 * @param {number} year Năm bất kỳ
 *
 * @return {number} Số ngày trong tháng đó
 */
function findDayOfMonth(year, month) {
  if (
    ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0),
    (month = "2"))
  ) {
    return "Trong năm " + year + "(nhuận) Tháng " + month + " Có 29 ngày";
  } else if ((year, month = "Jan", "Mar", "May", "Jul", "Aug", "Otc", "Dec")) {
    return "Trong năm " + year + " Tháng " + month + "Có 31 ngày";
  } else if (year, month = "Feb", "Apr", "Jun", "Sep", "Nov") {
    return "Trong năm " + year + " Tháng " + month + "Có 30 ngày";
  }
}
console.log(findDayOfMonth(2020, "2"))


console.log("__________________________");
/**
 * Xếp loại sinh viên theo số điểm trung bình
 *
 * @param {number} point Điểm trung bình của sinh viên
 *
 * @return {'A'10 | 'B'8.5 | 'C'7.0 | 'D'5.5 | 'F'4.0} Xếp hạng tốt nghiệp của sinh viên
 */
function calcGrade(point) {
  if (point <= 10 && point >= 8.5) {
    return "A";
  } else if (point <= 8.4 && point >= 7.0) return "B";
  else if (point <= 6.9 && point >= 5.5) return "C";
  else if (point <= 5.4 && point >= 4.0) return "D";
  else {
    return "F";
  }
}
console.log(calcGrade(5));
console.log(calcGrade(9.2));
console.log(calcGrade(3.1));
console.log(calcGrade(7.9));
console.log(calcGrade(0));

console.log("__________________________");

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */
function calcTaxiFee(km) {
  km = Math.round(km);
  let feeByRange;
  {
    if (km <= 30) {
      feeByRange = km * 11000;
      return "Quý khách đã đi hết " + km + "km" + " Với giá " + feeByRange;
    } else if (km >= 31) {
      feeByRange = 30 * 11000 + (km - 30) * 9500;
      return "Quý khách đã đi hết " + km + "km" + " Với giá " + feeByRange;
    } else if (setTimeout) {
      fistDrive = km * 10000;
      return;
    }
  }
}
console.log(calcTaxiFee(9));
console.log(calcTaxiFee(32));
console.log(calcTaxiFee(90)); //fistDrive
/**
 * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
 *
 * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
 * - Nếu phương trình vô nghiệm thì trả về `null`
 * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
 * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
 *
 * @param {number} a Tham số a
 * @param {number} b Tham số b
 * @param {number} c Tham số c
 *
 * @return {number | [number, number] | null} Nghiệm phương trình
 */
function solveEquation(a, b, c) {}
