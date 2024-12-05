
# Crypto Prices App

A simple mobile-friendly app built using Vue.js and Ionic Framework to display cryptocurrency data fetched from the [CoinLore API](https://api.coinlore.net/api/tickers/).

## Features
- Fetch and display real-time cryptocurrency data.
- Displays attributes: Name, Symbol, and USD Price.
- Styled for a clean and responsive UI.

## Files
This project consists of two main files:
1. `HomePage.vue`: Handles the user interface and interaction.
2. `cryptoService.js`: Manages API calls to fetch cryptocurrency data.

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/crypto-prices-app.git
   cd crypto-prices-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Project Structure
- `HomePage.vue`: The main component for displaying the app's UI.
- `cryptoService.js`: Contains the `getCryptos` function to interact with the CoinLore API.

## API Information
The app fetches data from the [CoinLore API](https://api.coinlore.net/api/tickers/). Example response:
```json
{
  "data": [
    {
      "id": "90",
      "name": "Bitcoin",
      "symbol": "BTC",
      "price_usd": "26917.98"
    },
    ...
  ]
}
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements
- [Vue.js](https://vuejs.org/)
- [Ionic Framework](https://ionicframework.com/)
- [Axios](https://axios-http.com/)
- [CoinLore API](https://www.coinlore.com/)

---

**Note:** This project is developed as a part of the `MSIM4401` course assignment.
