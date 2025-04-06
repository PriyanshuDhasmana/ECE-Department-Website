function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
      const user = req.user; // already added by auth middleware
      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
      }
      next();
    };
  }
  
  module.exports = authorizeRoles;
  