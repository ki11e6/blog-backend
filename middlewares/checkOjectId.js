import { isValidObjectId } from "mongoose";

const checkOjectId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    return next(new Error(`Invalid ObjectId of:${req.params.id}`));
  }
  next();
};
export default checkOjectId;
