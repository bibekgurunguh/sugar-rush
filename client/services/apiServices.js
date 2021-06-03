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
    .catch((err) => console.log('ERROR from getUser:', err));
  return user;
};

// Posts request to create user account which returns the user_key,
// which is then immediately used to fetch the user profile without
// saving the user_key locally.
export const registerUser = async (userDetails) => {
  const fetchedData = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => getUser(res.data.user_token))
    .catch((err) => console.log('ERROR from registerUser: ', err));
  return fetchedData;
};
