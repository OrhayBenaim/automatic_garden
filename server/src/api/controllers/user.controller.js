
/**
 * Get user list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    res.json({Ok: true});
  } catch (error) {
    next(error);
  }
};
