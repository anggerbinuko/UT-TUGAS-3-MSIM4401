<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crypto Prices</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="container">
        <ion-button @click="fetchData" color="primary">Get Data</ion-button>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th> <!-- Kolom Rank ditambahkan -->
                <th>Name</th>
                <th>Symbol</th>
                <th>Harga USD</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(crypto, index) in cryptoData" :key="crypto.id">
                <td>{{ index + 1 }}</td> <!-- Tampilkan Rank berdasarkan indeks -->
                <td>{{ crypto.name }}</td>
                <td>{{ crypto.symbol }}</td>
                <td>{{ crypto.price_usd }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { getCryptos } from '../services/cryptoService';

export default {
  name: 'HomePage',
  data() {
    return {
      cryptoData: [] // Data kripto
    };
  },
  methods: {
    async fetchData() {
      // Ambil data dari API
      const data = await getCryptos();
      // Urutkan berdasarkan harga USD secara menurun
      this.cryptoData = data.sort((a, b) => b.price_usd - a.price_usd);
    }
  }
};
</script>

<style scoped>
/* Menambahkan background putih untuk konten halaman */
ion-content {
  --ion-background-color: #ffffff;
  --ion-text-color: #333333;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

/* Menambahkan background putih untuk kontainer tabel */
.table-container {
  background-color: #ffffff;
  margin-top: 20px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Opsional: menambah bayangan */
}

table {
  width: 100%;
  border-collapse: collapse;
}

/* Menambahkan background putih untuk sel header tabel */
th, td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
}
</style>
