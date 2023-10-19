const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Puedes configurar el puerto que desees

app.use(cors());
app.use(express.json());

// Conecta las rutas de la API
const todoRoutes = require('./routes/todoRoutes');
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
