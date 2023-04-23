// create an array from 1 to end
export const range = (end) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
    result: [...result, current],
    current: current + 1
    }),
    { result: [], current: 1 }
  );
  return result;
};

// get the number of days in the month that date's in
export const getDaysInMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

// get the following month
export const nextMonth = (date, cb) => {
  const mon = date.getMonth();
  if (mon < 11) {
    date.setMonth(mon + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

// get the previous month
export const prevMonth = (date, cb) => {
  const mon = date.getMonth();
  if (mon > 0) {
    date.setMonth(mon - 1);
  } else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};

// insert buffers for date 1st on carlendar
export const getSortedDays = (date) => {
  const daysInMonth = range(getDaysInMonth(date));
  const index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
};