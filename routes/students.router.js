import express from 'express';
import StudentController from '../controller/student.controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const students = await StudentController.getStudents();
      return res.status(200).send(students);
    } catch (error) {
      res.status(500).send("Failed to find items!");
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const student = await StudentController.getStudentById(req.params.id);
      return res.status(200).send(student);
    } catch (error) {
      res.status(500).send("Failed to find item!");
    }
  });
  
  router.post('/add', async (req, res) => {
    try {
       await StudentController.createStudent(req);
      return res.status(201).send();
    } catch (error) {
      res.status(500).send(error);
    }
  
  });
export default router;