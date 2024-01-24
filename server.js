const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve static files (like images) from the 'delete' directory
app.use('/delete', express.static(path.join(__dirname, 'delete')));

// Endpoint to get a list of files in the 'delete' directory
app.get('/getFiles', (req, res) => {
  const directoryPath = path.join(__dirname, 'delete');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json({ files });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
