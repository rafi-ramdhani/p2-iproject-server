const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message })
      break;

    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message })
      break;

    case "InvalidUsernamePassword":
      res.status(401).json({ message: "Invalid username/password" })
      break;

    default:
      res.status(500).json(err.name)
      break;
  }
}

module.exports = errorHandler