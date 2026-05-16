const { body } = require("express-validator");

const validationSchema = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title  is Required")
      .isLength({ min: 2 })
      .withMessage("Title must be more than 3 characters"),
    body("price").notEmpty().withMessage("price is Required"),
  ];
};

module.exports = {
  validationSchema,
};
