import _ from 'lodash';

const data = [
  {
    username: 'luis',
    role: 'admin',
  },
  {
    username: 'pipo',
    role: 'seller',
  },
  {
    username: 'nico',
    role: 'seller',
  },
  {
    username: 'gabriel',
    role: 'customer',
  },
];

const result = _.groupBy(data, (item) => item.role);
console.log(result);
