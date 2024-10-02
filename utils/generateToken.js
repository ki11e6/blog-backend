import * as jose from "jose";
import { createSecretKey } from "crypto";

//for more secure
const secret = createSecretKey(Buffer.from(process.env.JWT_SECRET, "utf-8"));

export const generateToken = (payload) => {
  return new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(secret);
};
