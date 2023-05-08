import express from 'express';
const router = express.Router();
import userController from "../controller/user.controller.js"

router.post('/', async (req, res) => {
    try {
      const user = await userController.signUp(req, res);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  export default router;