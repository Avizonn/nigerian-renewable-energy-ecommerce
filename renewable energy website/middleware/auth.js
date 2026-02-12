import { verifyToken } from '../lib/auth';

export default function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.userId;
    return handler(req, res);
  };
}
