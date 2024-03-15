import { Session } from 'next-iron-session';
import { NextApiRequest, NextApiResponse } from 'next';
import { login, createLogin } from '../../data/login';

//handle login
export default async function handler(req: NextApiRequest & { session: Session }, res: NextApiResponse) {
    if (req.url === '/api/login' && req.method === 'POST' && req.body.username && req.body.password) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const user = await login(username, password);
            (req.session as any).user = user;
            res.redirect('/');
        } catch (e) {
            res.status(401).json({ error: e });
        }
    }
    else if (req.url == '/api/logout' && req.method === 'GET') {
        req.session.destroy();
        res.redirect('/');
    }
    else if (req.url == '/api/createLogin' && req.method === 'POST' ) {
        try {
            if (!req.body.username || !req.body.password) {
                throw 'Username and password are required';
            }
            const username = req.body.username;
            const password = req.body.password;
            const user = await createLogin(username, password);
            (req.session as any).user = user;
            res.redirect('/');
        } catch (e) {
            res.status(401).json({ error: e });
        }
    }
    else {
        res.status(404).end();
    }
}

