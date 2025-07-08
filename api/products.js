require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());


const GOLD_API_KEY = process.env.GOLD_API_KEY;
 

app.get('/products', async (req, res) => {
  try {
    
    const goldResponse = await axios.get('https://www.goldapi.io/api/XAU/USD', {
      headers: {
        'x-access-token': GOLD_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    const goldPricePerOunce = goldResponse.data.price;
    const goldPricePerGram = goldPricePerOunce / 31.1035; 

    
    const rawData = fs.readFileSync('./products.json');
    const products = JSON.parse(rawData);

   
    const scores = products.map(p => p.popularityScore);
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    
    const enriched = products.map(p => {
      const price = (p.popularityScore + 1) * p.weight * goldPricePerGram;

      
      const normalized = max === min
        ? 3
        : ((p.popularityScore - min) / (max - min)) * 4 + 1;

      return {
        ...p,
        price: price.toFixed(2),
        popularityOutOfFive: normalized.toFixed(1)
      };
    });

   
    res.json(enriched);

  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Veriler alınamadı' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API çalışıyor: http://localhost:${PORT}/products`);
});
