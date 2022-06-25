const { Router } = require("express");
const{registerUser, loginUser, getMe}= require('../controllers/authControllers');

const router = Router();

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)


module.exports = router;