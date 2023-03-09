/*
    path:api/login
*/
const { Router, response } = require('express');
const { check } = require('express-validator');

const { validateData } = require('../middlewares/field-validation');
const { createUser } = require('../controllers/auth');

const router = Router();

router.post('/new', [
    check('name', 'Name must be providen').not().isEmpty(),
    check('email', 'Valid email address must be providen').isEmail(),
    check('password', 'Password must be providen').not().isEmpty(),
    validateData
], createUser);

module.exports = router;