const router = require('express').Router();

router.post('/register', (reg, res) => {
    res.send('Register');
});

module.exports = router;
