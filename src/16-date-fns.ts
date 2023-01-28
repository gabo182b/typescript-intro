import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = January, 1 = February

const result = subDays(date, 30);

const resultToString = format(result, 'yyyy/MM/dd');

console.log(resultToString);
