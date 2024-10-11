import * as jose from "jose";
import { createSecretKey } from "crypto";

// A Secret Key for the HS256 algorithm must be one of type KeyObject, CryptoKey, Uint8Array, or JSON Web Key.
const secret = createSecretKey(Buffer.from(process.env.JWT_SECRET, "utf-8"));

export const generateToken = async (payload) => {
  return await new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4h")
    .sign(secret);
};
