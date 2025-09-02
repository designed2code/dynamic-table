import React, { useState } from "react";

export const GenerateTable = () => {
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const rowsArr = rows && new Array(rows).fill(0);
  const colsArr = columns && new Array(columns).fill(0);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const rowValue = data.get("rows");
          const colValue = data.get("columns");
          if (!rowValue || !colValue) {
            alert("Invalid Value");
          }
          setRows(Number(rowValue));
          setColumns(Number(colValue));
        }}
      >
        <label htmlFor="rows">Rows</label>
        <input type="number" name="rows" id="rows" min={1} />
        <br />

        <label htmlFor="columns">Columns</label>
        <input type="number" name="columns" id="columns" min={1} />
        <br />

        <button type="submit">Submit</button>
      </form>
      <div className="tableContainer">
        {Boolean(rows) && Boolean(columns) && (
          <table className="table">
            <tbody>
              {rowsArr?.map((_, row) => (
                <tr key={row}>
                  {colsArr?.map((_, col) => (
                    <td key={col}>
                      {col % 2 === 0
                        ? rows * col + (row + 1)
                        : rows * (col + 1) - row}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
