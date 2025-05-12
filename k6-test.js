import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50, // number of virtual users
  duration: '10s', // test duration
};

export default function () {
  const res = http.get('http://localhost:5000/api/add?a=5&b=8');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body has result 13': (r) => r.json().result === 13,
  });
  sleep(1);
}
