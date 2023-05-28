import express from 'express';
import multer from 'multer';
import path from 'path';
import StudentController from '../controller/student.controller.js';
import studentController from '../controller/student.controller.js';
import feedbackController from '../controller/feedback.controller.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const students = await StudentController.getStudents();
    return res.status(200).send(students);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Failed to find items!");
  }
});
router.get('/confirm-register', async (req, res) => {
  try {
    const students = await StudentController.getConfirmStuent();
    return res.status(200).send(students);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Failed to find items!");
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await StudentController.getStudentById(req.params.id);
    const feedback = await feedbackController.getFeedbackForStudent(req.params.id);
    console.log('feedback', feedback);
    return res.status(200).send({ ...student, feedback });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to find item!");
  }
});

router.post('/add', StudentController.upload, async (req, res) => {
  try {
    console.log('req', req.body);
    await StudentController.createStudent(req);
    return res.status(201).send();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await studentController.deleteStudent(req);
    return res.status(201).send();
  } catch (error) {
    res.status(500).send("Failed to delete student!");
  }
});
export default router;