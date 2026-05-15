const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

app.listen(5000, () => {
  console.log("listening on port 5000");
});

let courses = [
  {
    id: 1,
    title: "Js Course",
    price: 400,
  },
  {
    id: 2,
    title: "ReactJs Course",
    price: 900,
  },
  {
    id: 3,
    title: "NextJs Course",
    price: 700,
  },
];

// GET ALL COURSES
app.get("/api/courses", (req, res) => {
  return res.json(courses);
});

// GET SINGLE COURSE
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === +req.params.id);
  if (!course) res.status(404).json({ message: "Course Not Found" });
  res.json(course);
});

// ADD NEW POST
app.post(
  "/api/courses",
  [
    body("title")
      .notEmpty()
      .withMessage("Title  is Required")
      .isLength({ min: 2 })
      .withMessage("Title must be more than 3 characters"),
    body("price").notEmpty().withMessage("price is Required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());
    const newCourse = { id: courses.length + 1, ...req.body };
    courses.push(newCourse);
    res.status(201).json(courses);
  },
);

// UPDATE SINGLE COURSE
app.patch("/api/courses/:id", (req, res) => {
  const courseIndex = courses.findIndex((c) => c.id === +req.params.id);
  if (courseIndex === -1)
    return res.status(404).json({ message: "Course Not Found" });
  courses[courseIndex] = { ...courses[courseIndex], ...req.body };
  res.json(courses[courseIndex]);
});

// DELETE SINGLE COURSE
app.delete("/api/courses/:id", (req, res) => {
  const courseID = +req.params.id;
  const courseIndex = courses.findIndex((c) => c.id === courseID);
  if (courseIndex === -1)
    return res.status(404).json({ message: "Course Not Found" });
  courses.splice(courseIndex, 1);
  return res.status(204).json({ message: "Course Delete Successfully :)" });
});
