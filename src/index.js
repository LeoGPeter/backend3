import app from './app.js';
import connectMongo from './config/mongo.js';

const PORT = process.env.PORT || 3000;

await connectMongo();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});