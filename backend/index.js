// index.js
const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

const clothes = [
  {"id":1,"name":"Classic White T-Shirt","category":"T-Shirt","price":399,"currency":"INR","image":"https://picsum.photos/seed/cloth1/600/400"},
  {"id":2,"name":"Slim Fit Blue Jeans","category":"Jeans","price":1199,"currency":"INR","image":"https://picsum.photos/seed/cloth2/600/400"},
  {"id":3,"name":"Black Leather Jacket","category":"Jacket","price":3499,"currency":"INR","image":"https://picsum.photos/seed/cloth3/600/400"},
  {"id":4,"name":"Floral Summer Dress","category":"Dress","price":1499,"currency":"INR","image":"https://picsum.photos/seed/cloth4/600/400"},
  {"id":5,"name":"Formal Cotton Shirt","category":"Shirt","price":799,"currency":"INR","image":"https://picsum.photos/seed/cloth5/600/400"},
  {"id":6,"name":"Men's Hoodie - Grey","category":"Hoodie","price":999,"currency":"INR","image":"https://picsum.photos/seed/cloth6/600/400"},
  {"id":7,"name":"Women Pleated Skirt","category":"Skirt","price":699,"currency":"INR","image":"https://picsum.photos/seed/cloth7/600/400"},
  {"id":8,"name":"Athletic Trackpants","category":"Trackpants","price":599,"currency":"INR","image":"https://picsum.photos/seed/cloth8/600/400"},
  {"id":9,"name":"Kids Graphic Tee","category":"T-Shirt","price":349,"currency":"INR","image":"https://picsum.photos/seed/cloth9/600/400"},
  {"id":10,"name":"Formal Blazer - Navy","category":"Blazer","price":2499,"currency":"INR","image":"https://picsum.photos/seed/cloth10/600/400"},
  {"id":11,"name":"Denim Jacket","category":"Jacket","price":1799,"currency":"INR","image":"https://picsum.photos/seed/cloth11/600/400"},
  {"id":12,"name":"Chiffon Saree - Peach","category":"Saree","price":1999,"currency":"INR","image":"https://picsum.photos/seed/cloth12/600/400"},
  {"id":13,"name":"Embroidered Kurta","category":"Kurta","price":899,"currency":"INR","image":"https://picsum.photos/seed/cloth13/600/400"},
  {"id":14,"name":"Casual Cotton Shorts","category":"Shorts","price":449,"currency":"INR","image":"https://picsum.photos/seed/cloth14/600/400"},
  {"id":15,"name":"Party Wear Gown","category":"Gown","price":3999,"currency":"INR","image":"https://picsum.photos/seed/cloth15/600/400"},
  {"id":16,"name":"Men's Polo Shirt","category":"Shirt","price":599,"currency":"INR","image":"https://picsum.photos/seed/cloth16/600/400"},
  {"id":17,"name":"Winter Wool Coat","category":"Coat","price":4599,"currency":"INR","image":"https://picsum.photos/seed/cloth17/600/400"},
  {"id":18,"name":"Printed Maxi Dress","category":"Dress","price":1299,"currency":"INR","image":"https://picsum.photos/seed/cloth18/600/400"},
  {"id":19,"name":"Ethnic Lehenga - Red","category":"Lehenga","price":5599,"currency":"INR","image":"https://picsum.photos/seed/cloth19/600/400"},
  {"id":20,"name":"Basic Black Leggings","category":"Leggings","price":349,"currency":"INR","image":"https://picsum.photos/seed/cloth20/600/400"},
  {"id":21,"name":"Sports Running Tee","category":"T-Shirt","price":449,"currency":"INR","image":"https://picsum.photos/seed/cloth21/600/400"},
  {"id":22,"name":"Denim Shorts","category":"Shorts","price":549,"currency":"INR","image":"https://picsum.photos/seed/cloth22/600/400"},
  {"id":23,"name":"Winter Sweater - Maroon","category":"Sweater","price":899,"currency":"INR","image":"https://picsum.photos/seed/cloth23/600/400"},
  {"id":24,"name":"Formal Trousers - Black","category":"Trousers","price":999,"currency":"INR","image":"https://picsum.photos/seed/cloth24/600/400"},
  {"id":25,"name":"Linen Shirt - Beige","category":"Shirt","price":899,"currency":"INR","image":"https://picsum.photos/seed/cloth25/600/400"},
  {"id":26,"name":"Ripped Skinny Jeans","category":"Jeans","price":1399,"currency":"INR","image":"https://picsum.photos/seed/cloth26/600/400"},
  {"id":27,"name":"Bomber Jacket","category":"Jacket","price":2299,"currency":"INR","image":"https://picsum.photos/seed/cloth27/600/400"},
  {"id":28,"name":"Silk Kurta Set","category":"Kurta","price":1799,"currency":"INR","image":"https://picsum.photos/seed/cloth28/600/400"},
  {"id":29,"name":"Flannel Check Shirt","category":"Shirt","price":749,"currency":"INR","image":"https://picsum.photos/seed/cloth29/600/400"},
  {"id":30,"name":"Layered Ruffle Dress","category":"Dress","price":1699,"currency":"INR","image":"https://picsum.photos/seed/cloth30/600/400"},
  {"id":31,"name":"Cargo Pants","category":"Trousers","price":1099,"currency":"INR","image":"https://picsum.photos/seed/cloth31/600/400"},
  {"id":32,"name":"Puffer Jacket - Olive","category":"Jacket","price":2999,"currency":"INR","image":"https://picsum.photos/seed/cloth32/600/400"},
  {"id":33,"name":"Sequin Party Top","category":"Top","price":699,"currency":"INR","image":"https://picsum.photos/seed/cloth33/600/400"},
  {"id":34,"name":"Classic Black Dress","category":"Dress","price":1399,"currency":"INR","image":"https://picsum.photos/seed/cloth34/600/400"},
  {"id":35,"name":"Printed Saree - Blue","category":"Saree","price":2199,"currency":"INR","image":"https://picsum.photos/seed/cloth35/600/400"},
  {"id":36,"name":"Casual Hoodie - Navy","category":"Hoodie","price":1049,"currency":"INR","image":"https://picsum.photos/seed/cloth36/600/400"},
  {"id":37,"name":"Embroidered Anarkali","category":"Dress","price":2899,"currency":"INR","image":"https://picsum.photos/seed/cloth37/600/400"},
  {"id":38,"name":"High Waist Jeans","category":"Jeans","price":1299,"currency":"INR","image":"https://picsum.photos/seed/cloth38/600/400"},
  {"id":39,"name":"Boys School Blazer","category":"Blazer","price":1599,"currency":"INR","image":"https://picsum.photos/seed/cloth39/600/400"},
  {"id":40,"name":"Girls Party Frock","category":"Dress","price":749,"currency":"INR","image":"https://picsum.photos/seed/cloth40/600/400"},
  {"id":41,"name":"Athleisure Joggers","category":"Trackpants","price":799,"currency":"INR","image":"https://picsum.photos/seed/cloth41/600/400"},
  {"id":42,"name":"V-Neck Tee - Olive","category":"T-Shirt","price":349,"currency":"INR","image":"https://picsum.photos/seed/cloth42/600/400"},
  {"id":43,"name":"Boyfriend Denim Jacket","category":"Jacket","price":1899,"currency":"INR","image":"https://picsum.photos/seed/cloth43/600/400"},
  {"id":44,"name":"Summer Chambray Shirt","category":"Shirt","price":699,"currency":"INR","image":"https://picsum.photos/seed/cloth44/600/400"},
  {"id":45,"name":"Silk Saree - Green","category":"Saree","price":3499,"currency":"INR","image":"https://picsum.photos/seed/cloth45/600/400"},
  {"id":46,"name":"Denim Overalls","category":"Overalls","price":1299,"currency":"INR","image":"https://picsum.photos/seed/cloth46/600/400"},
  {"id":47,"name":"Layered Midi Skirt","category":"Skirt","price":899,"currency":"INR","image":"https://picsum.photos/seed/cloth47/600/400"},
  {"id":48,"name":"Boho Printed Top","category":"Top","price":549,"currency":"INR","image":"https://picsum.photos/seed/cloth48/600/400"},
  {"id":49,"name":"Winter Thermal Set","category":"Thermals","price":699,"currency":"INR","image":"https://picsum.photos/seed/cloth49/600/400"},
  {"id":50,"name":"Festive Sherwani","category":"Sherwani","price":7999,"currency":"INR","image":"https://picsum.photos/seed/cloth50/600/400"}
]


// GET all clothes
app.get('/api/clothes', (req, res) => {
  res.json(clothes);
});

// Search
app.get('/api/clothes/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const category = (req.query.category || '').toLowerCase();

  let results = clothes;

  if (q) results = results.filter(item => item.name.toLowerCase().includes(q));
  if (category) results = results.filter(item => item.category.toLowerCase() === category);

  res.json(results);
});

app.listen(port, () => {
  console.log(`Clothes API running on http://localhost:${port}`);
});
