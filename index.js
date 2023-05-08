import express from 'express';
import mongoose  from 'mongoose';
import studentRouter from './routes/students.router.js';
import postRouter from './routes/posts.router.js';
import kindergartenFeedbackRouter from "./routes/kindergartenFeedback.router.js"
import userRouter from "./routes/user.router.js"
import authRouter from "./routes/auth.router.js"
const app =  express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/students', studentRouter);
app.use('/posts', postRouter);
app.use('/kindergartenFeedback', kindergartenFeedbackRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://127.0.0.1:${port}`);
    dbConnect();
  });
  
  const dbConnect = () => {
    console.log("connecting to db...");
    mongoose.connect("mongodb://127.0.0.1:27017/kindergarten")
      .then(() => {
        console.log(`🤗 [server]: Connected to MongoDB`);
      })
      .catch((err) => {
        console.log(`🤨 [server]: Failed to connect to mongodb ${err}`);
      });
  }
