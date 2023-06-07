const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Aquí verás todos los blogs')
})

module.exports = router;