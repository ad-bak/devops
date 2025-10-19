import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.json({
    message: 'Hello, World!',
    service: "hello-node",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString(),
  });

})

app.get('/ready', (_, res) => {
  res.status(200).send('ready');
})

app.get('/health', (_, res) => {
  res.status(200).send('ready');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
