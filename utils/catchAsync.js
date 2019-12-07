module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
    // above originally, fn(req, res, next).catch(err => next(err));
  };
};
