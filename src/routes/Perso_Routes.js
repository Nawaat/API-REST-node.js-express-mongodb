
const router = require('express').Router();


const PersoController = require('../controllers/Perso_Controller');


const Token = require('../providers/Validate_Token');

//passer par la validation du token 
// Token.validateToken,

router.post('/createPerso', Token.validateToken,PersoController.newPerso);

router.put('/updatePerso/:id', Token.validateToken,PersoController.updatePerso);

router.get('/afficheLesPersos', Token.validateToken, PersoController.ToutLesPersos);

router.get('/afficheLesPersosParAnime/:id_anime', Token.validateToken, PersoController.get_perso_by_anime_id);

router.delete('/deletePerso/:id', Token.validateToken, PersoController.deletePerso);

router.get('/GetOne/:id', Token.validateToken, PersoController.GetOnePerso);


module.exports = router;