//handle login

router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await login(username, password);
        req.session.user = user;
        res.redirect('/profile');
    } catch (e) {
        res.status(401).render('login', { title: 'Login', error: e });
    }
});

//handle logout
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

export default router;