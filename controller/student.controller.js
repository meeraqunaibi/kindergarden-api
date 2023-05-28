import multer from 'multer';
import path from 'path';
import Student from "../models/student.model.js";
import Parent from "../models/parent.model.js";

const getStudents = async () => {
  try {
    const students = await Student.find({confirm: 1}).sort("fullName").populate(
      {
        path: 'parent',
      });
    return students;
  } catch (err) {
    console.error(err);
  }
};
const getConfirmStuent = async () => {
  try {
    const students = await Student.find({ confirm:0 }).sort("fullName").populate(
      {
        path: 'parent',
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
      parent: StudentDoc.parent
    };

    return student;
  }
  return null;
};

const createStudent = async (req) => {
  const parent = new Parent(JSON.parse(req.body.parent));
  const savedParent = await parent.save();
  let studentPayload = {
    fullName: req.body.fullName,
    DOB: req.body.DOB,
    levelOfEducation: req.body.levelOfEducation,
    bloodType: req.body.bloodType,
    copyOfIdCard: req.body.copyOfIdCard,
    image: req.file.path,
    hadAccident: req.body.hadAccident,
    sleepDuringTheDay: req.body.sleepDuringTheDay,
    likeWatchingTV: req.body.likeWatchingTV,
    withWhomChildLive: req.body.withWhomChildLive,
    description: req.body.description,
    afterSchoolStudent: req.body.afterSchoolStudent,
    transportation: JSON.parse(req.body.transportation),
    strength: req.body.strength,
    weakness: req.body.weakness,
    previous_kindergarten: req.body.previous_kindergarten,
    parent: savedParent._id,
    disease: req.body.disease,
    gender: req.body.gender,
    confirm: req.body.confirm
  };

  const student = new Student(studentPayload);
  console.log(req.body);
  console.log(`Added student ${student.fullName}`);
  return await student.save();

};

const deleteStudent = async (req) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Math.floor(Math.random() * 10000) + path.extname(file.originalname) )

  }
})
const upload = multer(
  {
    storage: storage,
    limits: { fileSize: 100000 },
    fileFilter: (req, file, cb) => {
      const fileType = /jpeg|jpg|png|gif/
      const mimeType = fileType.test(file.mimetype);
      const extname = fileType.test(path.extname(file.originalname));

      if (mimeType && extname) {
        return cb(null, true)
      }

      cb("Give proper files formate to upload")
    }
  }).single("image")
export default 
{ createStudent, 
  getStudents, 
  getStudentById, deleteStudent,
   upload,
    getConfirmStuent
  };
