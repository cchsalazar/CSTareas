const express = require('express');
const app = express();
const port = 4000;
const tareasRouter = require('./routes/tareas')

app.use(express.json());
app.use('/api', tareasRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
