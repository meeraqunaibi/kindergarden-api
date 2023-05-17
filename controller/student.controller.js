import mongoose from "mongoose";
import Student from "../models/student.model.js";
import Parent from "../models/parent.model.js";

const getStudents = async () => {
  try {
    const students = await Student.find().sort("fullName").populate(
     { path: 'parent',
    });
    return students;
  } catch (err) {
    console.error(err);
  }
};

const getStudentById = async (StudentId) => {
  const StudentDoc = await Student.findById(StudentId).populate(
    {
      path: 'parent',
    });

  if (StudentDoc) {
    const student = {
      fullName: StudentDoc.fullName,
      DOB: StudentDoc.DOB || "",
      levelOfEducation: StudentDoc.levelOfEducation,
      image: StudentDoc.image || "",
      teacher: StudentDoc.teacher,
      parent:StudentDoc.parent
    };

    return student;
  }
  return null;
};

const createStudent = async (req) => {
  const parent = new Parent(req.body.parent);
  const savedParent = await parent.save();
  const student = new Student({ ...req.body, parent: savedParent._id});
  console.log(req.body);
  console.log(`Added student ${student.fullName}`);
  return await student.save();
  
};

export default { createStudent, getStudents, getStudentById };
