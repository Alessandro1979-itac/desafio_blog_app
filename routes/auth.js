const router = require('express').Router();
const authControl = require('../controller/auth');

router.get('/', (req, res) => {
    //carregar pagina login ou registro
});
router.get('/registro', (_, res) => {
    res.render('../views/layouts/auth/registry');
});
router.post('/registro', authControl.createAccount);
router.get('/login', (_, res) => {
    res.render('../views/layouts/auth/login');
});
router.post('/login', authControl.login);
router.post('/login-side', authControl.login_side);
router.get('/logout', authControl.logout);

module.exports = router;
