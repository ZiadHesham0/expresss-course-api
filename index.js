const express = require("express");
const { body, validationResult } = require("express-validator");
const courseController = require("./controllers/courses.controller");
const { validationSchema } = require("./middleware/validationSchema");
const CourseRouter = require("./routes/courses.route");
const connectDB  = require("./config/mongodb");
const app = express();
app.use(express.json());

connectDB();
app.listen(5000, () => {
  console.log("listening on port 5000");
});

app.use("/api/courses", CourseRouter);

// app.get("/api/courses", courseController.getAllCourses);

// app.get("/api/courses/:id", courseController.getCourse);

// app.post("/api/courses", validationSchema, courseController.addCourse);

// app.patch("/api/courses/:id", courseController.updateCourse);

// app.delete("/api/courses/:id", courseController.deleteCourse);
