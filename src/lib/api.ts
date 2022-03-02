const CHUCK_API_URL = "https://api.chucknorris.io/jokes/random";

export const getChuckFact = async () => {
  return await fetch(CHUCK_API_URL).then((r) => r.json());
};

const COVID_API_URL =
  "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true";

export const latestUsaCovid = async () => {
  return await fetch(COVID_API_URL).then((r) => r.json());
};
