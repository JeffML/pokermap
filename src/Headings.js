import React from "react"
const Headings = ({ data }) => {
  const titles = () => data.map(h => <th key={h}>{h}</th>)
  return (<tr><th></th>{titles()}</tr>);
}

export default Headings;