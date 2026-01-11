const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos de la aplicación Angular construida
app.use(express.static(path.join(__dirname, 'dist/gestion-riesgos/browser')));

// Enviar todas las demás peticiones al archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/gestion-riesgos/browser/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node corriendo en http://localhost:${PORT}`);
});
