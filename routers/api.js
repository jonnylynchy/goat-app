import express from "express";
import { getFile } from '../helpers/index.js';

const router = express.Router();

router.get('/api/goats', async (req, res) => {
    const liveGoatData = await getFile();
    console.log('LIVE GOAT DATA', liveGoatData);

    res.json(liveGoatData);
});

export default router;