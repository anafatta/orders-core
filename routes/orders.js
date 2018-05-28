const express = require ('express');
const router = express.Router();

router.get('/order', (req, res, next) => {
    res.send('ORDER ENDPONT');
})

module.exports = router;