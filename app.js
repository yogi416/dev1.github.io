const express = require("express");
const app = express();
const path = require('path');
app.use((req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.listen(8000, () => {
 // let dat = '1 day, 0 hour, 16 minutes';
 // let cut = new Date('2021-04-29');
 //  var d = new Date(new Date(cut).getTime() + (24 * 60 * 60 * 1000)).getDate() ;
 //  f =new Date(new Date(cut).getTime() + (24 * 60 * 60 * 1000)).getMonth()+1
 //  console.log(`Server is running on port ${PORT}.`, new Date().toLocaleDateString('en-US'), new Date(new Date().getTime() + (-24 * 60 * 60 * 1000)).getDate(), d, f);
  console.log(`Server is running on port 8000.`)
});