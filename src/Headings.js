import React from "react"
const Headings = ({ headings }) => {
  const titles = () => headings.map(h => <th key={h}>{h}</th>)
  return (<tr><th></th>{titles()}</tr>);
}

export default Headings;