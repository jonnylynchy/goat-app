import express from 'express';
import apiRoutes from './routers/api.js';
import defaultRoutes from './routers/default.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(apiRoutes);
app.use(defaultRoutes);

app.listen(PORT, (err) => {
    if (err) {
        throw new Error(err.message);
    }

    console.log(`APP START UP ON PORT: ${PORT}`)
});