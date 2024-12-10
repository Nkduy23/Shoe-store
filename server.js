const express = require('express');
const app = express();
const path = require('path');

// Cấu hình thư mục chứa tệp JSON
const products = require('./json/products.json');

// API để trả về dữ liệu sản phẩm
app.get('/api/products', (req, res) => {
  res.json(products);  // Trả về dữ liệu từ products.json
});

// Cấu hình view engine là Handlebars
app.set('view engine', 'hbs');

// Cấu hình Express để phục vụ các tệp tĩnh (CSS, JS, hình ảnh, v.v.)
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình thư mục chứa views là thư mục gốc
app.set('views', path.join(__dirname));  // Sử dụng __dirname để trỏ đến thư mục gốc

// Đường dẫn đến tệp HBS
app.get('/', (req, res) => {
  res.render('index'); // Tệp index.hbs nằm trong thư mục gốc
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
