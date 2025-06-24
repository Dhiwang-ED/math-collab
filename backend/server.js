// ...kode sebelumnya
const authRouter = require('./auth');
app.use(express.json());
app.use('/api/auth', authRouter);
// ...lanjut kode socket.io