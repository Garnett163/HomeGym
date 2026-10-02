const prices = {
  weekday: 1500,
  holiday: 2200,
};

function bookingCalculate(days, date = new Date()) {
  let curDate = date;
  let price = 0;

  for (i = 0; i < days; i++) {
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

const data = [
  { id: 1, age: 20, name: 'Иван', country: 'Russia' },
  { id: 2, age: 20, name: 'Дмитрий', country: 'USA' },
  { id: 3, age: 20, name: 'Алексей', country: 'Russia' },
  { id: 4, age: 20, name: 'Александр', country: 'USA' },
  { id: 5, age: 20, name: 'Иван', country: 'Russia' },
];

const groupCountries = data => {
  const map = {};

  for (let i = 0; i < data.length; i++) {
    const curr = data[i];

    if (!map[curr.country]) {
      map[curr.country] = {};
    }

    const { id, ...withoutId } = curr;

    map[curr.country][curr.id] = withoutId;
  }
  return map;
};

console.log(groupCountries(data));

const players = [
  { id: 2, squad: 1 },
  { id: 3, squad: 1 },
  { id: 4, squad: null },
  { id: 5, squad: 2 },
  { id: 6, squad: 1 },
  { id: 7, squad: 2 },
];

const groupPlayersBySquad = players => {
  const playersWithSquad = [];
  const playersWithoutSquad = [];

  for (const player of players) {
    if (player.squad !== null) {
      playersWithSquad.push(player);
    } else {
      playersWithoutSquad.push(player);
    }
  }

  return [playersWithSquad, playersWithoutSquad];
};

const [playersWithSquad, playersWithoutSquad] = groupPlayersBySquad(players);

console.log(playersWithSquad, playersWithoutSquad);
