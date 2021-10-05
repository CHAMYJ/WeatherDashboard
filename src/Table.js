import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.slice(0, 30).map((c) => (
        <tr>
          <td>{c.date}</td>
          <td>{c.forecast}</td>
          <td>
            <strong>{c.temperature_high}</strong>
          </td>
          <td>
            <strong>{c.temperature_low}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
