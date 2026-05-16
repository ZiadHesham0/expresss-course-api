const { validationResult } = require("express-validator");
let { courses } = require("../data/courses");
const Course = require("../models/Course");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.json(courses);
  } catch (error) {
    console.log(error.message);
  }
};

const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) res.status(404).json({ message: "Course Not Found" });
  return res.json(course);
};

const addCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  // const newCourse = { id: courses.length + 1, ...req.body };
  // courses.push(newCourse);
  const newCourse = await Course.create(req.body);
  return res.status(201).json(newCourse);
};

const updateCourse = async (req, res) => {
  try {
    const courseIndex = await Course.findByIdAndUpdate(req.params.id, res.body);
    return res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    return res.status(404).json({ message: "Course Not Found" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseIndex = await Course.findByIdAndDelete(req.params.id);
    return res.status(204).json({ message: "Course Delete Successfully :)" });
  } catch (error) {
    return res.status(404).json({ message: "Course Not Found" });
  }
};

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};
