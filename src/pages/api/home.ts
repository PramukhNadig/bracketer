import express from 'express';
import Home from '../../components/home';

const router = express.Router();

router.get('/', (req: any, res: any) => {
    res.render('home', { title: 'Home', component: Home });
});

export default router;


