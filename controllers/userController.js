class userController {
  create = async (req, res, next) => {
    return res.status(200).json({ message: "Create successfully" });
  };

  fetch = async (req, res, next) => {
    return res.status(200).json({ message: "User successfully" });
  };

  fetchAll = async (req, res, next) => {
    return res.status(200).json({ message: "All Users successfully" });
  };

  delete = async (req, res, next) => {
    return res.status(200).json({ message: "User deleted successfully" });
  };

  update = async (req, res, next) => {
    return res.status(200).json({ message: "User deleted successfully" });
  };
}

module.exports = new userController();
