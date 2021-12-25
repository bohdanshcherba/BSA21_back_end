const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();

// OPTIONAL TODO: Implement route controller for fights
router.get('/',function (req,res,next){
    res.send("fights")
})

module.exports = router;
