import {Router} from "express"

const router = Router();

router.get('/', (req, res) => {
    res.render('route-pages/index');
})

export default router;