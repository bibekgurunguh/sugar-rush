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
