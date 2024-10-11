export const getTokenFromHeader = (req) => {
  const headerObj = req.headers;
  const authHeader = headerObj["authorization"];
  if (headerObj && authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];
    if (token && token.trim() !== "") {
      return token;
    }
  }
  return false;
};
