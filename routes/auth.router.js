import express from 'express';
const router = express.Router();
import authController from "../controller/auth.controller.js"

router.post('/', async (req, res) => {
    try {
      const user = await authController.signIn(req, res);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  export default router;