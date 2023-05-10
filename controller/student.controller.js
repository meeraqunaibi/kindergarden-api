import mongoose from "mongoose";
import Student from "../models/student.model.js";

const getStudents = async () => {
  try {
    const students = await Student.find().sort("fullName");
    return students;
  } catch (err) {
    console.error(err);
  }
};

const getStudentById = async (StudentId) => {
  const StudentDoc = await Student.findById(StudentId);

  if (StudentDoc) {
    const student = {
      fullName: StudentDoc.fullName,
      DOB: StudentDoc.DOB || "",
      levelOfEducation: StudentDoc.levelOfEducation,
      image: StudentDoc.image || "",
      teacher: StudentDoc.teacher,
    };

    return student;
  }
  return null;
};

const createStudent = async (req) => {
  const student = new Student(req.body);
  console.log(`Added student ${student.fullName}`);
  return await student.save();
  
};

export default { createStudent, getStudents, getStudentById };
