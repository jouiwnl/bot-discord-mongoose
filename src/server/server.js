import express from 'express';
const server = express();

server.all('/', (req, res) => {
  res.send('Bot is running');
});  
  
const openServer = () => {
  server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
  });
};

export default openServer;
