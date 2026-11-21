const url = 'https://example.com/page?name=Alex&age=25&name=John&city=Moscow';

function parseUrl(path) {
  const queryMap = {
    url: '',
    query: {},
  };
  const start = path.indexOf('/page');
  const end = path.indexOf('?');

  const getPageString = path.slice(start, end);

  queryMap.url = getPageString;

  const getQueryString = path.slice(end + 1, path.length);

  const splitQuery = getQueryString.split('&');

  for (const item of splitQuery) {
    const splitItem = item.split('=');
    console.log(splitItem);
    if (!queryMap.query[splitItem[0]]) {
      queryMap.query[splitItem[0]] = splitItem[1];
    } else if (Array.isArray(queryMap.query[splitItem[0]])) {
      queryMap.query[splitItem[0]].push(splitItem[1]);
    } else {
      queryMap.query[splitItem[0]] = [queryMap.query[splitItem[0]], splitItem[1]];
    }
  }
  // console.log(queryMap);
  return queryMap;
}

console.log(parseUrl(url));
//   {
//   url: '/page',
//   query: {
//     name: ['Alex', 'John'],
//     age: '25',
//     city: 'Moscow'
//   }
// }

const randomTickets = [
  { from: 'Краснодар', to: 'Москва' },
  { from: 'Пятигорск', to: 'Краснодар' },
  { from: 'Калининград', to: 'Челябинск' },
  { from: 'Челябинск', to: 'Астана' },
  { from: 'Москва', to: 'Калининград' },
];

const tickets = [
  { from: 'Пятигорск', to: 'Краснодар' },
  { from: 'Краснодар', to: 'Москва' },
  { from: 'Москва', to: 'Калининград' },
  { from: 'Калининград', to: 'Челябинск' },
  { from: 'Челябинск', to: 'Астана' },
];

function sortTickets(tickets) {
  const map = {};
  const destinations = new Set();
  let startCity;

  for (let i = 0; i < tickets.length; i++) {
    const curr = tickets[i];

    map[curr.from] = curr.to;
    destinations.add(curr.to);
  }

  for (let i = 0; i < tickets.length; i++) {
    const curr = tickets[i];

    if (!destinations.has(curr.from)) {
      startCity = curr.from;
    }
  }

  const filteredCities = [];

  while (map[startCity]) {
    filteredCities.push({ from: startCity, to: map[startCity] });
    startCity = map[startCity];
  }

  // console.log(startCity);
  // console.log(destinations);
  // console.log(map);

  return filteredCities;
}

console.log(sortTickets(tickets));
console.log(sortTickets(randomTickets));

function fetchWithRetries(retriesCount, ...fetchArgs) {
  let currCount = 0;

  async function responseFetch() {
    currCount++;
    try {
      const response = await fetch(...fetchArgs);
      if (!response.ok) {
        throw new Error('response failed');
      }
      return response.json();
    } catch {
      if (currCount < retriesCount) {
        return responseFetch();
      } else {
        throw new Error('No attemps left');
      }
    }
  }

  return responseFetch(...fetchArgs);
}
