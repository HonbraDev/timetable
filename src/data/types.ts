export type TimeTable = Weekday[];

export interface Weekday {
  name: string;
  subjects: Subject[];
}

export type Subject = (
  | {
      name: string;
      teacher: [string, string];
      classroom: string;
    }
  | { empty: true }
) & {
  span?: number;
};
