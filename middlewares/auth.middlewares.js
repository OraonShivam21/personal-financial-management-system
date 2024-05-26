const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const secretKey = crypto
  .createHash("sha256")
  .update(String(process.env.SECRET_KEY))
  .digest("base64")
  .substring(0, 32);

const auth = async (req, res, next) => {
  if (
    req.headers.authorization?.split(" ")[0] === "Bearer" &&
    req.headers.authorization?.split(" ")[1]
  ) {
    const token = req.headers.authorization?.split(" ")[1];
    try {
      const decoded = jwt.verify(token, secretKey);

      if (!decoded) throw "Unauthorized - You're not authorized!";
      
      const userFound = await prisma.user.findUnique({
        where: {
          _id: decoded.userID,
        },
      });
      req.userID = userFound._id;
      console.log(userFound.name);
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
  } else {
    res
      .status(401)
      .json({ error: "Invalid bearer token! OR Access token missing!" });
  }
};

module.exports = auth;
