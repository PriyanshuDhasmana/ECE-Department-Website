// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, 'your_jwt_secret_key'); // ✅ match this to auth.js
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Token is not valid' });
//   }
// };

// module.exports = auth;

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  console.log("🔐 Token received:", token);

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const actualToken = token.replace("Bearer ", "");
    const decoded = jwt.verify(actualToken, 'your_jwt_secret_key');
    console.log("✅ Token decoded:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification failed:", err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
