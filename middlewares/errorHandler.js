const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message })
      break;

    case "InvalidUsernamePassword":
      res.status(401).json({ message: "Invalid username/password" })
      break;

    case "Insufficient":
      res.status(40).json({ message: "Insufficient points" })
      break;

    case "Error":
      res.status(404).json({ message: "Character not found" })
      break;

    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid access" })
      break;

    default:
      res.status(500).json(err)
      break;
  }
}

module.exports = errorHandler