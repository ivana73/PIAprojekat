import express from 'express';
import { RadionicaController } from '../controllers/radionica.controller';
const radionicaRouter = express.Router();

radionicaRouter.route('/getRadionicaByName').post(
    (req, res) => new RadionicaController().getRadionicaByName(req, res)
)

radionicaRouter.route('/getRadionicaById').post(
    (req, res) => new RadionicaController().getRadionicaById(req, res)
)

radionicaRouter.route('/getSveAktuelneRadionice').post(
    (req, res) => new RadionicaController().getSveAktuelneRadionice(req, res)
)

radionicaRouter.route('/addComment').post(
    (req, res) => new RadionicaController().addComment(req, res)
)

radionicaRouter.route('/getComments').post(
    (req, res) => new RadionicaController().getComments(req, res)
)

radionicaRouter.route('/decNumberMesta').post(
    (req, res) => new RadionicaController().decNumberMesta(req, res)
)

export default radionicaRouter;