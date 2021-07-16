const express = require('express');
const router = express.Router();


//getting details of user
router.get('/', async (req, res) => {
 res.send("Hellow")
});
module.exports = router;
