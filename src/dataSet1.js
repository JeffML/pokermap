import casual from "casual-browserify";

const ROWS = 20;
const COLS = 20;

const getHeadings = () => [...Array(COLS).keys()]

const getLabels = (count = ROWS) => {
  const set = new Set()
  for (let i = 0; i < count; i++) {
    set.add(casual.word)
  }
  return Array.from(set);
}

const getValues = (ycount = ROWS, count = COLS) => {
  const arr = new Array(ycount).fill().map(e => []);
  for (let y = 0; y < ycount; y++) {
    for (let i = 0; i < count; i++) {
      arr[y].push(y + i)
    }
  }
  return arr;
}

export { getHeadings, getLabels, getValues }