import type { TimeTable } from "./types";

const data: { timePeriods: string[][]; timeTable: TimeTable; label: string } = {
  label: "honbra.com",
  timePeriods: [
    ["8:30", "9:15"],
    ["10:20", "10:05"],
    ["10:15", "11:00"],
    ["11:05", "11:50"],
    ["12:15", "13:00"],
    ["13:05", "13:50"],
    ["14:30", "15:15"],
    ["15:20", "16:05"],
    ["16:15", "17:00"],
    ["17:05", "17:50"],
  ],
  timeTable: [
    {
      name: "Po",
      subjects: [
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
      ],
    },
    {
      name: "Út",
      subjects: [
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
      ],
    },
    {
      name: "St",
      subjects: [
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
      ],
    },
    {
      name: "Čt",
      subjects: [
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
      ],
    },
    {
      name: "Pá",
      subjects: [
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
        { empty: true, span: 2 },
      ],
    },
  ],
};

export default data;
