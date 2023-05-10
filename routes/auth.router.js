import express from 'express';
const router = express.Router();
import authController from "../controller/auth.controller.js"

router.post('/', async (req, res) => {
    try {
      return await authController.signIn(req, res);
    } catch (error) {
      return res.status(500).send(error);
    }
  });

  export default router;