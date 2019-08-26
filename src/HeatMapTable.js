import React, { useState } from "react";
import HeatMap, { Style } from "jsheatmap";
// import { getHeadings, getLabels, getValues } from "./dataSet1"
import { getHeadings, getLabels, getValues } from "./dataSet2"
import Headings from './Headings';


const headings = getHeadings()
const labels = getLabels()
const values = getValues()
// console.dir({ labels, values }, { depth: 3 })

const input = labels.map((label, i) => [label, values[i]])


// console.dir(input, { depth: 3 })
const heatMap = new HeatMap(headings, input);

// const data = heatMap.getData({ style: Style.SIMPLE });
const data = heatMap.getData();
// console.log(JSON.stringify(data, null, 2))

const background = (rgb) => {
  return `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;
}

const cols = cells => {
  return cells.colors.map((c, i) => <td key={i}>
    <div style={{ background: background(c), height: '40px', width: '40px' }}>
      <span style={{ fontSize: '0.6em' }}>{cells.scales[i].toFixed(1)}</span>
    </div>
  </td>);
}

const Rows = () =>
  data.rows.map((row, i) => <tr key={row.label}>
    <td>{row.label}</td>{cols(row.cells)}
  </tr>
  );

const HeatMapTable = () =>
  <table>
    <tbody>
      <Headings data={data.headings} />
      <Rows />
    </tbody>
  </table>

export default HeatMapTable;
