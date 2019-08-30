import React, { useState, useEffect } from "react";
import HeatMap, { Style } from "jsheatmap";  //eslint-disable-line no-unused-vars
import Headings from './Headings';
import dsParser from './datasets/dsParser';

const background = (rgb) => `rgb(${rgb.red * 100}%, ${rgb.green * 100}%, ${rgb.blue * 100}%)`;

const Cols = ({ cells }) => {
  return cells.colors.map((c, i) => <td key={i}>
    <div style={{ background: background(c), height: '40px', width: '40px' }}>
      <span style={{ fontSize: '0.6em' }}>{cells.values[i].toFixed(1)}</span>
    </div>
  </td>);
}

const Rows = ({ rows }) =>
  rows.map((row, i) => <tr key={row.label}>
    <td>{row.label}</td><Cols cells={row.cells} />
  </tr>
  );

const PlayerRadio = ({ players, value, setPlayers }) => {
  return <label style={{ marginRight: "10px" }}>
    <input type="radio" name="players"
      value={value} defaultChecked={players === value}
      onClick={(e) => setPlayers(parseInt(e.target.value))}></input>
    {value}</label>;
}

const SuitedRadio = ({ value, checked, setSuited }) => {
  return <label style={{ marginRight: "10px" }}>
    <input type="radio" name="suited"
      value={value} defaultChecked={checked}
      onClick={(e) => setSuited(e.target.value === "suited")}></input>
    {value}</label>;
}

const PlayersRow = (props) => {
  return <div className="row">
    <div className="column" style={{ alignItems: "center" }}>
      <div className="row">
        Players:
      </div>
      <div className="row" style={{ marginLeft: "30%" }}>
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => <PlayerRadio {...{ value, ...props }} key={value} />)}
      </div>
    </div>
  </div>
}

const SuitedRow = ({ setSuited, setTies }) =>
  <div className="row">
    <div className="column">
      <SuitedRadio value="suited" setSuited={setSuited} />
      <SuitedRadio value="unsuited" setSuited={setSuited} checked={true} />
    </div><div className="column">
      <Ties {...{ setTies }} />
    </div>
  </div>

const Ties = ({ setTies }) =>
  <label><input type='checkbox' onClick={(e) => setTies(e.target.checked)}></input>Include Ties</label>

const HeatMapRow = ({ data }) => <div className="row">
  <div className="column">
    <table>
      <tbody>
        <Headings headings={data.headings} />
        <Rows rows={data.rows} />
      </tbody>
    </table>
  </div>
</div>


const getNewData = (players, suited, ties) => {
  const { headings, rows } = dsParser(players, suited, ties);

  const heatMap = new HeatMap(headings, rows);
  const data = heatMap.getData();
  return data;
}

const HeatMapTable = () => {
  const [players, setPlayers] = useState(2);
  const [suited, setSuited] = useState(false)
  const [ties, setTies] = useState(false)
  const [data, setData] = useState(getNewData(players, suited, ties))

  useEffect(() => {
    // console.log({ players, suited, ties })
    const data = getNewData(players, suited, ties);
    // console.log(data.rows)
    setData(data)
  }, [players, suited, ties])


  return <div>
    <PlayersRow {...{ players, setPlayers }} />
    <br></br>
    <SuitedRow {...{ setSuited, setTies }} />
    <br></br>
    <HeatMapRow data={data} />
  </div>
}

export default HeatMapTable;
