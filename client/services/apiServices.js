const BASE_URL = 'https://fe-challenge.sugarrushcreative.com/api';

export const getIndustries = async () => {
  const industries = await fetch(`${BASE_URL}/industries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log('ERROR:', err));
  return industries;
};

export const registerUser = async (userDetails) => {
  const fetchedData = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log('ERROR: ', err));
  return fetchedData;
};

export const getUser = async (userKey) => {
  const user = await fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Xfe-Api-Key': 'n4/uQEtQYXUaMnQugHksx9T0Y83ZIYllB7s324ccw4g=',
      'Xfe-User-Key': userKey,
    },
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log('ERROR:', err));
  return user;
};
