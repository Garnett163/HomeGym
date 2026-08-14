class EventEmitter {
  constructor() {
    this.container = new Map();
    // Пример структуры после подписок:
    // Map {
    //   'event' => [cb1, cb2],
    //   'click' => [обработчик1, обработчик2],
    //   'load' => [функция1]
    // }
  }

  on(event, cb) {
    if (!this.container.has(event)) {
      this.container.set(event, []);
    }

    this.container.get(event).push(cb);
    return this; // для цепочки вызовов
  }

  off(event, cb) {
    if (this.container.has(event)) {
      const callbacks = this.container.get(event).filter(callback => callback !== cb);
      this.container.set(event, callbacks);
    }
    return this;
  }

  emit(event) {
    if (this.container.has(event)) {
      this.container.get(event).forEach(cb => cb());
    }
    return this;
  }
}

const emitter = new EventEmitter();

const cb1 = () => console.log('cb1');
const cb2 = () => console.log('cb2');

emitter
  .on('event', cb1) // подписка на коллбэк cb1 на событие 'event'
  .on('event', cb2) // cb2
  .emit('event') // срабатывание события 'event' cb1 и cb2
  .off('event', cb2) // отписка коллбэка cb2 от событие 'event'
  .emit('event'); // cb1

function maxPossibleSum(arr) {
  const negatives = arr.filter(item => item < 0).length;

  const sorted = arr
    .map(i => Math.abs(i))
    .sort((a, b) => a - b)
    .slice(0, negatives);

  const sumSorted = sorted.reduce((acc, value) => acc + value, 0);
  const sumArray = arr.reduce((acc, value) => acc + Math.abs(value), 0);

  console.log(sumSorted);
  console.log(sumArray);

  return sumArray - sumSorted * 2;
}
console.log(maxPossibleSum([-2, 1, -4, 5])); // 6

const arr = [5, 2, 9, 1, 7];

const min = Math.min(...arr); // 1
const max = Math.max(...arr); // 9

console.log(min, max);

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }
  return result;
}

console.log(deepCopy({ a: 1, b: 2, c: { d: { e: 5 } } }));
console.log(deepCopy([{ a: 1, b: 2 }, [3, 4]]));
