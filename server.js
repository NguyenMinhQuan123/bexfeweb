const express = require('express');
const cors = require('cors'); // Thêm dòng này
const app = express();
const port = 5000;

app.use(cors()); // Thêm dòng này

app.get('/api/data', (req, res) => {
  const data = { message: 'Dữ liệu từ Back-end cổng 5000!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Back-end listening at http://localhost:${port}`);
});