import win2 from './winning2.js'
import win3 from './winning3.js'
import win4 from './winning4.js'
import win5 from './winning5.js'
import win6 from './winning6.js'
import win7 from './winning7.js'
import win8 from './winning8.js'
import win9 from './winning9.js'
import win10 from './winning10.js'

//eslint-disable-next-line no-sparse-arrays
const sets = [, , win2, win3, win4, win5, win6, win7, win8, win9, win10];
const headings = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']

const getCells = (set, card, suited, includeTies) => {
  const row = [];
  set.forEach(s => {
    const { pair, wins, ties } = s;
    const [c1, c2, isSuited] = pair.split('')

    const include = suited ? isSuited || c1 === c2 : !isSuited
    const fTies = includeTies ? parseFloat(ties) : 0.0
    const value = parseFloat(wins) + fTies

    if (c1 === card && include) {
      const i = headings.indexOf(c2);
      row[i] = value
    }
    if (c2 === card && include) {
      const i = headings.indexOf(c1);
      row[i] = value
    }
  })
  return row;
}

const getDataSet = (players, suited, ties) => {
  const set = sets[players];
  const rows = []

  headings.forEach((card) => {
    rows.push([card, getCells(set, card, suited, ties)])
  });

  return { headings, rows }
}

export default getDataSet;