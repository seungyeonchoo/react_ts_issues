const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateFormat = (date_input: string) => {
  const getDate = new Date(date_input);
  const year = getDate.getFullYear();
  const month = MONTH[getDate.getMonth()];
  const date = getDate.getDate() < 10 ? `0${getDate.getDate()}` : getDate.getDate();

  return `${date} ${month} ${year}`;
};

export default dateFormat;
