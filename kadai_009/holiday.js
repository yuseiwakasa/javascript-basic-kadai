// 祝日の宣言と値の代入
const holiDays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// for文で祝日の出力
for (let i = 0; i <= 15; i++) {
  console.log(holiDays[i]);
}

i = 0;

// whileでの出力
while (i < holiDays.length) {
  console.log(holiDays[i]);
  i++;
}