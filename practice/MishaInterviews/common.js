/*

Оплата за проживание в отеле

// Необходимо написать функцию расчета стоимости проживания посетителя в отеле
// Функция может принимать 2 аргумента
// 1. Количество ночей проживания в отеле (обязательный параметр)
// 2. Дата заселения (необязательный параметр). Если значение не указано, то отсчет ведется от текущего дня
// Стоимость проживания в будние дни (с понедельника по пятницу) стоит 1500 руб.
// Стоимость проживания в выходные дни (суббота, воскресенье) стоит 2200 руб.
*/

const prices = {
  weekday: 1500,
  holiday: 2200,
};

function bookingCalculate(days, date = new Date()) {
  let curDate = date;
  let price = 0;

  for (i = 0; i < nights; i++) {
    const dayNum = curDate.getDay();

    if (dayNum === 6 || dayNum === 0) {
      price += prices.holiday;
    } else {
      price += prices.weekday;
    }

    curDate.setDate(curDate.getDate() + 1);
  }

  return price;
}
console.log(bookingCalculate(7)); // 11900
console.log(bookingCalculate(3, new Date('2023-11-10'))); // 5900

const arr = [
  { type: 'banana', weight: 32 },
  { type: 'apple', weight: 24 },
  { type: 'kiwi', weight: 55 },
  { type: 'banana', weight: 44 },
  { type: 'orange', weight: 5 },
];

function groupByType(arr) {
  const map = new Map();

  for (const key of arr) {
    if (map.has(key.type)) {
      map.set(key.type, map.get(key.type) + key.weight);
    } else {
      map.set(key.type, key.weight);
    }
  }
  return map;
}

console.log(groupByType(arr));
