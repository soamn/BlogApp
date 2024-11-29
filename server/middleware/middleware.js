const middleware = (req, res, next) => {
  const id = req.params.id;
  const regex = new RegExp("^[0-9]+$");
  const test = regex.test(id);
  if (test) {
    next();
  } else {
    res.status(404).send({ message: "No posts found" });
  }
};
module.exports = middleware;
