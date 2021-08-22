import timePeriods from "../data/timeperiods";
import type { TimeTable as TimeTableType } from "../data/types";

export default function TimeTable({
  data,
  hyperlegible,
  border,
  fontSize,
}: {
  data: TimeTableType;
  hyperlegible: boolean;
  border: boolean;
  fontSize: number;
}) {
  return (
    <table
      className={`timetable ${hyperlegible ? "hyperlegible" : ""} ${
        border ? "border" : ""
      }`}
      style={{ fontSize: `${fontSize}mm` }}
    >
      <tr className="header-row">
        <th className="header-cell">Tercie 21 / 22</th>
        {timePeriods.map((timePeriod) => (
          <th className="header-cell" key={timePeriod.join()}>
            {timePeriod.join(" - ")}
          </th>
        ))}
      </tr>
      {data.map((day) => (
        <tr key={day.name} className="weekday-row">
          <td className="weekday-cell">{day.name}</td>
          {day.subjects.map((subject) => (
            <td
              className={`subject-cell ${
                "empty" in subject ? "empty" : "populated"
              }`}
              colSpan={subject.span ? subject.span : 1}
            >
              {"empty" in subject ? null : (
                <>
                  <span className="subject-name">{subject.name}</span>
                  <span className="subject-classroom">{subject.classroom}</span>
                  <span className="subject-teacher">
                    {subject.teacher[1]}{" "}
                    {subject.teacher[0].toLowerCase().startsWith("ch")
                      ? "Ch"
                      : subject.teacher[0][0]}
                    .
                  </span>
                </>
              )}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
