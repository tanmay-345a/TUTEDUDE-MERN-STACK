const getProtectedData = (req, res) => {
  res.json({
    message: "You have accessed the protected route!",
    user: req.user
  });
};

module.exports = {
  getProtectedData
};