import axios from 'axios';

const apiUrl = 'https://api.coinlore.net/api/tickers/';

export const getCryptos = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data; // Mengembalikan data cryptocurrency
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [];
  }
};
