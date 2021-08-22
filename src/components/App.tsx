import { useState } from "react";
import timeTable from "../data/timetable";
import "../styles/styles.scss";
import TimeTable from "./TimeTable";

export default function App() {
  const [hyperlegible, setHyperlegible] = useState(false);
  const [border, setBorder] = useState(true);
  const [fontSize, setFontSize] = useState(7);
  const [data, setData] = useState(timeTable);

  return (
    <>
      <div className="controls">
        <p>
          <input
            id="hyperlegible"
            type="checkbox"
            checked={hyperlegible}
            onChange={(e) => setHyperlegible(e.target.checked)}
          />
          <label htmlFor="hyperlegible">Hyperlegible font</label>
        </p>
        <p>
          <input
            id="border"
            type="checkbox"
            checked={border}
            onChange={(e) => setBorder(e.target.checked)}
          />
          <label htmlFor="border">Show border</label>
        </p>
        <p>
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(parseFloat(e.target.value))}
            id="fontsize"
          />
          <label htmlFor="fontsize">mm font size</label>
        </p>
        <p>
          <button
            onClick={() => {
              try {
                const input = prompt("Enter here");
                if (!input) return;
                setData(JSON.parse(input));
              } catch (e) {
                alert("Error while importing timetable");
                console.error(e);
              }
            }}
          >
            Import timetable
          </button>
          <button
            onClick={() => {
              prompt("Exported timetable", JSON.stringify(data));
            }}
          >
            Export timetable
          </button>
        </p>
        <p>
          <button onClick={() => window.print()}>Print</button>
        </p>
      </div>

      <TimeTable
        data={data}
        hyperlegible={hyperlegible}
        border={border}
        fontSize={fontSize}
      />
    </>
  );
}
