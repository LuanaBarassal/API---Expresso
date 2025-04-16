const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');
const viagensRoutes = require('./routes/viagensRoutes');
const despesasRoutes = require('./routes/despesasRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/viagens', viagensRoutes);
app.use('/api/despesas', despesasRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));