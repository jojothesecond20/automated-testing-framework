import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  const url = 'http://localhost:60705/api/sum';
  const payload = JSON.stringify({ a: 5, b: 10 });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  check(res, {
    'status is 200': (r) => r.status === 200,
    'returns correct sum': (r) => r.json().result === 15,
  });

  sleep(1);
}
