import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'
export function signToken(payload: object){ return jwt.sign(payload, JWT_SECRET, { expiresIn:'7d' }) }
export function verifyToken(token: string){ try{ return jwt.verify(token, JWT_SECRET) as any } catch{ return null } }
