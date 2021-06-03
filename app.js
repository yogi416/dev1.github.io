const path = require('path');
app.use((req, res) => {
  res.sendFile(path.join(__dirname, index));
});