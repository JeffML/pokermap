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

const getCells = (set, card) => {
  const row = [];
  set.forEach(s => {
    const { pair, wins } = s;
    const [c1, c2, suited] = pair.split('')
    if (c1 === card && !suited) {   //FIXME need to handle suited
      const i = headings.indexOf(c2);
      row[i] = parseFloat(wins)
    }
    if (c2 === card && !suited) {   //FIXME need to handle suited
      const i = headings.indexOf(c1);
      row[i] = parseFloat(wins)
    }
  })
  return row;
}

const getDataSet = (p) => {
  const set = sets[p];
  const rows = new Array(headings.length)

  headings.forEach((card, i) => {
    rows.push([card, getCells(set, card)])
  });

  return { headings, rows }
}

export default getDataSet;