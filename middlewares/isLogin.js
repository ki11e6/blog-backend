import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";

export const isLogin = async (req, res, next) => {
  const token = getTokenFromHeader(req);
  const { userId } = await verifyToken(token);
  if (!userId || !token) {
    res.status(401);
    return next(new Error("Invalid/Expired token, please login again"));
  } else {
    req.userId = userId;
    next();
  }
};
