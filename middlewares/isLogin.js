import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";

export const isLogin = async (req, res, next) => {
  const token = getTokenFromHeader(req);
  const { userId } = await verifyToken(token);
  if (!userId) {
    res.status(401);
    return res.json({
      message: "Invalid/Expired token, please login again",
    });
  } else {
    req.userId = userId;
    next();
  }
};
