import { Router } from 'express'
import passport from 'passport'
import { validate } from '../middlewere'
import { Ping_POST, SchemeUpdate_PUT } from './panel'
import * as panelController from '../controllers/panelController';

const router = Router()

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: "All Good",
    })
})


//@ts-ignore
router.put('/:panelId', passport.authenticate('localapikey'), validate(SchemeUpdate_PUT), panelController.updatePanel);

//@ts-ignore
router.post('/:panelId/ping', passport.authenticate('localapikey'), validate(Ping_POST), panelController.refreshPanel);

export default router;