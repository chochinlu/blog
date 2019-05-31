import { format } from 'date-fns';

const baseUrl = 'https://api.github.com/repos/chochinlu/blog/issues';

// for article list
export const initUrl = `${baseUrl}?page=1&per_page=10`;

export const issueUrl = id =>
  `https://api.github.com/repos/chochinlu/blog/issues/${id}`;

const t = `${process.env.REACT_APP_TA}${process.env.REACT_APP_TB}`;

export const requestConfig = {
  headers: { Authorization: `token ${t}` }
};

export const formatedDate = date => format(date, 'YYYY-MM-DD');
