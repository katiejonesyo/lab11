const app = require('./app');
const pool = require('./utils/pool');
const port = 3002;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});