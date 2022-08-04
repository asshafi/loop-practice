// for (var i = 1; i <= 20; i++){
//     console.log(i);
//     if (i > 10) {
//         continue;
//     }
// }
var numbers = [23, 45, 68, 86, 54, 7, 48, 87, 245, 24, 879];
for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}